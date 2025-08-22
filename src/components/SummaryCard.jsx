import React from 'react';
import cardStyles from './Card.module.css';
import styles from './SummaryCard.module.css';

const SummaryCard = ({ title, value, unit, icon }) => {
  return (
    <div className={`${cardStyles.card} ${styles.summaryCard}`}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value} <span className={styles.unit}>{unit}</span></p>
      </div>
    </div>
  );
};

export default SummaryCard;
