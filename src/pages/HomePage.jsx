import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './HomePage.module.css';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <h1>{t('home_page_title')}</h1>
        <p>{t('home_page_subtitle')}</p>
        <Link to="/register" className={styles.ctaButton}>
          {t('get_started')}
        </Link>
      </header>

      <section>
        <h2>{t('key_features')}</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>{t('remote_sensing_title')}</h3>
            <p>{t('remote_sensing_description')}</p>
          </div>
          <div className={styles.feature}>
            <h3>{t('ai_analytics_title')}</h3>
            <p>{t('ai_analytics_description')}</p>
          </div>
          <div className={styles.feature}>
            <h3>{t('farmer_friendly_app_title')}</h3>
            <p>{t('farmer_friendly_app_description')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
