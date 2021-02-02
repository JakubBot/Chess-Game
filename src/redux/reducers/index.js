import { combineReducers } from 'redux';
import boardInfo from './boardReducer';

const rootReducer = combineReducers({ boardInfo });
export default rootReducer;
