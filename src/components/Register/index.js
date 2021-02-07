import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import { firestore } from '../../firebase-config';
import { generateUID } from '../utils/utils';
import './index.scss';

const Register = () => {
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

    const uid = generateUID();
    const photo =
      'https://betacssjs.chesscomfiles.com/bundles/web/images/white_400.09ae248e.png';
    const { userName, email, password } = form;
    firestore.collection('users').add({
      uid,
      userName,
      photo,
      email,
      password,
      points: 500,
    });
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
export default Register;
