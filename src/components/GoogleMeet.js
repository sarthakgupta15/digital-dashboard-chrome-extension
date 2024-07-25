import React from 'react';
import './GoogleMeet.css'; // Import specific styles for GoogleMeet component

const GoogleMeet = () => {
  return (
    <div className="widget google-meet-widget">
      <h2>Google Meet</h2>
      <a href="https://meet.google.com" target="_blank" rel="noopener noreferrer">
        Join Google Meet
      </a>
    </div>
  );
};

export default GoogleMeet;
