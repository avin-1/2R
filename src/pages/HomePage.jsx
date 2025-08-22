import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <h1>Easily Track Your Farm's Carbon Credits</h1>
        <p>
          Our platform helps you measure the carbon captured by your farm, so you can earn more from your hard work.
        </p>
        <Link to="/register" className={styles.ctaButton}>
          Join Now
        </Link>
      </header>

      <section>
        <h2>How We Help You</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Satellite Monitoring</h3>
            <p>We use satellite images to watch your farm's health and growth, without you having to do anything extra.</p>
          </div>
          <div className={styles.feature}>
            <h3>Automatic Calculations</h3>
            <p>Our smart system automatically calculates the carbon credits you earn from your farming practices.</p>
          </div>
          <div className={styles.feature}>
            <h3>Simple Mobile App</h3>
            <p>Use our easy app to log your farm activities and see your progress anytime, anywhere.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
