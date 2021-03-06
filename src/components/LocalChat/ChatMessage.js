import React from 'react';

const ChatMessage = (props) => {
  const { uid, message, photoURL } = props.message;
  const userUID = props.user.uid;

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

export default ChatMessage;
