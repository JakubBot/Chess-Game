import React, { forwardRef } from 'react';
import TextInput from '../TextInput';
import ChatMessage from './ChatMessage';
import EmptyChat from '../EmptyChat';
import './index.scss';

const FloatedButton = forwardRef(
  (
    {
      messages,
      user,
      formMessage,
      onClick,
      onChange,
      onSubmit,
      loginGoogle,
      loginFacebook,
    },
    lastMessageRef
  ) => {
    return (
      <>
        <div className="floated">
          <button type="button" className="floatedButton" onClick={onClick}>
            <span className="floatedButton__icon" name="floatedButton__icon">
              +
            </span>
          </button>
          <div className="floated__chat">
            <h3 className="floated__chat__header">Say Hello To World!</h3>
            <ul className="floated__chat__list">
              {user ? (
                messages.map(({ message, uid, photoURL, docId }) => (
                  <ChatMessage
                    message={message}
                    uid={uid}
                    key={docId}
                    photoURL={photoURL}
                    userUID={user.uid}
                  />
                ))
              ) : (
                <EmptyChat
                  loginGoogle={loginGoogle}
                  loginFacebook={loginFacebook}
                />
              )}
              <span ref={lastMessageRef} />
            </ul>
            <form className="floated__form" onSubmit={onSubmit}>
              <TextInput
                onChange={onChange}
                value={formMessage}
                placeHolder="Aa"
              />
              <button type="submit" className="floated__form__button">
                <span role="img" aria-label="icon">
                  🕊️
                </span>
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
);

export default FloatedButton;
