import React, { useState } from 'react';
import logo from '../../img/logo.png';

import './Navbar.scss';
const $ = window.jQuery
const Navbar = () => {

  const toggleMenuClass = (e) => {
    const menuButton = $('.menu-btn')
    menuButton.toggleClass('open')
  };
  return (
    <>
      <div className="container">
        <div className="navbar"></div>
      </div>
      <div className="menu-btn" onClick={toggleMenuClass}>
        <div className="menu-btn__burger"></div>
      </div>
    </>
  );
};

export default Navbar;
