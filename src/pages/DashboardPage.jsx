import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import SummaryCard from '../components/SummaryCard';
import FarmList from '../components/FarmList';
import CarbonCreditChart from '../components/CarbonCreditChart';
import FarmTypeDistributionChart from '../components/FarmTypeDistributionChart';
import { mockFarms, mockUser } from '../data/mockData';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  const { t } = useTranslation();
  const totalCredits = mockFarms.reduce((acc, farm) => acc + farm.carbonCredits, 0);
  const creditHistory = mockFarms.reduce((acc, farm) => {
    farm.creditHistory.forEach(entry => {
      const existingMonth = acc.find(item => item.month === entry.month);
      if (existingMonth) {
        existingMonth.credits += entry.credits;
      } else {
        acc.push({ ...entry });
      }
    });
    return acc;
  }, []);


  return (
    <div className={styles.dashboard}>
      <h1>{t('welcome', { name: mockUser.name })}</h1>

      <div className={styles.summary}>
        <SummaryCard title={t('total_carbon_credits')} value={totalCredits.toFixed(1)} unit="Tonnes of CO₂" />
        <SummaryCard title={t('farms_registered')} value={mockFarms.length} unit="Farms" />
      </div>

      <div className={styles.charts}>
        <div className={styles.chartContainer}>
          <h2>{t('carbon_credit_trend')}</h2>
          <CarbonCreditChart data={creditHistory} />
        </div>
        <div className={styles.chartContainer}>
          <h2>{t('farm_type_distribution')}</h2>
          <FarmTypeDistributionChart data={mockFarms} />
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.farmList}>
          <FarmList farms={mockFarms} />
        </div>
        <div className={styles.mapContainer}>
          <h2>{t('farm_locations')}</h2>
          <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100%', width: '100%', borderRadius: '8px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {mockFarms.map(farm => (
              <Marker key={farm.id} position={farm.coords}>
                <Popup>
                  {farm.name} - {farm.carbonCredits} Tonnes of CO₂
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
