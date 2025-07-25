'use client';

import './signUp.css'; // Your styles for this page
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // For the "Login" link at the bottom

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validations, setValidations] = useState({
    emailValid: true,
    passwordStrong: true,
    passwordsMatch: true
  });

  const router = useRouter();

  // This useEffect validates the form as the user types
  useEffect(() => {
    const emailValid = form.email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) : true;
    const passwordStrong = form.password ? form.password.length >= 6 : true;
    const passwordsMatch = form.password && form.confirmPassword ? form.password === form.confirmPassword : true;
    setValidations({ emailValid, passwordStrong, passwordsMatch });
  }, [form.email, form.password, form.confirmPassword]);

  const handleChange = (e) => {
    setMessage(''); // Clear any previous success/error messages
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);

    // Final validation check on submit
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    const isPasswordStrong = form.password.length >= 6;
    const isPasswordsMatch = form.password === form.confirmPassword;

    // Update validation state to show all errors if user clicks submit early
    setValidations({
      emailValid: isEmailValid,
      passwordStrong: isPasswordStrong,
      passwordsMatch: isPasswordsMatch
    });

    if (!isEmailValid || !isPasswordStrong || !isPasswordsMatch) {
      setMessage("❌ Please correct the highlighted errors.");
      setIsLoading(false);
      return;
    }

    // --- API Call to Backend ---
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
      const apiUrl = `${backendUrl}/api/auth/signup`; // Correct lowercase 'signup'

      const requestBody = {
        username: form.name,
        email: form.email,
        password: form.password,
      };

      console.log("Sending data:", JSON.stringify(requestBody));

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody), // Use the new requestBody object
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || `Error: ${res.status} - ${res.statusText}`);
      }

      // Success!
      setMessage(`✅ ${data.message} Redirecting to login...`);
      setForm({ name: '', email: '', password: '', confirmPassword: '' }); // Clear the form

      setTimeout(() => {
        router.push('/login');
      }, 2000);

    } catch (error) {
      console.error("Signup Fetch Error:", error);
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="signUp-page">
      <div className="signup-container">
        <h1>✨ Ignite Your Inner Vision ✨</h1>
        <p>Be part of something bright, bold, and heart-led.</p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Name Input */}
          <div className="input-group">
            <input id="name" type="text" name="name" placeholder=" " value={form.name} onChange={handleChange} required autoComplete="name" />
            <label htmlFor="name">Full Name</label>
          </div>

          {/* Email Input */}
          <div className="input-group">
            <input id="email" type="email" name="email" placeholder=" " value={form.email} onChange={handleChange} required autoComplete="email" />
            <label htmlFor="email">Email Address</label>
          </div>
          {!validations.emailValid && form.email && (
            <p className="feedback error">❌ Enter a valid email format</p>
          )}

          {/* Password Input */}
          <div className="input-group">
            <input id="password" type="password" name="password" placeholder=" " value={form.password} onChange={handleChange} required autoComplete="new-password" />
            <label htmlFor="password">Password (min 6 characters)</label>
          </div>
           {!validations.passwordStrong && form.password && (
             <p className="feedback error">❌ Password must be at least 6 characters</p>
          )}

          {/* Confirm Password Input */}
          <div className="input-group">
            <input id="confirmPassword" type="password" name="confirmPassword" placeholder=" " value={form.confirmPassword} onChange={handleChange} required autoComplete="new-password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
           {!validations.passwordsMatch && form.confirmPassword && (
             <p className="feedback error">❌ Passwords do not match</p>
          )}

          {/* Submit Button */}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        {/* Overall success/error message */}
        {message && <p className={`message ${message.startsWith('❌') ? 'error' : 'success'}`}>{message}</p>}
        
        {/* Use Link component for faster, client-side navigation */}
        <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#555', textAlign: 'center' }}>
          Already a member?{' '}
          <Link href="/login" style={{ color: '#993333', fontWeight: '600', textDecoration: 'none' }}>
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}