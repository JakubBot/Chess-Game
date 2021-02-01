import { createStore } from 'redux';
import rootReducer from './reducers/index';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  return createStore(rootReducer, initialState, composeEnhancers);
}
