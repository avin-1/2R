import React, { useState } from 'react';
import { mockFarms } from '../data/mockData';
import formStyles from '../components/Form.module.css';

const ActivityLogPage = () => {
  const [selectedFarm, setSelectedFarm] = useState(mockFarms[0]?.id || '');
  const [activityType, setActivityType] = useState('Planting');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      farmId: selectedFarm,
      activityType,
      date,
      notes,
      photoName: photo ? photo.name : 'No photo uploaded',
    });
    alert('Activity added successfully! (Check console for data)');
  };

  return (
    <div className={formStyles.formContainer}>
      <h1 style={{ textAlign: 'center' }}>
        <span role="img" aria-label="leaf" style={{ marginRight: '0.5rem' }}>🌿</span>
        Add an Activity
      </h1>
      <form onSubmit={handleSubmit} className={formStyles.form}>
        <div className={formStyles.formGroup}>
          <label htmlFor="farm">Select Your Farm</label>
          <select id="farm" value={selectedFarm} onChange={(e) => setSelectedFarm(e.target.value)} required>
            {mockFarms.map(farm => (
              <option key={farm.id} value={farm.id}>{farm.name}</option>
            ))}
          </select>
        </div>
        <div className={formStyles.formGroup}>
          <label htmlFor="activityType">Type of Activity</label>
          <select id="activityType" value={activityType} onChange={(e) => setActivityType(e.target.value)}>
            <option>Planting</option>
            <option>Irrigation (AWD Start)</option>
            <option>Irrigation (AWD End)</option>
            <option>Fertilizer Application</option>
            <option>Harvesting</option>
          </select>
        </div>
        <div className={formStyles.formGroup}>
          <label htmlFor="date">Date of Activity</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className={formStyles.formGroup}>
          <label htmlFor="notes">Notes (Optional)</label>
          <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows="4"></textarea>
        </div>
        <div className={formStyles.formGroup}>
          <label htmlFor="photo">Upload a Photo (Optional)</label>
          <input type="file" id="photo" onChange={(e) => setPhoto(e.target.files[0])} />
        </div>
        <button type="submit" className={formStyles.button}>Add Activity</button>
      </form>
    </div>
  );
};

export default ActivityLogPage;
