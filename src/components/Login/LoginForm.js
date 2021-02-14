import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../common/TextInput';
import SubmitButton from '../common/SubmitButton';
import './LoginForm.scss';

const LoginForm = ({
  user,
  loginGoogle,
  signOut,
  loginFacebook,
  onChange,
  form,
  onSubmit,
}) => {
  return (
    <>
      <div className="login">
        <form className="login__form" onSubmit={onSubmit}>
          <TextInput
            labelText="email :"
            value={form.email}
            onChange={onChange}
            name="email"
          />
          <TextInput
            labelText="password :"
            value={form.password}
            onChange={onChange}
            name="password"
          />
          <SubmitButton text="Log in" />
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

      <footer className="footer">
        New?
        <Link to="register" className="footer__link">
          Sign up for FREE!
        </Link>
      </footer>
    </>
  );
};

export default LoginForm;
