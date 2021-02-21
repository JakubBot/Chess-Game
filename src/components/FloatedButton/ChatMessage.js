import React from 'react';

const ChatMessage = ({ message, uid, photoURL, userUID }) => {
  const messageClass = uid === userUID ? 'sent' : 'received';
  return (
    <>
      <div className={`floated__list__item ${messageClass}`}>
        <div className={`floated__list__message ${messageClass}`}>
          <span className="floated__list__userMessage">{message}</span>
        </div>
        <img src={photoURL} alt="userPhoto" />
      </div>
    </>
  );
};

export default ChatMessage;
