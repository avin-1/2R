import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { FaLeaf, FaTractor, FaMoneyBillWave } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.welcomeContainer}>
        <span className={styles.logoIcon}><FaLeaf /></span>
        <h1 className={styles.title}>Welcome to Farm Carbon</h1>
        <p className={styles.subtitle}>Earn money from your farm's carbon.</p>
        <Link to="/register" className={styles.ctaButton}>
          Get Started Now
        </Link>
        <Link to="/login" className={styles.loginLink}>
          I already have an account
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
