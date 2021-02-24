import { firestore } from '../../firebase-config';

function logIn(authUser, user, loginUser) {
  if (authUser !== null && user === null) {
    const userRef = firestore
      .collection('users')
      .where('uid', '==', authUser.uid);

    return userRef.onSnapshot((docs) => {
      if (docs.size === 1) {
        loginUser(docs);
      } else {
        register(authUser);
      }
    });
  }
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
export default logIn;
