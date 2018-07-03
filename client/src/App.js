import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;