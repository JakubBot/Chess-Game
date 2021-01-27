import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

import './Navbar.scss';

const $ = window.jQuery;
const Navbar = () => {
  const handleMenuClick = () => {
    if ($(window).width() > 576) return;
    const menuButton = $('.menu-btn');

    const navbar = $('.navbar');
    if (!menuButton.hasClass('open')) {
      navbar.addClass('showNavbar');
    } else {
      navbar.removeClass('showNavbar');
    }
    menuButton.toggleClass('open');
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__menu ">
          <img src={logo} alt="logo" />
          <div className="navbar__menu__item">
            <span className="icon-home" />
            <Link to="/">Home</Link>
          </div>
          <div className="navbar__menu__item">
            <span className="icon-gamepad" />
            <Link to="/">Play</Link>
          </div>
          <div className="navbar__menu__item">
            <span className="icon-puzzle" />
            <Link to="/">Puzzles</Link>
          </div>
          <div className="navbar__menu__item">
            <span className="icon-graduation-cap" />
            <Link to="/">Learn</Link>
          </div>
          <div className="navbar__menu__item">
            <span className="icon-dot-3" />
            <Link to="/">More</Link>
          </div>
        </div>

        <div className="buttons">
          <div className="buttons__sign">
            <a href="login" className="buttons__item flex-c-c">
              <span>Sign In</span>
            </a>
          </div>
          <div className="buttons__sign">
            <a href="login" className="buttons__item flex-c-c">
              <span>Sign Up</span>
            </a>
          </div>
        </div>
        <div className="navbar__menu--bottom">
          <div className="navbar__menu__item--small ">
            <span className="icon-resize-horizontal" />
            <Link to="/">Collapse</Link>
          </div>
          <div className="navbar__menu__item--small">
            <span className="icon-cog" />
            <Link to="/">Settings</Link>
          </div>
          <div className="navbar__menu__item--small">
            <span className="icon-help" />
            <Link to="/">Help</Link>
          </div>
        </div>
      </div>
      <div
        className="menu-btn"
        role="button"
        tabIndex="0"
        onClick={handleMenuClick}
      >
        <div className="menu-btn__burger" />
      </div>
    </>
  );
};

export default Navbar;
