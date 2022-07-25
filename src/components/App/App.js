import React from 'react';
import NavBar from 'components/NavBar/NavBar';
// import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
      <NavBar />
      <h1>Demo</h1>
    </div>
    </Router>
    
  );
}

export default App;
