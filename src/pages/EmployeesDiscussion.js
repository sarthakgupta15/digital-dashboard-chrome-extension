import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import './EmployeesDiscussion.css'; // Make sure to import the CSS

const EmployeesDiscussion = () => {
  const [suggestions, setSuggestions] = useState([
    { id: 1, text: 'Free coffee on Mondays!', upvotes: 10 },
    { id: 2, text: 'Team building activities every Friday.', upvotes: 7 },
    { id: 3, text: 'Casual dress code on Fridays.', upvotes: 5 },
  ]);
  const [newSuggestion, setNewSuggestion] = useState('');

  const handleSuggestionChange = (e) => {
    setNewSuggestion(e.target.value);
  };

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    setSuggestions([...suggestions, { id: suggestions.length + 1, text: newSuggestion, upvotes: 0 }]);
    setNewSuggestion('');
  };

  const handleUpvote = (id) => {
    setSuggestions(suggestions.map(suggestion =>
      suggestion.id === id ? { ...suggestion, upvotes: suggestion.upvotes + 1 } : suggestion
    ));
  };

  const handleDownvote = (id) => {
    setSuggestions(suggestions.map(suggestion =>
      suggestion.id === id ? { ...suggestion, upvotes: Math.max(suggestion.upvotes - 1, 0) } : suggestion
    ));
  };

  return (
    <div className="widget">
      <h2>Employees Discussion</h2>
      <div className="content-container">
        <div className="google-form-container">
          <h3>Issue Tracker (Google Form)</h3>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLScvG93UxL9ow8hsyAoPcokBhdRIUJjoW2og86cD8gqgqD3N7Q/viewform?embedded=true" 
            width="100%" 
            height="600" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0">Loading…</iframe>
        </div>
        <div className="suggestions-container">
          <h3>Suggestions</h3>
          <form onSubmit={handleSuggestionSubmit}>
            <textarea 
              value={newSuggestion} 
              onChange={handleSuggestionChange} 
              placeholder="Enter your suggestion" 
              required 
            />
            <button type="submit">Submit Suggestion</button>
          </form>
          <h4>Top Suggestions</h4>
          <ul>
            {suggestions.sort((a, b) => b.upvotes - a.upvotes).slice(0, 3).map((suggestion) => (
              <li key={suggestion.id}>
                <span className="suggestion-text">{suggestion.text}</span>
                <div className="upvote-downvote">
                  <button onClick={() => handleUpvote(suggestion.id)}><FaThumbsUp /></button>
                  <button onClick={() => handleDownvote(suggestion.id)}><FaThumbsDown /></button>
                  <span>{suggestion.upvotes}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="poll-container">
          <h3>Poll: Fun Friday Activities</h3>
          <label htmlFor="poll">Vote for your favorite:</label>
          <input type="range" min="1" max="4" className="slider" id="poll" />
          <div className="poll-options">
            <span>Movie Night</span>
            <span>Game Night</span>
            <span>Karaoke Night</span>
            <span>Cooking Contest</span>
          </div>
          <div className="poll-numbers">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesDiscussion;
