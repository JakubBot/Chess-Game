import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import {
  firestore,
  auth,
  googleProvider,
  facebookProvider,
} from '../../firebase-config';
import LoginForm from './LoginForm';
import * as userActions from '../../redux/actions/userActions';
import './index.scss';

let unsbscribe;
const Login = ({ logOut, loginUser }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [user] = useAuthState(auth);
  const [erros, setErrors] = useState({});
  useEffect(() => {
    if (!user) return;

    const userRef = firestore.collection('users').where('uid', '==', user.uid);

    unsbscribe = userRef.onSnapshot((docs) => {
      if (!docs.empty) {
        loginUser(docs);
      } else {
        register(user.uid);
      }
    });

    // eslint-disable-next-line consistent-return
    return () => unsbscribe && unsbscribe();
  }, [user]);

  const register = (uid) => {
    const { photoURL, displayName } = user;
    firestore.collection('users').add({
      uid,
      points: 500,
      userName: displayName,
      photo: photoURL,
    });
  };

  const loginGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };
  const signOut = () => {
    auth.signOut();
    logOut();
  };
  const loginFacebook = () => {
    auth.signInWithPopup(facebookProvider);
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const userRef = firestore
      .collection('users')
      .where('email', '==', form.email)
      .where('password', '==', form.password);
    userRef.onSnapshot((docs) => {
      if (!docs.empty) {
        loginUser(docs);
        // docs.docs.forEach((doc) => {
        //   const { uid, points, userName, photo } = doc.data();
        //   // eslint-disable-next-line no-underscore-dangle
        //   const _user = {
        //     uid,
        //     points,
        //     userName,
        //     photo,
        //   };
        //   logIn(_user);
        // });
      } else {
        setErrors({});
        setForm({
          email: '',
          password: '',
        });
      }
    });
  };

  return (
    <>
      <LoginForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        user={user}
        loginGoogle={loginGoogle}
        signOut={signOut}
        loginFacebook={loginFacebook}
      />
    </>
  );
};

const mapDispatchToProps = {
  logOutUser: userActions.logOutUser,
  loginUser: userActions.loginUser,
};
export default connect(null, mapDispatchToProps)(Login);