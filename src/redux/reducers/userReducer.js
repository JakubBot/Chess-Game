import types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  const { userName, uid, photo, points } = action;

  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        userName,
        uid,
        photo,
        points,
      };
    case types.LOG_OUT:
      return null;
    case types.UPDATE_USER_POINTS:
      return { ...state, points: action.points };
    default:
      return state;
  }
}
