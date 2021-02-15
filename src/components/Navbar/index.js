import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

import './index.scss';

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
      <div
        className="menu-btn"
        role="button"
        tabIndex="0"
        onClick={handleMenuClick}
      >
        <div className="menu-btn__burger" />
      </div>
      <div className="menu__socials">
        <span className="icon-home icon" />
        <span className="icon-twitter-squared icon" />
        <span className="icon-facebook-squared icon" />
        <span className="icon-cog icon" />
      </div>
      <div className="navbar" aria-hidden="true">
        <div className="navbar__menu ">
          <img src={logo} className="menu__logo" alt="logo" />
          <div className="navbar__menu__item">
            <span className="icon-home icon" />
            <Link to="/">Home</Link>
          </div>
          <div className="navbar__menu__item">
            <span className="icon-gamepad icon" />
            <Link to="/">Play</Link>
          </div>
          <div className="navbar__menu__item ">
            <span className="icon-puzzle icon" />
            <Link to="/">Puzzles</Link>
          </div>
          <div className="navbar__menu__item">
            <span className="icon-graduation-cap icon" />
            <Link to="/">Learn</Link>
          </div>
          <div className="navbar__menu__item">
            <span className="icon-dot-3 icon" />
            <Link to="/">More</Link>
          </div>
        </div>

        <div className="buttons">
          <div className="buttons__sign">
            <Link to="/login">
              <button type="button" className="buttons__item flex-c-c">
                <span>Sign In</span>
              </button>
            </Link>
          </div>
          <div className="buttons__sign">
            <Link to="/register">
              <button type="button" className="buttons__item flex-c-c">
                <span>Sign Up</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="navbar__menu--bottom">
          <div className="navbar__menu__item--small ">
            <span className="icon-resize-horizontal icon" />
            <Link to="/">Collapse</Link>
          </div>
          <div className="navbar__menu__item--small icon">
            <span className="icon-cog" />
            <Link to="/">Settings</Link>
          </div>
          <div className="navbar__menu__item--small icon">
            <span className="icon-help" />
            <Link to="/">Help</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
