const db = require("../db");
const bcrypt = require("bcrypt");

const saltRounds = 10;

exports.signup = async (req, res) => {
  // This is our most important debugging tool.
  // If you don't see this log, the request isn't even reaching this function.
  console.log("--- Signup request received ---");
  console.log("Request body:", req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  try {
    const existingUser = await db.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (existingUser.rows.length > 0) {
      console.log("User already exists:", email);
      return res.status(409).json({ message: "Email already in use." });
    }

    const hashPass = await bcrypt.hash(password, saltRounds);

    const newUser = await db.query(
      "INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email, created_at",
      [email, hashPass]
    );

    console.log("User created successfully:", newUser.rows[0]);
    return res.status(201).json({
      message: "User created successfully!",
      user: newUser.rows[0],
    });
  } catch (error) {
    console.error("--- DATABASE OR BCRYPT ERROR IN SIGNUP ---", error);
    return res
      .status(500)
      .json({ message: "Internal server error during signup." });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const user = result.rows[0];
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    console.log("User logged in:", { id: user.id, email: user.email });
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        username: user.username, // username
        created_at: user.created_at,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error during login." });
  }
};
