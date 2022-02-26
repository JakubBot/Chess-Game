/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers/index';
import { composeWithDevTools } from '@redux-devtools/extension';


export default function configureStore(initialState) {
  const composeEnhancers =
    process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
