import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import FarmRegistrationPage from './pages/FarmRegistrationPage';
import ActivityLogPage from './pages/ActivityLogPage';
import ReportsPage from './pages/ReportsPage';
import CommunityForumPage from './pages/CommunityForumPage';
import ExpertAdvicePage from './pages/ExpertAdvicePage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // In a real app, you'd have a proper auth context
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Layout onLogout={handleLogout} />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="register-farm" element={<FarmRegistrationPage />} />
          <Route path="log-activity" element={<ActivityLogPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="community-forum" element={<CommunityForumPage />} />
          <Route path="expert-advice" element={<ExpertAdvicePage />} />
          {/* Redirect any other paths to the dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Redirect any other paths to the homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
