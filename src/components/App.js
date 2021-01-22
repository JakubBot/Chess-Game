import React from 'react';
import GamePage from './GamePage/GamePage';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import PageNotFound from './PageNotFound/PageNotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/game" component={GamePage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
