import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.scss';

const RegisterForm = ({ form, onChange, onSubmit }) => {
  return (
    <>
      <div className="register">
        <header className="register__header">
          Join Now
          <span className="small-dash">—</span>
          <span className="italic">Free & Easy!</span>
        </header>
        <form className="register__form" onSubmit={onSubmit}>
          <div className="register__form__item">
            <div className="register__form__header">username :</div>
            <input
              type="text"
              name="userName"
              value={form.userName}
              onChange={onChange}
              className="register__form__input"
            />
          </div>
          <div className="register__form__item">
            <div className="register__form__header">e-mail :</div>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={onChange}
              className="register__form__input"
            />
          </div>
          <div className="register__form__item">
            <div className="register__form__header">password :</div>
            <input
              type="text"
              name="password"
              value={form.password}
              onChange={onChange}
              className="register__form__input"
            />
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
