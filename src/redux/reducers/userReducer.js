import types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  const { userName, uid, photo, points, email, password } = action;

  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
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
