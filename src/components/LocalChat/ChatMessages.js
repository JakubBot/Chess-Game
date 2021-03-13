import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';
import EmptyChat from '../EmptyChat';
import './index.scss';

const ChatMessages = forwardRef(
  (
    {
      messages,
      user,
      formValue,
      sendMessage,
      handleChange,
      loginGoogle,
      loginFacebook,
    },
    lastMessageRef
  ) => {
    return (
      <>
        <div className="scoreBoard__info__chat">
          <div className="scoreBoard__info__header">Chat</div>
          <div className="scoreBoard__info__options">
            <div className="chat">
              <div className="windowChat">
                {messages.map((msg) => {
                  return (
                    <ChatMessage
                      key={msg.id}
                      user={user}
                      msg={msg}
                      uid={msg.uid}
                    />
                  );
                })}

                <span ref={lastMessageRef} />
              </div>
              <div className="chatMessage">
                <form onSubmit={sendMessage}>
                  <input
                    type="text"
                    value={formValue}
                    onChange={handleChange}
                    placeholder="Aa"
                  />
                  <button type="submit">
                    <span role="img" aria-label="icon">
                      🕊️
                    </span>
                  </button>
                </form>
              </div>
              {!user && (
                <EmptyChat
                  loginGoogle={loginGoogle}
                  loginFacebook={loginFacebook}
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
);

ChatMessage.propTypes = {
  messages: PropTypes.arrayOf(
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
  formValue: PropTypes.string,
  sendMessage: PropTypes.func,
  handleChange: PropTypes.func,
  loginGoogle: PropTypes.func,
  loginFacebook: PropTypes.func,
};

export default ChatMessages;
