import React, { useState, useEffect } from 'react';
import SummaryCard from '../components/SummaryCard';
import FarmList from '../components/FarmList';
import WeatherWidget from '../components/WeatherWidget';
import MarketPriceWidget from '../components/MarketPriceWidget';
import CarbonChart from '../components/CarbonChart';
import WelcomeModal from '../components/WelcomeModal';
import CarbonTree from '../components/CarbonTree';
import FarmCreditsChart from '../components/FarmCreditsChart';
import { mockFarms, mockUser } from '../data/mockData';
import styles from './DashboardPage.module.css';
import { FaTractor } from 'react-icons/fa';

const DashboardPage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Simulate showing the modal for a first-time user
    const isFirstVisit = !localStorage.getItem('hasVisited');
    if (isFirstVisit) {
      setShowModal(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const totalCredits = mockFarms.reduce((acc, farm) => acc + farm.carbonCredits, 0);

  return (
    <div className={styles.dashboard}>
      {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
      <h1 className={styles.welcomeMessage}>Welcome, {mockUser.name}!</h1>

      <div className={styles.topRow}>
        <div className={styles.summary}>
          <CarbonTree credits={totalCredits} />
          <SummaryCard title="Farms Registered" value={mockFarms.length} unit="Farms" icon={<FaTractor />} />
        </div>
        <div className={styles.widgets}>
          <WeatherWidget />
          <MarketPriceWidget />
        </div>
      </div>

      <div className={styles.middleRow}>
        <CarbonChart />
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.farmList}>
          <FarmList farms={mockFarms} />
        </div>
        <div className={styles.chartContainer}>
          <FarmCreditsChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
