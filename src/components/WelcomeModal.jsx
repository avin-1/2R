import React from 'react';
import styles from './WelcomeModal.module.css';

const WelcomeModal = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Welcome to the MRV Platform!</h2>
        <p>This platform helps you monitor your farm, track your carbon credits, and get valuable insights.</p>
        <p>Explore your dashboard to get started.</p>
        <button onClick={onClose} className={styles.button}>Get Started</button>
      </div>
    </div>
  );
};

export default WelcomeModal;
