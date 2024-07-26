import React from 'react';
import SpotifyPlayer from '../components/SpotifyPlayer';
//import BookQuote from '../components/BookQuote';
import FitnessTracker from '../components/FitnessTracker';
import './RelaxTab.css'; // Ensure this is imported

const RelaxTab = () => {
  return (
    <div className="relax-tab">
      <h2>Relax Tab</h2>
      <div className="spotify-container">
        <SpotifyPlayer embedUrl="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" />
      </div>
      <div className="book-quote-container">
        <h3>Random Tech Quotes</h3>
        <div className="quotes-container">
          <div className="quote-bubble">"To invent, you need a good imagination and a pile of junk."</div>
          <div className="quote-bubble">"The best way to predict the future is to invent it."</div>
          <div className="quote-bubble">"Innovation distinguishes between a leader and a follower."</div>
        </div>
        <h3>Show Recommendations</h3>
        <div className="recommendations-container">
          <div className="recommendation">We recommend watching Silicon Valley for some tech humor and insight!</div>
          <div className="recommendation">Check out 'Halt and Catch Fire' for a drama on the early days of computing.</div>
          <div className="recommendation">Don't miss 'Black Mirror' for a tech-centric exploration of the future.</div>
        </div>
      </div>
      <div className="fitness-tracker-container">
        <FitnessTracker />
      </div>
    </div>
  );
};

export default RelaxTab;
