import React, { useState, useEffect } from 'react';
import { FaMovie, FaPopcorn, FaTv, FaProjector, FaCurtain } from 'react-icons/fa';
import './RandomTechQuotes.css'; // Import CSS for styling

const RandomTechQuotes = () => {
  const [quote, setQuote] = useState('');
  const [watchlist, setWatchlist] = useState([]);
  const [newRecommendation, setNewRecommendation] = useState('');

  useEffect(() => {
    // Fetch a random tech quote from an API
    fetch('https://api.quotable.io/random?tags=technology')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.error('Error fetching quote:', error));
  }, []);

  const handleAddRecommendation = () => {
    if (newRecommendation.trim()) {
      setWatchlist([...watchlist, newRecommendation]);
      setNewRecommendation('');
    }
  };

  return (
    <div className="random-tech-quotes">
      <h3>Random Tech Quote</h3>
      <div className="quote-cloud">
        <p>"{quote}"</p>
      </div>
      <div className="recommendation">
        <h4>Show Recommendation</h4>
        <p>We recommend watching Silicon Valley for some tech humor and insight!</p>
      </div>
      <div className="watchlist">
        <h4>Watchlist Recommendations</h4>
        <input
          type="text"
          value={newRecommendation}
          onChange={(e) => setNewRecommendation(e.target.value)}
          placeholder="Add new recommendation"
        />
        <button onClick={handleAddRecommendation}>Add to Watchlist</button>
        <ul>
          {watchlist.map((item, index) => (
            <li key={index} className="watchlist-item">
              <FaMovie className="icon" /> {item}
            </li>
          ))}
        </ul>
        <div className="watchlist-icons">
          <div className="icon-item">
            <FaPopcorn className="icon" title="Popcorn" />
            <span>Movies</span>
          </div>
          <div className="icon-item">
            <FaTv className="icon" title="TV" />
            <span>TV Shows</span>
          </div>
          <div className="icon-item">
            <FaProjector className="icon" title="Projector" />
            <span>Projector</span>
          </div>
          <div className="icon-item">
            <FaCurtain className="icon" title="Curtain" />
            <span>Curtain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomTechQuotes;
