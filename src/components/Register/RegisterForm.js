import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../common/TextInput';
import SubmitButton from '../common/SubmitButton';
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
          <TextInput
            value={form.userName}
            name="userName"
            onChange={onChange}
            labelText="username :"
          />
          <TextInput
            value={form.email}
            name="email"
            onChange={onChange}
            labelText="email :"
          />
          <TextInput
            value={form.password}
            name="password"
            onChange={onChange}
            labelText="password :"
          />
          <SubmitButton text="Register" />
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
