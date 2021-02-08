import React from 'react';
import Login from '../../components/Login';
import Navbar from '../../components/Navbar';
import './index.scss';

const LoginPage = () => {
  return (
    <>
      <Navbar />

      <div className="loginPage__wrapper">
        <Login />
      </div>
    </>
  );
};
export default LoginPage;