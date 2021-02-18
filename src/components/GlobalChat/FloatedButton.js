import React from 'react';
import TextInput from '../common/TextInput';

import './FloatedButton.scss';

const FloatedButton = ({ formMessage, onClick, onChange, onSubmit }) => {
  return (
    <>
      <div className="floated">
        <button type="button" className="floatedButton" onClick={onClick}>
          <span className="floatedButton__icon" name="floatedButton__icon">
            +
          </span>
        </button>

        <ul className="floated__list">
          <h3 className="floated__list__header">Global Chat</h3>

          <li className="floated__list__item">
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
          </li>
          <form className="floated__form" onSubmit={onSubmit}>
            {/* <input
              type="text"
              className="floated__form__input"
              onChange={onChange}
              value={messages}
            /> */}
            <TextInput onChange={onChange} value={formMessage} />
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

export default FloatedButton;
