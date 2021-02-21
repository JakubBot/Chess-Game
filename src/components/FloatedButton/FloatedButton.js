import React from 'react';
import TextInput from '../TextInput';

import './FloatedButton.scss';

const FloatedButton = ({
  messages,
  currentUID,
  formMessage,
  onClick,
  onChange,
  onSubmit,
}) => {
  return (
    <>
      <div className="floated">
        <button type="button" className="floatedButton" onClick={onClick}>
          <span className="floatedButton__icon" name="floatedButton__icon">
            +
          </span>
        </button>

        <ul className="floated__list">
          <h3 className="floated__list__header">Say Hello!</h3>

          {currentUID &&
            messages.map(({ message, uid, photoURL, docId }) => (
              <ChatMessage
                message={message}
                uid={uid}
                key={docId}
                photoURL={photoURL}
                currentUID={currentUID}
              />
            ))}

          {/* <li className="floated__list__item">
            <a
              target="_blank"
              href="https://twitter.com/explore"
              className="social__link"
              rel="noreferrer"
            >
              <span className="icon-twitter-squared" />
              Share on twitter
            </a>
          </li>
          <li className="floated__list__item">
            <a
              target="_blank"
              href="https://www.facebook.com"
              className="social__link"
              rel="noreferrer"
            >
              <span className="icon-facebook-squared" />
              Share on facebook
            </a>
          </li> */}
          <form className="floated__form" onSubmit={onSubmit}>
            {/* <input
              type="text"
              className="floated__form__input"
              onChange={onChange}
              value={messages}
            /> */}
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
        </ul>
      </div>
    </>
  );
};

function ChatMessage({ message, uid, photoURL, currentUID }) {
  const messageClass = uid !== currentUID ? 'sent' : 'received';
  return (
    <>
      <div className={`floated__list__item ${messageClass}`}>
        <div className={`floated__list__message ${messageClass}`}>
          <span className="floated__list__userMessage">{message}</span>
          <img src={photoURL} alt="userPhoto" />
        </div>
      </div>
    </>
  );
}

// function ChatMessage(props) {
//   // const { uid, message, photoURL } = props.message;
//   const userUID = props.user.uid;

//   const messageClass = uid === userUID ? 'sent' : 'received';
//   return (
//     <>
//       <div className="message">
//         <div className={`message ${messageClass}`}>
//           <div className={`userMessage ${messageClass}`}>{message}</div>
//           <img src={photoURL} alt="userPhoto" />
//         </div>
//       </div>
//     </>
//   );
// }

export default FloatedButton;
