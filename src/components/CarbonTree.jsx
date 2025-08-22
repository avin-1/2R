import React from 'react';
import cardStyles from './Card.module.css';
import styles from './CarbonTree.module.css';

const CarbonTree = ({ credits }) => {
  let tree = '🌱';
  let message = 'Your journey has just begun!';

  if (credits > 10) {
    tree = '🌳';
    message = 'You are making good progress!';
  }
  if (credits > 30) {
    tree = '🌲';
    message = 'You are a true climate hero!';
  }

  return (
    <div className={`${cardStyles.card} ${styles.carbonTree}`}>
      <h3 className={styles.title}>Your Carbon Tree</h3>
      <div className={styles.treeVisual}>{tree}</div>
      <p className={styles.credits}>Total Credits: {credits.toFixed(1)} tCO₂e</p>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default CarbonTree;
