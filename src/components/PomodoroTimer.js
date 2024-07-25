import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css'; // Import specific styles for PomodoroTimer component

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && time > 0) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, time]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleStart = () => setIsActive(true);
  const handleStop = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  return (
    <div className="widget pomodoro-timer">
      <h2>Pomodoro Timer</h2>
      <div id="timer-display">{formatTime(time)}</div>
      <div className="button-group">
        <button className="btn" onClick={handleStart}>Start</button>
        <button className="btn" onClick={handleStop}>Stop</button>
        <button className="btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
