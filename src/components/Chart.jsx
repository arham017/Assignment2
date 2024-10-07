import React from 'react';
import './Chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', value: 1000 },
  { month: 'Feb', value: 1200 },
  { month: 'Mar', value: 1500 },
  { month: 'Apr', value: 1800 },
  { month: 'May', value: 2000 },
  { month: 'Jun', value: 2200 },
  { month: 'Jul', value: 2500 },
  { month: 'Aug', value: 2700 },
  { month: 'Sep', value: 3000 },
  { month: 'Oct', value: 3200 },
  { month: 'Nov', value: 3500 },
  { month: 'Dec', value: 3800 },
];

const Chart = () => {
  return (
    <div className="chart-container">
      <h3>Recent Movement</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
