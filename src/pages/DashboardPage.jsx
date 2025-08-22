import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SummaryCard from '../components/SummaryCard';
import FarmList from '../components/FarmList';
import WeatherWidget from '../components/WeatherWidget';
import MarketPriceWidget from '../components/MarketPriceWidget';
import CarbonChart from '../components/CarbonChart';
import WelcomeModal from '../components/WelcomeModal';
import { mockFarms, mockUser } from '../data/mockData';
import styles from './DashboardPage.module.css';

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
          <SummaryCard title="Total Carbon Credits" value={totalCredits.toFixed(1)} unit="tCO₂e" />
          <SummaryCard title="Farms Registered" value={mockFarms.length} unit="Farms" />
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
        <div className={styles.mapContainer}>
          <h2>Farm Locations</h2>
          <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100%', width: '100%', borderRadius: '8px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {mockFarms.map(farm => (
              <Marker key={farm.id} position={farm.coords}>
                <Popup>
                  {farm.name} - {farm.carbonCredits} tCO₂e
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
