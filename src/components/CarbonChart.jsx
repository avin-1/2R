import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockCarbonCreditsData } from '../data/mockData';
import cardStyles from './Card.module.css';

const CarbonChart = () => {
  return (
    <div className={cardStyles.card}>
      <h3>Carbon Credits Trend (tCO₂e)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={mockCarbonCreditsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="credits" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CarbonChart;
