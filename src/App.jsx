import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import FarmRegistrationPage from './pages/FarmRegistrationPage';
import ActivityLogPage from './pages/ActivityLogPage';
import ReportsPage from './pages/ReportsPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="register-farm" element={<FarmRegistrationPage />} />
        <Route path="log-activity" element={<ActivityLogPage />} />
        <Route path="reports" element={<ReportsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
