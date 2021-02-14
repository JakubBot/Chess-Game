/* eslint-disable no-alert */
import types from './actionTypes';

export function logIn({ userName, photo, uid, points, email, password }) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    userName,
    photo,
    uid,
    points,
    email,
    password,
  };
}

export function logOutUser() {
  return { type: types.LOG_OUT };
}

export function loginUser({ docs }) {
  return async (dispatch) => {
    if (!docs) return;
    if (docs.length !== 1) {
      alert('unexpected error');
      return null;
    }
    const { uid, points, userName, photo } = await docs[0].data();

    const _user = {
      uid,
      points,
      userName,
      photo,
    };
    dispatch(logIn(_user));
  };
}
