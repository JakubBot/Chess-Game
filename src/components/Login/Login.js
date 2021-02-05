import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, googleProvider, facebookProvider } from '../../firebase-config';
import LoginForm from './LoginForm';
import './Login.scss';

const LoginPage = () => {
  const [user, loading, error] = useAuthState(auth);
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
    if (user) {
      console.log(user.email);
    }
  });

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
export default LoginPage;
