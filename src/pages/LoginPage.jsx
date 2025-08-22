import React from 'react';
import formStyles from '../components/Form.module.css';

const LoginPage = () => {
  return (
    <div className={formStyles.formContainer}>
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <form className={formStyles.form}>
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
    </div>
  );
};

export default LoginPage;
