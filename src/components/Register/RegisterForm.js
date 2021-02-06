import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.scss';

const RegisterForm = () => {
  return (
    <>
      <div className="register">
        <header className="register__header">
          Join Now — <span className="italic">Free & Easy!</span>
        </header>
        <form className="register__form">
          <div className="register__form__item">
            <div className="register__form__header">nick :</div>
            <input type="text" className="register__form__input" />
          </div>
          <div className="register__form__item">
            <div className="register__form__header">e-mail :</div>
            <input type="text" className="register__form__input" />
          </div>
          <div className="register__form__item">
            <div className="register__form__header">password :</div>
            <input type="text" className="register__form__input" />
          </div>
          <button type="submit" className="register__form__button">
            <span>Register</span>
          </button>
        </form>
      </div>
      <footer className="login__footer">
        Have an account?
        <Link to="login" className="login__footer__link">
          log in here
        </Link>
      </footer>
    </>
  );
};
export default RegisterForm;
