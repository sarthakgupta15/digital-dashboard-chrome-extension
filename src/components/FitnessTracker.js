import React from 'react';
import { FaWalking, FaFire, FaHeartbeat } from 'react-icons/fa';
import './FitnessTracker.css'; // Import CSS for FitnessTracker

const FitnessTracker = () => {
  return (
    <div className="fitness-tracker">
      <div className="watch-frame">
        <div className="fitness-info">
          <div className="info-item">
            <FaWalking className="icon" />
            <div className="info-text">Steps: 7500 / 10000</div>
          </div>
          <div className="info-item">
            <FaFire className="icon" />
            <div className="info-text">Calories Burned: 350 kcal</div>
          </div>
          <div className="info-item">
            <FaHeartbeat className="icon" />
            <div className="info-text">Average Heartbeat: 70 bpm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessTracker;
