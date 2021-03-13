import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextInput from '../common/TextInput';
import SubmitButton from '../common/SubmitButton';
import './RegisterForm.scss';

const RegisterForm = ({ form, errors, onChange, onSubmit }) => {
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
            errors={errors.userName}
          />
          <TextInput
            value={form.email}
            name="email"
            onChange={onChange}
            labelText="email :"
            errors={errors.email}
          />
          <TextInput
            value={form.password}
            name="password"
            onChange={onChange}
            labelText="password :"
            errors={errors.password}
          />
          <SubmitButton text="Register" />
        </form>
      </div>
      <footer className="footer">
        Have an account?
        <Link to="login" className="footer__link">
          log in here
        </Link>
      </footer>
    </>
  );
};

RegisterForm.propTypes = {
  form: PropTypes.shape({
    email: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  errors: PropTypes.shape({
    email: PropTypes.string,
    userName: PropTypes.string,
    password: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
