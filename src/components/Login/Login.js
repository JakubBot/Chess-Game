import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import { auth, googleProvider, facebookProvider } from '../../firebase-config';
import LoginForm from './LoginForm';
import * as userActions from '../../redux/actions/userActions';
import './Login.scss';

const LoginPage = ({ logIn }) => {
  const [user] = useAuthState(auth);
  const loginGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };
  const signOut = () => {
    auth.signOut();
  };
  const loginFacebook = () => {
    auth.signInWithPopup(facebookProvider);
  };

  useEffect(() => {
    if (!user) return;
    const { uid, displayName, photoURL } = user;
    // eslint-disable-next-line no-underscore-dangle
    const _user = {
      uid,
      name: displayName,
      photo: photoURL,
    };

    logIn(_user);
  }, [user]);
  return (
    <>
      <LoginForm
        user={user}
        loginGoogle={loginGoogle}
        signOut={signOut}
        loginFacebook={loginFacebook}
      />
    </>
  );
};

const mapDispatchToProps = {
  logIn: userActions.logIn,
};
export default connect(null, mapDispatchToProps)(LoginPage);
