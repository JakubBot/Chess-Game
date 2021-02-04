import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import GamePage from './containers/GamePage/GamePage';
import HomePage from './containers/HomePage/HomePage';
import LoginPage from './containers/LoginPage/LoginPage';
import PageNotFound from './containers/PageNotFound/PageNotFound';

import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <div className="container">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/game" component={GamePage} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
