import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MapWithMarker from '../components/MapWithMarker';
import formStyles from '../components/Form.module.css';
import styles from './FarmRegistrationPage.module.css';
import { FaTractor, FaTree, FaMapMarkerAlt } from 'react-icons/fa';

const FarmRegistrationPage = () => {
  const { t } = useTranslation();
  const [farmName, setFarmName] = useState('');
  const [farmType, setFarmType] = useState('Rice Paddy');
  const [area, setArea] = useState('');
  const [location, setLocation] = useState(null);

  const handleLocationSelect = (latlng) => {
    setLocation(latlng);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) {
      alert(t('select_location_alert'));
      return;
    }
    console.log({ farmName, farmType, area, location: { lat: location.lat, lng: location.lng } });
    alert(t('farm_registered_alert'));
  };

  return (
    <div className={styles.page}>
      <h1>{t('register_new_farm')}</h1>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={formStyles.form}>
            <div className={formStyles.formGroup}>
              <label htmlFor="farmName"><FaTractor /> {t('farm_name')}</label>
              <input type="text" id="farmName" value={farmName} onChange={(e) => setFarmName(e.target.value)} required />
            </div>
            <div className={formStyles.formGroup}>
              <label htmlFor="farmType"><FaTree /> {t('farm_type')}</label>
              <select id="farmType" value={farmType} onChange={(e) => setFarmType(e.target.value)}>
                <option value="Rice Paddy">{t('rice_paddy')}</option>
                <option value="Agroforestry">{t('agroforestry')}</option>
              </select>
            </div>
            <div className={formStyles.formGroup}>
              <label htmlFor="area">{t('area_in_acres')}</label>
              <input type="number" id="area" value={area} onChange={(e) => setArea(e.target.value)} required />
            </div>
            <button type="submit" className={formStyles.button}>{t('register_farm')}</button>
          </form>
        </div>
        <div className={styles.mapContainer}>
          <h3><FaMapMarkerAlt /> {t('select_farm_location')}</h3>
          <MapWithMarker onLocationSelect={handleLocationSelect} />
          {location && <p>{t('selected_location', { lat: location.lat.toFixed(4), lng: location.lng.toFixed(4) })}</p>}
        </div>
      </div>
    </div>
  );
};

export default FarmRegistrationPage;
