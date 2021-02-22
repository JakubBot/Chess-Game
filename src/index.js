import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import OnlineGamePage from './containers/OnlineGamePage';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import PageNotFound from './containers/PageNotFound';
import ComputerGamePage from './containers/ComputerGamePage';
import GlobalChat from './containers/GlobalChat';
import Navbar from './containers/Navbar';
import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <div className="container">
        <Router basename={process.env.PUBLIC_URL}>
          <GlobalChat />
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route exact path="/play/computer" component={ComputerGamePage} />
            <Route exact path="/play/:token" component={OnlineGamePage} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
