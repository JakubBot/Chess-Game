import React from 'react';
import NavBar from '../../components/Navbar';
import Register from '../../components/Register';

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
