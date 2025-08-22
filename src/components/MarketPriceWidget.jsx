import React from 'react';
import cardStyles from './Card.module.css';
import styles from './MarketPriceWidget.module.css';
import { mockMarketPrices } from '../data/mockData';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const MarketPriceWidget = () => {
  return (
    <div className={`${cardStyles.card} ${styles.marketWidget}`}>
      <h3 className={styles.title}>Mandi Prices</h3>
      <ul className={styles.priceList}>
        {mockMarketPrices.map(item => (
          <li key={item.id} className={styles.priceItem}>
            <span className={styles.crop}>{item.crop}</span>
            <span className={styles.price}>{item.price}</span>
            <span className={item.trend === 'up' ? styles.up : styles.down}>
              {item.trend === 'up' ? <FaArrowUp /> : <FaArrowDown />}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketPriceWidget;
