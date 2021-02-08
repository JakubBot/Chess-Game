/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import rootReducer from './reducers/index';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;
  return createStore(rootReducer, initialState, composeEnhancers);
}
