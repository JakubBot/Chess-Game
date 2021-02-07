import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import './index.scss';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
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
