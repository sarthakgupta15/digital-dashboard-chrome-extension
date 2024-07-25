import React from 'react';
import './GoogleSlides.css'; // Import specific styles for GoogleSlides component

const GoogleSlides = ({ embedUrl }) => {
  return (
    <div className="widget google-slide-widget">
      <h2>Google Slides</h2>
      <iframe 
        src={embedUrl} 
        frameBorder="0" 
        width="100%" 
        height="400px" 
        allowFullScreen 
        title="Google Slides"
      ></iframe>
    </div>
  );
};

export default GoogleSlides;
