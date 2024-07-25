import React from 'react';
import SpotifyPlayer from '../components/SpotifyPlayer';
import BookQuote from '../components/BookQuote';
import FitnessReminder from '../components/FitnessReminder';

const RelaxTab = () => {
  return (
    <div>
      <h2>Relax Tab</h2>
      <SpotifyPlayer embedUrl="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" />
      <BookQuote />
      <FitnessReminder />
    </div>
  );
};

export default RelaxTab;
