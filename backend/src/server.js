// File: backend/src/server.js
require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoute');
const db = require('./db');

const app = express();
const PORT = process.env.BACKEND_PORT || 5000;

// --- MIDDLEWARE ORDER IS CRITICAL ---

// 1. CORS Middleware - Allow requests from your frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));

// 2. JSON Body Parser Middleware - This creates `req.body`. MUST BE BEFORE ROUTES.
app.use(express.json());

// 3. API Routes - Now your routes will have access to `req.body`
app.use('/api/auth', authRoutes);


// Root/Health Check Route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Error Handling Middleware (catches errors from routes)
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.stack);
  res.status(500).json({ message: 'Something went wrong on the server!' });
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});