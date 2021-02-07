import types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        userName: action.userName,
        uid: action.uid,
        photo: action.photo,
        points: action.points,
      };
    case types.LOG_OUT:
      return {};
    default:
      return state;
  }
}
