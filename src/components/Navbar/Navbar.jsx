import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Analytics Dashboard</h2>
      <div className="profile-section">
        <img src="Profile pic.png" alt="Profile" className="profile-pic" />
        <span>Arham Irshad</span>
      </div>
    </nav>
  );
};

export default Navbar;
