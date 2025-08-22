import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaTachometerAlt, FaPlusCircle, FaBook, FaFileAlt, FaSignInAlt, FaUserPlus, FaComments, FaUserMd } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <span role="img" aria-label="leaf">🌿</span> Farm Carbon
      </Link>
      <ul className={styles.navList}>
        <li><NavLink to="/dashboard" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaTachometerAlt /> Dashboard</NavLink></li>
        <li><NavLink to="/register-farm" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaPlusCircle /> Add Farm</NavLink></li>
        <li><NavLink to="/log-activity" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaBook /> Add Activity</NavLink></li>
        <li><NavLink to="/reports" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaFileAlt /> Reports</NavLink></li>
        <li><NavLink to="/community-forum" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaComments /> Forum</NavLink></li>
        <li><NavLink to="/expert-advice" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaUserMd /> Expert Advice</NavLink></li>
        <li><NavLink to="/login" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaSignInAlt /> Login</NavLink></li>
        <li><NavLink to="/register" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaUserPlus /> Register</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
