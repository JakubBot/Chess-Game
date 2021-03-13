import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const EmptyChat = ({ loginGoogle, loginFacebook }) => {
  return (
    <>
      <div className="emptyChat">
        <h4>Login to use this chat</h4>
        <div className="emptyChat__icons  flex-c">
          <span className="icon-google google " />
          <div
            className="login__buttons__button google"
            role="button"
            tabIndex="0"
            onClick={loginGoogle}
          >
            Google
          </div>
        </div>
        <div className="emptyChat__icons flex-c">
          <span className="icon-facebook-squared facebook " />
          <div
            className="login__buttons__button facebook"
            role="button"
            tabIndex="0"
            onClick={loginFacebook}
          >
            Facebook
          </div>
        </div>
      </div>
    </>
  );
};

EmptyChat.propTypes = {
  loginGoogle: PropTypes.func.isRequired,
  loginFacebook: PropTypes.func.isRequired,
};

export default EmptyChat;
