import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCWNcsnLzCTiD2ckKYjPFOOnSU_am3IOBc',
  authDomain: 'chess-website-b9199.firebaseapp.com',
  projectId: 'chess-website-b9199',
  storageBucket: 'chess-website-b9199.appspot.com',
  messagingSenderId: '223317395203',
  appId: '1:223317395203:web:d81cf77519987424260b36',
  measurementId: 'G-XJQS56VDHX',
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const loginGoogle = () => {
  auth.signInWithPopup(googleProvider);
};

const loginFacebook = () => {
  auth.signInWithPopup(facebookProvider);
};
const signOutUser = (logOutUser) => {
  auth.signOut().then(() => logOutUser());
};

export {
  firestore,
  auth,
  googleProvider,
  facebookProvider,
  firebase,
  loginGoogle,
  loginFacebook,
  signOutUser,
};
