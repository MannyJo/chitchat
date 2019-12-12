import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from '../Join/Join';
import Chat from '../Chat/Chat';
import './App.scss';

function App() {
  return (
    <div className="bg">
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  );
}

export default App;
