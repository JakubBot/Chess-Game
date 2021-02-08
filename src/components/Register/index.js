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
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

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
      />
    </>
  );
};
const mapDispatchToProps = {
  logIn: userActions.logIn,
};
export default withRouter(connect(null, mapDispatchToProps)(Register));
