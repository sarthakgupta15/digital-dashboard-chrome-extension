import React, { useState } from 'react';
import axios from 'axios';
import './ChatGPT.css'; // Import specific styles for ChatGPT component

const ChatGPT = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: query,
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`, // Replace YOUR_API_KEY with your actual API key
          },
        }
      );
      setResult(response.data.choices[0].text);
    } catch (error) {
      console.error('Error querying the ChatGPT API:', error);
      setResult('An error occurred while fetching the result.');
    }
    setLoading(false);
  };

  return (
    <div className="chatgpt-widget">
      <h2>ChatGPT</h2>
      <form onSubmit={handleSubmit} className="chatgpt-form">
        <textarea 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your query here..."
          className="chatgpt-input"
          required
        />
        <button type="submit" className="chatgpt-submit" disabled={loading}>
          {loading ? 'Asking...' : 'Ask ChatGPT'}
        </button>
      </form>
      {result && (
        <div className="chatgpt-result">
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default ChatGPT;
