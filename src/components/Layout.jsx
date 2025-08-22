import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';

const Layout = ({ onLogout }) => {
  const mainStyle = {
    paddingBottom: '80px', // Add padding to the bottom to avoid overlap with the nav bar
  };

  return (
    <div>
      <Header onLogout={onLogout} />
      <main style={mainStyle}>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
