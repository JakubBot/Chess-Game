import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

const LoginForm = ({
  user,
  loginGoogle,
  signOut,
  loginFacebook,
  onChange,
  forms,
  onSubmit,
}) => {
  return (
    <>
      <div className="login">
        <form className="login__form" onSubmit={onSubmit}>
          <div className="login__form__item">
            <label htmlFor="email" className="login__form__header">
              e-mail :
            </label>
            <input
              type="text"
              id="email"
              value={forms.email}
              onChange={onChange}
              name="email"
              className="login__form__input"
            />
          </div>
          <div className="login__form__item">
            <label htmlFor="password" className="login__form__header">
              password :
            </label>
            <input
              type="password"
              id="password"
              value={forms.password}
              onChange={onChange}
              name="password"
              autoComplete="on"
              className="login__form__input"
            />
          </div>
          <button type="submit" className="login__form__button">
            <span> Log in</span>
          </button>
        </form>
        <div className="login__buttons">
          <div className="login__buttons__header ">
            <span className="line" />
            <span>Or connect with</span>
            <span className="line" />
          </div>
          <div className="login__icons">
            <div className="login__icons__icon  flex-c">
              <span className="icon-google google " />
              {user ? (
                <div
                  className="login__buttons__button google"
                  role="button"
                  tabIndex="0"
                  onClick={signOut}
                >
                  Sign out
                </div>
              ) : (
                <div
                  className="login__buttons__button google"
                  role="button"
                  tabIndex="0"
                  onClick={loginGoogle}
                >
                  Google
                </div>
              )}
            </div>
            <div className="login__icons__icon flex-c">
              <span className="icon-facebook-squared facebook " />
              {user ? (
                <div
                  className="login__buttons__button facebook"
                  role="button"
                  tabIndex="0"
                  onClick={signOut}
                >
                  Sign out
                </div>
              ) : (
                <div
                  className="login__buttons__button facebook"
                  role="button"
                  tabIndex="0"
                  onClick={loginFacebook}
                >
                  Facebook
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="login__footer">
        New?
        <Link to="register" className="login__footer__link">
          Sign up for FREE!
        </Link>
      </footer>
    </>
  );
};

export default LoginForm;
