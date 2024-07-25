import React from 'react';
import './SpotifyPlayer.css'; // Import specific styles for SpotifyPlayer component

const SpotifyPlayer = ({ embedUrl }) => {
  return (
    <div className="widget spotify-player-widget">
      <h2>Spotify Player</h2>
      <iframe 
        src={embedUrl}
        width="300" 
        height="380" 
        frameBorder="0" 
        allowtransparency="true" 
        allow="encrypted-media" 
        title="Spotify Player"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
