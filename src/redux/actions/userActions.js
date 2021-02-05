import types from './actionTypes';

export function logIn({ name, photo, uid }) {
  return { type: types.LOG_IN, name, photo, uid };
}
