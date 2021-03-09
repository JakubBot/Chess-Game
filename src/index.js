import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalChat from './containers/GlobalChat';
import Navbar from './containers/Navbar';
import configureStore from './redux/store';

const OnlineGamePage = lazy(() => import('./containers/OnlineGamePage'));
const HomePage = lazy(() => import('./containers/HomePage'));
const LoginPage = lazy(() => import('./containers/LoginPage'));
const RegisterPage = lazy(() => import('./containers/RegisterPage'));
const ComputerGamePage = lazy(() => import('./containers/ComputerGamePage'));
const PageNotFound = lazy(() => import('./containers/PageNotFound'));

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <div className="container">
        <Router basename={process.env.PUBLIC_URL}>
          <Suspense fallback={<div>Waiting</div>}>
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
          </Suspense>
        </Router>
      </div>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// import OnlineGamePage from './containers/OnlineGamePage';
// import HomePage from './containers/HomePage';
// import LoginPage from './containers/LoginPage';
// import RegisterPage from './containers/RegisterPage';
// import PageNotFound from './containers/PageNotFound';
// import ComputerGamePage from './containers/ComputerGamePage';
