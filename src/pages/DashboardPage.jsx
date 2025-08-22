import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SummaryCard from '../components/SummaryCard';
import FarmList from '../components/FarmList';
import { mockFarms, mockUser } from '../data/mockData';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  const totalCredits = mockFarms.reduce((acc, farm) => acc + farm.carbonCredits, 0);

  return (
    <div className={styles.dashboard}>
      <h1>Welcome, {mockUser.name}!</h1>

      <div className={styles.summary}>
        <SummaryCard title="Total Carbon Credits" value={totalCredits.toFixed(1)} unit="tCO₂e" />
        <SummaryCard title="Farms Registered" value={mockFarms.length} unit="Farms" />
      </div>

      <div className={styles.mainContent}>
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
