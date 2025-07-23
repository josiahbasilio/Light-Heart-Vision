'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [passwordValid, setPasswordValid] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const router = useRouter();

  
  useEffect(() => {
    setPasswordValid(password.length >= 6);
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmailValid) {
      setMessage('❌ Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    if (!passwordValid) {
      setMessage('❌ Password must be at least 6 characters.');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setMessage('✅ Login successful! Redirecting...');
      setIsLoading(false);
      setEmail('');
      setPassword('');

      setTimeout(() => {
        router.push('/');
      }, 1500);
    }, 1000);
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.heading}>🔐 Welcome Back</h1>
        <p style={styles.subheading}>Enter your credentials to log in</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ ...styles.input, paddingRight: '2.5rem' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.toggleBtn}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Inline password feedback like Sign Up */}
          {password && !passwordValid && (
            <p style={{ color: '#d93025', fontSize: '0.85rem', marginTop: '-0.5rem' }}>
              ❌ Password must be at least 6 characters
            </p>
          )}

          <button type="submit" disabled={isLoading} style={styles.button}>
            {isLoading ? 'Logging In...' : 'Login'}
          </button>

          <div style={{ marginTop: '1rem' }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowForgotModal(true);
              }}
              style={{ fontSize: '0.9rem', color: '#993333', textDecoration: 'underline' }}
            >
              Forgot Password?
            </a>
          </div>
        </form>

        {message && (
          <p style={{ ...styles.message, color: message.startsWith('❌') ? '#d93025' : '#188038' }}>
            {message}
          </p>
        )}

        <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#555', textAlign: 'center' }}>
          New here?{' '}
          <a href="/signUp" style={{ color: '#993333', fontWeight: '600', textDecoration: 'none' }}>
            Create Account
          </a>
        </p>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3 style={{ marginBottom: '1rem' }}>🔑 Reset Password</h3>
            <input
              type="email"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              style={{ ...styles.input, marginBottom: '1rem' }}
            />
            <button
              style={styles.button}
              onClick={() => {
                setResetMessage(`✅ If this email exists, a reset link will be sent.`);
                setTimeout(() => {
                  setShowForgotModal(false);
                  setResetEmail('');
                  setResetMessage('');
                }, 2000);
              }}
            >
              Send Reset Link
            </button>
            <button
              style={{ ...styles.button, backgroundColor: '#ccc', marginTop: '0.5rem' }}
              onClick={() => setShowForgotModal(false)}
            >
              Cancel
            </button>
            {resetMessage && <p style={styles.message}>{resetMessage}</p>}
          </div>
        </div>
      )}
    </main>
  );
}

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #fff7f0, #ffe0e0)',
  },
  container: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
    color: '#993333',
  },
  subheading: {
    marginBottom: '1.5rem',
    color: '#555',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  inputGroup: {
    textAlign: 'left',
  },
  label: {
    fontWeight: '600',
    marginBottom: '0.3rem',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '0.6rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#993333',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background 0.3s',
  },
  toggleBtn: {
    position: 'absolute',
    right: '0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  message: {
    marginTop: '1rem',
    fontWeight: '600',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center',
  },
};
