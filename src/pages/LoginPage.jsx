import React from 'react';
import { Link } from 'react-router-dom';
import formStyles from '../components/Form.module.css';

const LoginPage = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className={formStyles.formContainer} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>
        <span role="img" aria-label="leaf" style={{ marginRight: '0.5rem' }}>🌿</span>
        Login
      </h1>
      <form onSubmit={handleSubmit} className={formStyles.form}>
        <div className={formStyles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={formStyles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit" className={formStyles.button}>Login</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
