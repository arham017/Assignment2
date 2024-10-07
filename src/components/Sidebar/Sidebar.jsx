import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>AdminKit</h2>
      <ul>
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
      <h3>Tools & Components</h3>
      <ul>
        <li>Buttons</li>
        <li>Forms</li>
        <li>Cards</li>
        <li>Icons</li>
      </ul>
    </div>
  );
};

export default Sidebar;
