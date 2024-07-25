// components/SpotifyPlayer.js
import React from 'react';
import './SpotifyPlayer.css'; // Create this CSS file for styling

const SpotifyPlayer = ({ embedUrl }) => {
  return (
    <div className="spotify-player">
      <iframe
        src={embedUrl}
        width="100%"
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
