import React from 'react';
import './App.css';
import Nav from './component/Nav';
import SetRoute from './component/SetRoute';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <SetRoute/>
      </div>
    </Router>
  );
}

export default App;
