import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation';
import * as userActions from '../../redux/actions/userActions';
import { signOutUser } from '../../firebase-config';

const $ = window.jQuery;
const Navbar = ({ user, logOutUser }) => {
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

  const signOut = () => {
    signOutUser(logOutUser);
  };

  return (
    <>
      <Navigation user={user} onClick={handleMenuClick} signOut={signOut} />
    </>
  );
};

function mapStateToProps({ user }) {
  return {
    user,
  };
}

const mapDispatchToProps = {
  logOutUser: userActions.logOutUser,
};

Navbar.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string,
    photo: PropTypes.string,
    uid: PropTypes.string,
    points: PropTypes.number,
  }),
  logOutUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
