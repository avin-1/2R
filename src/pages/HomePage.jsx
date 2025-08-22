import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { FaTachometerAlt, FaPlusCircle, FaBook, FaComments, FaUserMd, FaFileAlt } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Welcome, Farmer!</h1>
      <p className={styles.subtitle}>What would you like to do today?</p>
      <div className={styles.grid}>
        <Link to="/dashboard" className={styles.gridItem}>
          <FaTachometerAlt />
          <span>View Dashboard</span>
        </Link>
        <Link to="/register-farm" className={styles.gridItem}>
          <FaPlusCircle />
          <span>Add a Farm</span>
        </Link>
        <Link to="/log-activity" className={styles.gridItem}>
          <FaBook />
          <span>Add Activity</span>
        </Link>
        <Link to="/community-forum" className={styles.gridItem}>
          <FaComments />
          <span>Community Forum</span>
        </Link>
        <Link to="/expert-advice" className={styles.gridItem}>
          <FaUserMd />
          <span>Expert Advice</span>
        </Link>
        <Link to="/reports" className={styles.gridItem}>
          <FaFileAlt />
          <span>View Reports</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
