
require('dotenv').config();
const fs = require('fs');
const path = require('path'); 
const { Pool } = require('pg');

// Read the CA certificate file content
// Ensure the path in DB_SSL_CA_PATH from .env is correct relative to where your app runs
const caPath = path.resolve(__dirname, 'ca.pem');
let caCert;
try {
    // Read the certificate file from the reliable path
    caCert = fs.readFileSync(caPath).toString();
    console.log("CA Certificate loaded successfully.");
} catch (error) {
    console.error("!!! CRITICAL: Error reading CA certificate file:", error);
    // In production, you might want to exit if the cert can't be loaded
     process.exit(1); 
}

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    ssl: process.env.DB_SSL_MODE === 'require' ? {
        rejectUnauthorized: true, // Use true with a valid CA
        ca: caCert,              // Provide the certificate content
    } : false,
    // Optional Pool settings
    max: 10, // Example: max 10 clients in the pool
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000, // Increase timeout slightly if needed
});

// Optional: Test connection on startup (logs errors)
pool.connect()
    .then(client => {
        console.log('Successfully connected to Aiven PostgreSQL pool!');
        client.release(); // Release the client immediately after successful connection test
    })
    .catch(err => {
        console.error('Error connecting to Aiven PostgreSQL pool:', err.stack);
        // You might want to exit the application if the initial connection fails
        // process.exit(1);
    });

// Export a query function using the pool
module.exports = {
    query: (text, params) => pool.query(text, params),
    // Optionally export the pool itself if needed for transactions
    // getPool: () => pool
};