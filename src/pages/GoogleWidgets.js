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
        <GoogleSlides embedUrl="https://docs.google.com/presentation/d/e/2PACX-1vTiV4qIVyJ4Ii3E8EInJ07zF9tEM-HnUQGRRpo3iwqD8wJ1M9NntPAkBGUB9OCZPw/embed?start=false&loop=false&delayms=3000" />
        <GoogleSpreadsheet embedUrl="https://docs.google.com/spreadsheets/d/e/2PACX-1vQo5tMvE_bFEfD9d_vw6meIwl0Ly4nh5xAnfuRzQ2HVyAL3Jeoc9psbYk21T-Pilw8k4/embed?widget=true&headers=false" />
        <GoogleCalendar embedUrl="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata" />
      </div>
    </div>
  );
};

export default GoogleWidgets;
