import React from 'react';
import './GenericLeaderboard.css'; // Import specific styles for GenericLeaderboard component

const GenericLeaderboard = () => {
  return (
    <div className="leaderboard-container">
      <h2>Generic Leaderboard</h2>
      <div className="leaderboard">
        <div className="leaderboard-item">
          <h3><i className="fas fa-shoe-prints"></i> Most Steps Walked</h3>
          <div className="leader">
            <span className="trophy">🏆</span> Sarthak: 15,000
          </div>
          <div>Manya: 12,000</div>
          <div>Ayush: 10,000</div>
        </div>
        <div className="leaderboard-item">
          <h3><i className="fas fa-book"></i> Most Pages Read</h3>
          <div className="leader">
            <span className="trophy">🏆</span> Manya: 120
          </div>
          <div>Ayush: 100</div>
          <div>Sarthak: 80</div>
        </div>
        <div className="leaderboard-item">
          <h3><i className="fas fa-clock"></i> Most Pomodoro Timers Clicked</h3>
          <div className="leader">
            <span className="trophy">🏆</span> Ayush: 30
          </div>
          <div>Sarthak: 25</div>
          <div>Manya: 20</div>
        </div>
      </div>
    </div>
  );
};

export default GenericLeaderboard;
