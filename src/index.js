import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalChat from './containers/GlobalChat';
import Navbar from './containers/Navbar';
import Spinner from './components/Spinner';

import configureStore from './redux/store';
import './index.scss';

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
          <Suspense fallback={<Spinner />}>
            <GlobalChat />
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/play/computer" component={ComputerGamePage} />
              <Route path="/play/online/:token" component={OnlineGamePage} />
              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
