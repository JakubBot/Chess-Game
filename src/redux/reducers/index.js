import { combineReducers } from 'redux';
import boardInfo from './boardReducer';
import user from './userReducer';

const rootReducer = combineReducers({ boardInfo, user });
export default rootReducer;
