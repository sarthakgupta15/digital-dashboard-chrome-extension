import React from 'react';
import './GoogleSpreadsheet.css'; // Import specific styles for GoogleSpreadsheet component

const GoogleSpreadsheet = ({ embedUrl }) => {
  return (
    <div className="widget google-spreadsheet-widget">
      <h2>Google Spreadsheet</h2>
      <iframe 
        src={embedUrl} 
        frameBorder="0" 
        width="100%" 
        height="400px" 
        allowFullScreen 
        title="Google Spreadsheet"
      ></iframe>
    </div>
  );
};

export default GoogleSpreadsheet;
