import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation';

const $ = window.jQuery;
const Navbar = ({ user }) => {
  console.log(user);
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

function mapStateToProps({ user }) {
  return {
    user,
  };
}

export default connect(mapStateToProps, null)(Navbar);
