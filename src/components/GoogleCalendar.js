import React from 'react';

const GoogleCalendar = ({ embedUrl }) => {
  return (
    <div className="widget google-calendar-widget">
      <h2>Google Calendar Day View</h2>
      <iframe 
        src={embedUrl} 
        frameBorder="0" 
        width="100%" 
        height="400px" 
        allowFullScreen 
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default GoogleCalendar;
