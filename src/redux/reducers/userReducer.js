import types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOG_IN:
      const { userName, uid, photo, points, email, password } = action;
      return {
        ...state,
        userName,
        uid,
        photo,
        email,
        password,
        points,
      };
    case types.LOG_OUT:
      return {};
    default:
      return state;
  }
}
