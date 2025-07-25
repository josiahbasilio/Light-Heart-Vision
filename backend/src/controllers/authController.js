const db = require('../db');
const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.signup = async (req, res) => {
    // --- CHANGE 1: Expect 'username' from the request body ---
    const { username, email, password } = req.body;

    // --- CHANGE 2: Add validation for 'username' ---
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, email and password are required' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    try {
        const existingUser = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(409).json({ message: 'Email already in use.' });
        }

        // (Optional check for unique username)
        const existingUsername = await db.query('SELECT * FROM users WHERE username = $1', [username]);
        if (existingUsername.rows.length > 0) {
            return res.status(409).json({ message: 'Username is already taken.' });
        }

        const hashPass = await bcrypt.hash(password, saltRounds);

        // --- CHANGE 3: Update the INSERT query ---
        const newUser = await db.query(
           'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email, created_at',
            [username, email, hashPass] // Add 'username' to the parameters array
        );
        
        console.log('User created:', newUser.rows[0]);
        res.status(201).json({
            message: 'User created successfully!',
            user: newUser.rows[0]
        });
    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ message: 'Internal server error during signup.' });
    }
};

// --- NO CHANGES NEEDED FOR LOGIN ---
exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        console.log('User logged in:', { id: user.id, email: user.email });
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                username: user.username, // Also return the username on login
                email: user.email,
                created_at: user.created_at
            }
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Internal server error during login.' });
    }
};