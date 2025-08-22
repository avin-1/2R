import React from 'react';
import cardStyles from './Card.module.css';
import styles from './WeatherWidget.module.css';
import { mockWeather } from '../data/mockData';

const WeatherWidget = () => {
  return (
    <div className={`${cardStyles.card} ${styles.weatherWidget}`}>
      <h3 className={styles.title}>Local Weather</h3>
      <div className={styles.currentWeather}>
        <span className={styles.icon}>{mockWeather.icon}</span>
        <div>
          <p className={styles.temperature}>{mockWeather.temperature}</p>
          <p className={styles.condition}>{mockWeather.condition}</p>
        </div>
      </div>
      <div className={styles.forecast}>
        {mockWeather.forecast.map(day => (
          <div key={day.day} className={styles.forecastDay}>
            <p>{day.day}</p>
            <span className={styles.forecastIcon}>{day.icon}</span>
            <p>{day.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWidget;
