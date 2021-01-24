import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

import './Navbar.scss';
const $ = window.jQuery;
const Navbar = () => {
  const handleMenuClick = () => {
    const menuButton = $('.menu-btn');

    const navbar = $('.navbar');
    if (!menuButton.hasClass('open')) {
      navbar.css('transform', 'translateX(0)');
    } else {
      navbar.css('transform', 'translateX(-100%)');
    }
    menuButton.toggleClass('open');
  };

  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navbar__menu">
            <img src={logo} alt="logo" />
            <div className="navbar__menu__item">
              <span className="icon-home"></span>
              <Link to="/">Home</Link>
            </div>
            <div className="navbar__menu__item">
              <span className="icon-gamepad"></span>
              <Link to="/">Play</Link>
            </div>
            <div className="navbar__menu__item">
              <span className="icon-puzzle"></span>
              <Link to="/">Puzzles</Link>
            </div>
            <div className="navbar__menu__item">
              <span className="icon-graduation-cap"></span>
              <Link to="/">Learn</Link>
            </div>
            <div className="navbar__menu__item">
              <span className="icon-dot-3"></span>
              <Link to="/">More</Link>
            </div>
          </div>

          <div className="buttons">
            <div className="buttons__signIn">
              <a href="Sign" className="buttons__item flex-c-c">
                <span>Sign In</span>
              </a>
            </div>
            <div className="buttons__signUp">
              <a href="Sign" className="buttons__item flex-c-c">
                <span>Sign Up</span>
              </a>
            </div>
          </div>
          <div className="navbar__menu--bottom ">
            <div className="navbar__menu__item--small ">
              <span className="icon-resize-horizontal"></span>
              <Link to="/">Collapse</Link>
            </div>
            <div className="navbar__menu__item--small">
              <span className="icon-cog"></span>
              <Link to="/">Settings</Link>
            </div>
            <div className="navbar__menu__item--small">
              <span className="icon-help"></span>
              <Link to="/">Help</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-btn" onClick={handleMenuClick}>
        <div className="menu-btn__burger"></div>
      </div>
    </>
  );
};

export default Navbar;
