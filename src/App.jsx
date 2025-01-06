import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { initializeAnalytics, trackPageView } from './analytics';



function App() {

  const location = useLocation();

  useEffect(() => {
    initializeAnalytics('G-4345KFVDC8'); // Replace with your Measurement ID
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);


  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
