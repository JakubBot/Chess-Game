import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, googleProvider } from '../../firebase-config';
import './Login.scss';

const LoginPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const loginGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };
  const signOutGoogle = () => {
    auth.signOut();
  };

  useEffect(() => {
    if (user) {
      console.log(user.email);
    }
  });

  return (
    <>
      <div className="login">
        <div className="login__form">
          <div className="login__form__email">
            <div className="login__form__header">e-mail :</div>
            <input type="text" className="login__form__input" />
          </div>
          <div className="login__form__email">
            <div className="login__form__header">password :</div>
            <input type="text" className="login__form__input" />
          </div>
          <button type="button" className="login__form__button">
            <span> Log in</span>
          </button>
        </div>
        <div className="login__buttons">
          <div className="login__buttons__header ">
            <span className="line" />
            <span>Or connect with</span>
            <span className="line" />
          </div>
          <div className="login__icons">
            <span className="icon-facebook-squared facebook__icon" />
            {user ? (
              <div
                className="login__buttons__button"
                role="button"
                tabIndex="0"
                onClick={signOutGoogle}
              >
                Sign out
              </div>
            ) : (
              <div
                className="login__buttons__button"
                role="button"
                tabIndex="0"
                onClick={loginGoogle}
              >
                Sign with Google
              </div>
            )}
          </div>

          <div className="login__buttons__button">Facebook</div>
        </div>
      </div>
      <footer className="footer">New? Sign up for free !</footer>
    </>
  );
};
export default LoginPage;
