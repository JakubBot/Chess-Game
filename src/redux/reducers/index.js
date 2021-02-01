import { combineReducers } from 'redux';
import userInfo from './userInfo';
import points from './points';

const rootReducer = combineReducers({ userInfo, points });
export default rootReducer;
