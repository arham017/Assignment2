// src/components/Card.js
import React from "react";
import "./Card.css";

const Card = ({ title, value, change, changeType, icon }) => {
  return (
    <div id="cont">
      <div className="card">
        <div className="card-header ">
          <span id="textC">{title}</span>
          <span className="card-icon">{icon}</span>
        </div>
        <div className="card-value">{value}</div>
        <div className={`card-change ${changeType}`}>
          {changeType === "positive" ? (
            <span className="positive-change">+{change}%</span>
          ) : (
            <span className="negative-change">{change}%</span>
          )}
          <span className="change-label"> Since last week</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
