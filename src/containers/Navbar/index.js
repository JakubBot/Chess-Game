import React from 'react';
import Navigation from '../../components/Navigation';

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
      <Navigation onClick={handleMenuClick} />
    </>
  );
};

export default Navbar;
