import types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        name: action.name,
        uid: action.uid,
        photo: action.photo,
      };
    default:
      return state;
  }
}
