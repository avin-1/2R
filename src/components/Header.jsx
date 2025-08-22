import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { FaSignOutAlt } from 'react-icons/fa';

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span role="img" aria-label="leaf">🌿</span> Farm Carbon
      </Link>
      {onLogout && (
        <button onClick={onLogout} className={styles.logoutButton}>
          <FaSignOutAlt /> Logout
        </button>
      )}
    </header>
  );
};

export default Header;
