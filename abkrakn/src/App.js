import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home.js';
import Start from './pages/Start.js';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/start" component={Start} />
        </div>
      </Router>
    );
  }
}

export default App;
