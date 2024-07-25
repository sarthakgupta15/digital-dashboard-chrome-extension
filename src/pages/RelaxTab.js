import React from 'react';
import SpotifyPlayer from '../components/SpotifyPlayer';
import BookQuote from '../components/BookQuote';
import FitnessReminder from '../components/FitnessReminder';
import './RelaxTab.css'; // Make sure to import the CSS

const RelaxTab = () => {
  return (
    <div className="relax-tab">
      <h2>Relax Tab</h2>
      <div className="spotify-container">
        <SpotifyPlayer embedUrl="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" />
      </div>
      <div className="book-quote-container">
        <BookQuote />
      </div>
      <div className="fitness-reminder-container">
        <FitnessReminder />
      </div>
    </div>
  );
};

export default RelaxTab;
