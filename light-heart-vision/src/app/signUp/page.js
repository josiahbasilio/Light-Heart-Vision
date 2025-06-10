
'use client'; // Keep this if using App Router (src/app/)

import './signUp.css'; // Adjust path if needed (e.g., ../styles/signUp.css)
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Keep if using App Router
// If using Pages Router (pages/ directory), use: import { useRouter } from 'next/router';

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: '', // Keep if you want to collect it, but backend doesn't use it yet
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  // Removed 'submitted' state as we only care about validation on actual submit attempt
  const [validations, setValidations] = useState({
    emailValid: false,
    passwordStrong: false,
    passwordsMatch: false
  });

  const router = useRouter();

  // This useEffect still performs validation as user types - good UX
  useEffect(() => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    const passwordStrong = form.password.length >= 6;
    const passwordsMatch = form.password === form.confirmPassword && form.password !== ''; // Only match if password exists
    setValidations({ emailValid, passwordStrong, passwordsMatch });
  }, [form]);

  const handleChange = (e) => {
    setMessage(''); // Clear message on new input
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // --- UPDATED handleSubmit ---
  const handleSubmit = async (e) => { // Make the function async
    e.preventDefault();
    setMessage(''); // Clear previous messages
    setIsLoading(true); // Start loading

    // Re-check validations on submit, in case useEffect hasn't caught up
    // or user bypasses interaction
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    const isPasswordStrong = form.password.length >= 6;
    const isPasswordsMatch = form.password === form.confirmPassword;

    if (!isEmailValid || !isPasswordStrong || !isPasswordsMatch) {
      // Construct a more specific error message based on failures
      let errorMsg = "❌ Please fix the errors: ";
      if (!isEmailValid) errorMsg += "Invalid email format. ";
      if (!isPasswordStrong) errorMsg += "Password too short. ";
      if (!isPasswordsMatch) errorMsg += "Passwords do not match. ";
      setMessage(errorMsg.trim());
      setIsLoading(false); // Stop loading
      return; // Stop the submission
    }

    // --- API Call to Backend ---
    try {
      // Use environment variable or default for backend URL
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5001';
      const apiUrl = `${backendUrl}/api/auth/signup`;

      console.log("Sending request to:", apiUrl); // Debug log
      console.log("Sending data:", JSON.stringify({ email: form.email, password: form.password })); // Debug log

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Send ONLY what the backend signup controller expects
          email: form.email,
          password: form.password,
          // If you update backend to accept name, add: name: form.name
        }),
      });

      const data = await res.json(); // Parse the JSON response from the backend

      if (!res.ok) {
        // If response status is not 2xx, use message from backend or throw error
        throw new Error(data.message || `Error: ${res.status} - ${res.statusText}`);
      }

      // Success! Use message from backend
      setMessage(`✅ ${data.message} Redirecting to login...`);
      setForm({ name: '', email: '', password: '', confirmPassword: '' }); // Clear form

      // Redirect to login page after a short delay
      setTimeout(() => {
        // If using Pages Router, use '/login'
        // If using App Router, depends on your login page path, e.g., '/login'
        router.push('/login');
      }, 2000); // 2 second delay

    } catch (error) {
      console.error("Signup Fetch Error:", error);
      // Display the error message caught or a generic one
      setMessage(`❌ Error: ${error.message || 'Could not connect to server.'}`);
    } finally {
      setIsLoading(false); // Stop loading, regardless of success or error
    }
    // --- End API Call ---
  };

  return (
    <main className="signUp-page">
      <div className="signup-container">
        <h1>✨ Ignite Your Inner Vision ✨</h1>
        <p>Be part of something bright, bold, and heart-led.</p>

        <form onSubmit={handleSubmit}>
          {/* Name Input (Optional - keep if needed, but data not sent yet) */}
          <div className="input-group">
            <input type="text" name="name" placeholder=" " value={form.name} onChange={handleChange} required />
            <label>Full Name</label>
          </div>

          {/* Email Input */}
          <div className="input-group">
            <input type="email" name="email" placeholder=" " value={form.email} onChange={handleChange} required />
            <label>Email Address</label>
          </div>
          {/* Show feedback immediately if email is invalid after first interaction */}
          {form.email && !validations.emailValid && (
            <p className="feedback error">❌ Enter a valid email format</p>
          )}

          {/* Password Input */}
          <div className="input-group">
            <input type="password" name="password" placeholder=" " value={form.password} onChange={handleChange} required />
            <label>Password (min 6 characters)</label>
          </div>
          {/* Show feedback immediately if password is too short after first interaction */}
           {form.password && !validations.passwordStrong && (
             <p className="feedback error">❌ Password must be at least 6 characters</p>
          )}

          {/* Confirm Password Input */}
          <div className="input-group">
            <input type="password" name="confirmPassword" placeholder=" " value={form.confirmPassword} onChange={handleChange} required />
            <label>Confirm Password</label>
          </div>
          {/* Show feedback immediately if passwords don't match after first interaction */}
           {form.confirmPassword && !validations.passwordsMatch && (
             <p className="feedback error">❌ Passwords do not match</p>
          )}

          {/* Submit Button - Disable while loading */}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        {/* Display overall success/error message */}
        {message && <p className={`message ${message.startsWith('❌') ? 'error' : 'success'}`}>{message}</p>}
        <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#555', textAlign: 'center' }}>
  Already a member?{' '}
  <a href="/login" style={{ color: '#993333', fontWeight: '600', textDecoration: 'none' }}>
    Login
  </a>
</p>

      </div>
    </main>
  );
}