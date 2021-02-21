import React, { forwardRef } from 'react';
import ChatMessage from './ChatMessage';
import EmptyChat from '../EmptyChat';
import './index.scss';

const ChatMessages = forwardRef(
  (
    {
      messages,
      sendMessage,
      formValue,
      handleChange,
      user,
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
                      message={msg}
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

export default ChatMessages;
