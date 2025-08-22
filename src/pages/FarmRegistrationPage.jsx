import React, { useState } from 'react';
import MapWithMarker from '../components/MapWithMarker';
import formStyles from '../components/Form.module.css';
import styles from './FarmRegistrationPage.module.css';

const FarmRegistrationPage = () => {
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
      alert('Please select a location on the map.');
      return;
    }
    console.log({ farmName, farmType, area, location: { lat: location.lat, lng: location.lng } });
    alert('Farm registered successfully! (Check console for data)');
  };

  return (
    <div className={styles.page}>
      <h1>Register a New Farm</h1>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={formStyles.form}>
            <div className={formStyles.formGroup}>
              <label htmlFor="farmName">Farm Name</label>
              <input type="text" id="farmName" value={farmName} onChange={(e) => setFarmName(e.target.value)} required />
            </div>
            <div className={formStyles.formGroup}>
              <label htmlFor="farmType">Farm Type</label>
              <select id="farmType" value={farmType} onChange={(e) => setFarmType(e.target.value)}>
                <option>Rice Paddy</option>
                <option>Agroforestry</option>
              </select>
            </div>
            <div className={formStyles.formGroup}>
              <label htmlFor="area">Area (in acres)</label>
              <input type="number" id="area" value={area} onChange={(e) => setArea(e.target.value)} required />
            </div>
            <button type="submit" className={formStyles.button}>Register Farm</button>
          </form>
        </div>
        <div className={styles.mapContainer}>
          <h3>Select Farm Location</h3>
          <MapWithMarker onLocationSelect={handleLocationSelect} />
          {location && <p>Selected Location: Lat: {location.lat.toFixed(4)}, Lng: {location.lng.toFixed(4)}</p>}
        </div>
      </div>
    </div>
  );
};

export default FarmRegistrationPage;
