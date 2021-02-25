/* eslint-disable no-alert */
import types from './actionTypes';

export function logIn({ userName, photo, uid, points, email, password }) {
  return {
    type: types.LOGIN_USER,
    userName,
    photo,
    uid,
    points,
    email,
    password,
  };
}

async function getUserFromFirestore(docs) {
  const {
    uid,
    points,
    userName,
    photo,
    email,
    password,
  } = await docs[0].data();
  return {
    uid,
    points,
    userName,
    photo,
    email,
    password,
  };
}

export function logOutUser() {
  localStorage.setItem('user', null);
  return { type: types.LOG_OUT };
}

export function saveUserWithForm({ docs }) {
  return async (dispatch) => {
    const _user = await getUserFromFirestore(docs);
    localStorage.setItem('user', JSON.stringify(_user));
    dispatch(logIn(_user));
  };
}

export function loginUserWithForm(_user) {
  return (dispatch) => {
    dispatch(logIn(_user));
  };
}

export function loginUserWithSocials({ docs }) {
  return async (dispatch) => {
    const _user = await getUserFromFirestore(docs);

    dispatch(logIn(_user));
  };
}
