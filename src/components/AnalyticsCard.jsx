import React from 'react';

const AnalyticsCard = ({ title, value, change }) => {
  return (
    <div className="analytics-card">
      <h3>{title}</h3>
      <p>{value}</p>
      <span>{change}</span>
    </div>
  );
};

export default AnalyticsCard;
