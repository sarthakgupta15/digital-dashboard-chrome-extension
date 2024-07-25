// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import EmployeesDiscussion from './pages/EmployeesDiscussion';
import RelaxTab from './pages/RelaxTab';
import GenericLeaderboard from './pages/GenericLeaderboard';
import GoogleWidgets from './pages/GoogleWidgets';
import ChatGPT from './pages/ChatGPT';
import PomodoroTimer from './components/PomodoroTimer';
import TasksToDo from './components/TasksToDo';
import TodayILearned from './components/TodayILearned';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Digital Notice Board</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/employees-discussion">Employees Discussion</Link>
            <Link to="/relax-tab">Relax Tab</Link>
            <Link to="/generic-leaderboard">Generic Leaderboard</Link>
            <Link to="/google-widgets">Google Widgets</Link>
            <Link to="/chatgpt">ChatGPT</Link>
          </nav>
          <div className="announcement">
            <marquee>Most important announcement for the day</marquee>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/employees-discussion" element={<EmployeesDiscussion />} />
            <Route path="/relax-tab" element={<RelaxTab />} />
            <Route path="/generic-leaderboard" element={<GenericLeaderboard />} />
            <Route path="/google-widgets" element={<GoogleWidgets />} />
            <Route path="/chatgpt" element={<ChatGPT />} />
            <Route path="/" element={
              <div className="home-page">
                <PomodoroTimer />
                <TasksToDo />
                <TodayILearned />
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
