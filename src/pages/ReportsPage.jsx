import React from 'react';
import styles from './ReportsPage.module.css';

const mockReports = [
  { id: 1, name: 'Q2 2024 Carbon Credit Report', date: '2024-07-15', fileUrl: '#' },
  { id: 2, name: 'Q1 2024 Carbon Credit Report', date: '2024-04-15', fileUrl: '#' },
  { id: 3, name: 'Annual 2023 Summary Report', date: '2024-01-20', fileUrl: '#' },
];

const ReportsPage = () => {
  return (
    <div className={styles.page}>
      <h1>
        <span role="img" aria-label="leaf" style={{ marginRight: '0.5rem' }}>🌿</span>
        Reports
      </h1>
      <p>Here you can view and download your generated carbon credit reports.</p>
      <div className={styles.reportList}>
        {mockReports.map(report => (
          <div key={report.id} className={styles.reportItem}>
            <div className={styles.reportInfo}>
              <h3>{report.name}</h3>
              <p>Date Generated: {report.date}</p>
            </div>
            <a href={report.fileUrl} download className={styles.downloadButton}>
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
