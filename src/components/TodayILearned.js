// components/TodayILearned.js
import React, { useState } from 'react';
import './TodayILearned.css';

const TodayILearned = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const addEntry = () => {
    if (newEntry.trim()) {
      setEntries([...entries, newEntry]);
      setNewEntry('');
    }
  };

  return (
    <div className="widget today-i-learned">
      <h2>Today I Learned</h2>
      <input
        type="text"
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        placeholder="Add a new entry"
      />
      <button onClick={addEntry}>Add Entry</button>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodayILearned;
