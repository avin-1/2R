import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockFarms } from '../data/mockData';
import cardStyles from './Card.module.css';

const FarmCreditsChart = () => {
  return (
    <div className={cardStyles.card}>
      <h3>Credits by Farm (tCO₂e)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={mockFarms}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="carbonCredits" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FarmCreditsChart;
