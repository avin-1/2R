import React from 'react';
import styles from './FarmList.module.css';

const FarmList = ({ farms }) => {
  return (
    <div>
      <h2>My Farms</h2>
      <ul className={styles.farmList}>
        {farms.map(farm => (
          <li key={farm.id} className={styles.farmListItem}>
            <h3>{farm.name}</h3>
            <p>{farm.location} - {farm.area}</p>
            <p>Carbon Credits: {farm.carbonCredits} tCO₂e</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FarmList;
