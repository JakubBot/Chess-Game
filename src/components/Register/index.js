import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import { firestore } from '../../firebase-config';
import { generateID } from '../utils/utils';
import * as userActions from '../../redux/actions/userActions';

import './index.scss';

const Register = ({ logIn, history }) => {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formIsValid = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const _error = {};

    if (form.userName.length === 0) {
      _error.userName = 'User name is required';
    } else if (form.userName.length < 3) {
      _error.userName = 'User name has to be longer than 3 characters';
    } else if (form.userName.length > 10) {
      _error.userName = 'User name has to be shorter than 10 characters';
    }

    if (form.email.length === 0) {
      _error.email = 'Email is required';
    } else if (!emailPattern.test(form.email)) {
      _error.email = 'Please enter a valid email address.';
    }

    if (form.password.length === 0) {
      _error.password = 'Password is required';
    } else if (form.password.length < 3) {
      _error.password = 'Password has to be longer than 3 characters';
    } else if (form.password.length > 10) {
      _error.password = 'Password has to be shorter than 10 characters';
    }

    setErrors(_error);

    return Object.keys(_error).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;

    const uid = generateID();
    const photo =
      'https://betacssjs.chesscomfiles.com/bundles/web/images/white_400.09ae248e.png';
    const { userName, email, password } = form;
    const _user = {
      email,
      password,
      uid,
      userName,
      photo,
      points: 500,
    };
    const usersRef = firestore.collection('users');
    usersRef.add(_user);
    usersRef.onSnapshot((docs) => {
      const user = docs.docs.find((doc) => doc.data().uid === uid);

      logIn({
        ..._user,
        points: user.data().points,
      });
    });

    setForm({
      userName: '',
      email: '',
      password: '',
    });
    history.push('/');
  };

  return (
    <>
      <RegisterForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        form={form}
        errors={errors}
      />
    </>
  );
};
const mapDispatchToProps = {
  logIn: userActions.logIn,
};
export default withRouter(connect(null, mapDispatchToProps)(Register));
