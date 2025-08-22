import React from 'react';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default FeatureCard;
