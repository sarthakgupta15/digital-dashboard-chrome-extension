import React from 'react';
import './GoogleKeep.css'; // Import specific styles for GoogleKeep component

const GoogleKeep = () => {
  return (
    <div className="widget google-keep-widget">
      <h2>Google Keep</h2>
      <a href="https://keep.google.com" target="_blank" rel="noopener noreferrer">
        Open Google Keep
      </a>
    </div>
  );
};

export default GoogleKeep;
