import React from 'react';
import GoogleSlides from '../components/GoogleSlides';
import GoogleMeet from '../components/GoogleMeet';
import GoogleKeep from '../components/GoogleKeep';
import GoogleSpreadsheet from '../components/GoogleSpreadsheet';
import GoogleCalendar from '../components/GoogleCalendar';
import './GoogleWidgets.css'; // Import specific styles for GoogleWidgets component

const GoogleWidgets = () => {
  return (
    <div className="google-widgets">
      <h2>Google Widgets</h2>
      <div className="widgets-container">
        <GoogleMeet />
        <GoogleKeep />
        <GoogleSlides 
          embedUrl="https://docs.google.com/presentation/d/e/2PACX-1vSIur0bXtexgQIDNUMAFSYBh52_GOpeubvYcNaGT1ZkH1UehhB3WleYZcYJkNK7vR3IQfgHYEZT3--R/embed?start=false&loop=false&delayms=3000" 
          slideUrl="https://docs.google.com/presentation/d/e/2PACX-1vSIur0bXtexgQIDNUMAFSYBh52_GOpeubvYcNaGT1ZkH1UehhB3WleYZcYJkNK7vR3IQfgHYEZT3--R/pub?start=true&loop=true&delayms=3000"
        />
        <GoogleSpreadsheet embedUrl="https://docs.google.com/spreadsheets/d/e/2PACX-1vSrV84oWtCwTGucdXuGIBFau0rhPafCJBGXAOUIIkkM-dhf9ebYxT0eSSr9W3EI3hDMXLtkN1QRUzqN/pubhtml?widget=true&amp;headers=false" />
        <GoogleCalendar embedUrl="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata" />
      </div>
    </div>
  );
};

export default GoogleWidgets;
