import React from 'react';
import styles from './FarmList.module.css';
import { FaTree, FaWater } from 'react-icons/fa'; // Using water icon for rice paddy

const FarmList = ({ farms }) => {
  const getFarmIcon = (farmType) => {
    if (farmType === 'Agroforestry') {
      return <FaTree className={styles.farmIcon} />;
    }
    if (farmType === 'Rice Paddy') {
      // Using a water drop icon as a stand-in for rice
      return <FaWater className={styles.farmIcon} />;
    }
    return null;
  };

  return (
    <div>
      <h2>My Farms</h2>
      <ul className={styles.farmList}>
        {farms.map(farm => (
          <li key={farm.id} className={styles.farmListItem}>
            <div className={styles.farmIconContainer}>
              {getFarmIcon(farm.type)}
            </div>
            <div className={styles.farmInfo}>
              <h3>{farm.name}</h3>
              <p>{farm.location} - {farm.area}</p>
              <p>Carbon Credits: {farm.carbonCredits.toFixed(1)} tCO₂e</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FarmList;
