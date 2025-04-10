'use client';

import './signUp.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [validations, setValidations] = useState({
    emailValid: false,
    passwordStrong: false,
    passwordsMatch: false
  });

  const router = useRouter();

  useEffect(() => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    const passwordStrong = form.password.length >= 6;
    const passwordsMatch = form.password === form.confirmPassword;
    setValidations({ emailValid, passwordStrong, passwordsMatch });
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validations.emailValid || !validations.passwordStrong || !validations.passwordsMatch) {
      setMessage("❌ Please fix the errors above.");
      return;
    }

    setMessage("🚀 Signed up successfully!");
    setForm({ name: '', email: '', password: '', confirmPassword: '' });

    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  return (
    <main className="signUp-page">
      <div className="signup-container">
      <h1>✨ Ignite Your Inner Vision ✨</h1>
       <p>Be part of something bright, bold, and heart-led.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              required
            />
            <label>Email Address</label>
          </div>
          {submitted && (
            <p className="feedback">
              {validations.emailValid ? '✅ Valid email' : '❌ Enter a valid email'}
            </p>
          )}

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder=" "
              value={form.password}
              onChange={handleChange}
              required
            />
            <label>Password (min 6 characters)</label>
          </div>
          {submitted && (
            <p className="feedback">
              {validations.passwordStrong ? '✅ Password is strong' : '❌ Password too short'}
            </p>
          )}

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder=" "
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <label>Confirm Password</label>
          </div>
          {submitted && (
            <p className="feedback">
              {validations.passwordsMatch ? '✅ Passwords match' : '❌ Passwords do not match'}
            </p>
          )}

          <button type="submit">Sign Up</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </main>
  );
}
