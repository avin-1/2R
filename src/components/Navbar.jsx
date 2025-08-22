import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>MRV Platform</Link>
      <ul className={styles.navList}>
        <li><NavLink to="/" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</NavLink></li>
        <li><NavLink to="/dashboard" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Dashboard</NavLink></li>
        <li><NavLink to="/register-farm" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Register Farm</NavLink></li>
        <li><NavLink to="/log-activity" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Log Activity</NavLink></li>
        <li><NavLink to="/reports" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Reports</NavLink></li>
        <li><NavLink to="/login" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Login</NavLink></li>
        <li><NavLink to="/register" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Register</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
