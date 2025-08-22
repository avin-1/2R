import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import FeatureCard from '../components/FeatureCard';
import { FaSatellite, FaCalculator, FaMobileAlt } from 'react-icons/fa';

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

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>
          <span role="img" aria-label="leaf" style={{ marginRight: '1rem' }}>🌿</span>
          How We Help You
          <span role="img" aria-label="leaf" style={{ marginLeft: '1rem' }}>🌿</span>
        </h2>
        <div className={styles.features}>
          <FeatureCard
            icon={<FaSatellite />}
            title="Satellite Monitoring"
            text="We use satellite images to watch your farm's health and growth, without you having to do anything extra."
          />
          <FeatureCard
            icon={<FaCalculator />}
            title="Automatic Calculations"
            text="Our smart system automatically calculates the carbon credits you earn from your farming practices."
          />
          <FeatureCard
            icon={<FaMobileAlt />}
            title="Simple Mobile App"
            text="Use our easy app to log your farm activities and see your progress anytime, anywhere."
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
