import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BottomNav.module.css';
import { FaTachometerAlt, FaPlusCircle, FaBook } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <nav className={styles.bottomNav}>
      <NavLink to="/dashboard" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
        <FaTachometerAlt />
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/register-farm" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
        <FaPlusCircle />
        <span>Add Farm</span>
      </NavLink>
      <NavLink to="/log-activity" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
        <FaBook />
        <span>Add Activity</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
