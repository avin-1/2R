import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <h1>Scalable MRV Solutions for Agroforestry and Rice-Based Carbon Projects</h1>
        <p>
          A unified platform that automates carbon monitoring and credit calculations for agroforestry and rice farming, with minimal ground intervention.
        </p>
        <Link to="/register" className={styles.ctaButton}>
          Get Started
        </Link>
      </header>

      <section>
        <h2>Key Features</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Remote Sensing & Satellite Data</h3>
            <p>Utilize open satellite APIs to continuously monitor farms at scale, tracking tree cover, biomass growth, and flooding cycles.</p>
          </div>
          <div className={styles.feature}>
            <h3>AI & Machine Learning Analytics</h3>
            <p>Translate raw data into actionable carbon metrics, estimating biomass, carbon stock, and methane emissions.</p>
          </div>
          <div className={styles.feature}>
            <h3>Farmer-Friendly Mobile/Web App</h3>
            <p>A lightweight, offline-first application for farmers to register fields, log activities, and receive personalized feedback.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
