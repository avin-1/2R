import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import { FaHome, FaTachometerAlt, FaPlusCircle, FaBook, FaFileAlt, FaSignInAlt, FaUserPlus, FaComments } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <span role="img" aria-label="leaf">🌿</span> MRV Platform
      </Link>
      <ul className={styles.navList}>
        <li><NavLink to="/" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaHome /> {t('nav_home')}</NavLink></li>
        <li><NavLink to="/dashboard" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaTachometerAlt /> {t('nav_dashboard')}</NavLink></li>
        <li><NavLink to="/register-farm" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaPlusCircle /> {t('nav_register_farm')}</NavLink></li>
        <li><NavLink to="/log-activity" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaBook /> {t('nav_log_activity')}</NavLink></li>
        <li><NavLink to="/reports" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaFileAlt /> {t('nav_reports')}</NavLink></li>
        <li><NavLink to="/forum" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaComments /> {t('nav_forum')}</NavLink></li>
        <li><NavLink to="/login" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaSignInAlt /> {t('nav_login')}</NavLink></li>
        <li><NavLink to="/register" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}><FaUserPlus /> {t('nav_register')}</NavLink></li>
      </ul>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
