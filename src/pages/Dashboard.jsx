import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import AnalyticsCard from '../components/AnalyticsCard';
import Chart from '../components/Chart';
import Footer from '../components/Footer';
import './Dashboard.css';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="cards">
          <AnalyticsCard title="Sales" value="2,382" change="-3.65%" />
          <AnalyticsCard title="Earnings" value="$21,300" change="+6.65%" />
          <AnalyticsCard title="Visitors" value="14,212" change="+5.25%" />
          <AnalyticsCard title="Orders" value="64" change="-2.25%" />
        </div>
        <Chart />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
