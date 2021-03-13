import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = ({ message, uid, photoURL, userUID }) => {
  const messageClass = uid === userUID ? 'sent' : 'received';
  return (
    <>
      <div className={`floated__chat__item ${messageClass}`}>
        <div className={`floated__chat__message ${messageClass}`}>
          <span className="floated__chat__userMessage">{message}</span>
        </div>
        <img src={photoURL} alt="userPhoto" />
      </div>
    </>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  userUID: PropTypes.string.isRequired,
};
export default ChatMessage;
