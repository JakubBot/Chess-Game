import types from './actionTypes';

export function logIn({ userName, photo, uid, points, email, password }) {
  return { type: types.LOG_IN, userName, photo, uid, points, email, password };
}

export function logOut() {
  return { type: types.LOG_OUT };
}
