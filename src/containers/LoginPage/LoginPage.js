import React from 'react';

import Login from '../../components/Login/Login';
import Navbar from '../../components/Navbar/Navbar';
import './LoginPage.scss';

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
