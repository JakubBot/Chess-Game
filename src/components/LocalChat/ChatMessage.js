import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = ({ msg, user }) => {
  const { uid, message, photoURL } = msg;
  const userUID = user.uid;

  const messageClass = uid === userUID ? 'sent' : 'received';
  return (
    <>
      <div className="message">
        <div className={`message ${messageClass}`}>
          <div className={`userMessage ${messageClass}`}>{message}</div>
          <img src={photoURL} alt="userPhoto" />
        </div>
      </div>
    </>
  );
};

ChatMessage.propTypes = {
  msg: PropTypes.arrayOf(
    PropTypes.shape({
      docId: PropTypes.string,
      message: PropTypes.string,
      photoURL: PropTypes.string,
      uid: PropTypes.string,
    })
  ),
  user: PropTypes.shape({
    userName: PropTypes.string,
    photo: PropTypes.string,
    uid: PropTypes.string,
    points: PropTypes.number,
  }),
};

export default ChatMessage;
