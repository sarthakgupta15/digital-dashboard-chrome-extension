import React, { useState, useEffect } from 'react';

const RandomTechQuotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Fetch a random tech quote from an API or static list
    // Example API: https://api.quotable.io/random?tags=technology
    fetch('https://api.quotable.io/random?tags=technology')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.error('Error fetching quote:', error));
  }, []);

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
    </div>
  );
};

export default RandomTechQuotes;
