import React from 'react';
import NavBar from '../../components/Navbar';
import Register from '../../components/Register';
import './index.scss';

const RegisterPage = () => {
  return (
    <>
      <NavBar />

      <div className="registerPage__wrapper">
        <Register />
      </div>
    </>
  );
};

export default RegisterPage;
