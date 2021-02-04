import React from 'react';

import Logo from '../../assets/img/logo.png';
import './Login.scss';

const LoginPage = () => {
  return (
    <>
      <img src={Logo} alt="logo" />
      <div className="login">
        <div className="login__form">
          <div className="login__form__email">
            <div className="login__form__header">e-mail:</div>
            <input type="text" className="login__form__input" />
          </div>
          <div className="login__form__email">
            <div className="login__form__header">password</div>
            <input type="text" className="login__form__input" />
          </div>
          <button type="button">Log in</button>
        </div>
        <div className="login__buttons">
          <div className="login__buttons__header">Or connect with</div>
          <div className="login__buttons__button">Facebook</div>
          <div className="login__buttons__button">Facebook</div>
        </div>
      </div>
      <footer className="footer">New? Sign up for free !</footer>
    </>
  );
};
export default LoginPage;
