/* eslint-disable no-alert */
import types from './actionTypes';
import { firestore } from '../../firebase-config';

export function logIn({ userName, photo, uid, points }) {
  return {
    type: types.LOGIN_USER,
    userName,
    photo,
    uid,
    points,
  };
}

function getUserFromFirestore(docs) {
  const { uid, points, userName, photo } = docs[0].data();
  return {
    uid,
    points,
    userName,
    photo,
  };
}

export function logOutUser() {
  localStorage.setItem('user', null);
  return { type: types.LOG_OUT };
}

export function loginUserWithForm(
  mylocalStorage = { method: 'get', user: null }
) {
  return (dispatch) => {
    let { user } = mylocalStorage;
    const { method } = mylocalStorage;

    if (method === 'set') {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      user = JSON.parse(localStorage.getItem('user'));
    }
    if (!user) return;

    dispatch(logIn(user));
  };
}

export function updateLocalStorage(points) {
  return (dispatch) => {
    let user = localStorage.getItem('user');

    if (user === null) return;
    user = JSON.parse(user);

    localStorage.setItem('user', JSON.stringify({ ...user, points }));
    dispatch(logIn({ ...user, points }));
  };
}

export function loginUserWithSocials(authUser) {
  return (dispatch) => {
    const userRef = firestore
      .collection('users')
      .where('uid', '==', authUser.uid);

    return userRef.onSnapshot(({ size, docs }) => {
      if (size === 1) {
        const _user = getUserFromFirestore(docs);
        dispatch(logIn(_user));
      } else {
        register(authUser);
      }
    });
  };
}

function register(authUser) {
  const { photoURL, displayName, uid } = authUser;
  firestore.collection('users').add({
    uid,
    points: 500,
    userName: displayName,
    photo: photoURL,
  });
}
