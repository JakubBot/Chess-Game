import React from 'react';
import ChatMessage from './ChatMessage';

const ChatMessages = ({
  messages,
  ref,
  sendMessage,
  formValue,
  handleChange,
  user,
  loginGoogle,
  loginFacebook,
}) => {
  return (
    <>
      <div className="scoreBoard__info__chat">
        <div className="scoreBoard__info__header">Chat</div>
        <div className="scoreBoard__info__options">
          <div className="chat">
            <div className="windowChat">
              {messages !== undefined &&
                messages.map((msg) => {
                  return (
                    <ChatMessage
                      key={msg.id}
                      user={user}
                      message={msg}
                      uid={msg.uid}
                    />
                  );
                })}

              <span ref={ref} />
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMessages;
