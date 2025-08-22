import React from 'react';
import styles from './ExpertAdvicePage.module.css';

const ExpertAdvicePage = () => {
  return (
    <div className={styles.page}>
      <h1>Expert Advice</h1>
      <p>Get direct access to agricultural experts and automated alerts about pests and crop diseases.</p>
      {/* Placeholder for expert advice content */}
      <div className={styles.adviceContent}>
        <p>Coming soon...</p>
      </div>
    </div>
  );
};

export default ExpertAdvicePage;
