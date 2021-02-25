import { firestore } from '../../firebase-config';

function canLogInWithSocials(authUser, user, loginUserWithSocials) {
  if (authUser !== null && user === null) {
    const userRef = firestore
      .collection('users')
      .where('uid', '==', authUser.uid);

    return userRef.onSnapshot((docs) => {
      if (docs.size === 1) {
        loginUserWithSocials(docs);
      } else {
        register(authUser);
      }
    });
  }
}

function canLoginWithForm(authUser, user, loginUserWithForm) {
  if (authUser === null && user === null) {
    const _user = JSON.parse(localStorage.getItem('user'));
    if (_user) loginUserWithForm(_user);
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
export { canLogInWithSocials, canLoginWithForm };
