import types from './actionTypes';

export function logIn({ userName, photo, uid, points }) {
  return { type: types.LOG_IN, userName, photo, uid, points };
}
export function logOut() {
  return { type: types.LOG_OUT };
}
