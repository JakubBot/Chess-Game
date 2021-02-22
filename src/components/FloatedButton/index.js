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
                <svg viewBox="0 0 24 24" height="20px" width="20px">
                  <path
                    d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
                    fillRule="evenodd"
                    stroke="none"
                  />
                </svg>
                {/* <span role="img" aria-label="icon">
                  🕊️
                </span> */}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
);

export default FloatedButton;
