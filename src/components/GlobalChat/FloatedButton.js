import React from 'react';
import './FloatedButton.scss';

const FloatedButton = ({ onClick }) => {
  return (
    <>
      <button type="button" className="floatedButton" onClick={onClick}>
        <span className="floatedButton__icon">+</span>
        <ul className="floatedButton__list">
          <li className="floatedButton__list__item">
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
          <li className="floatedButton__list__item">
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
          <li className="floatedButton__list__item">
            <a
              target="_blank"
              href="https://www.instagram.com/?hl=pl"
              className="social__link"
              rel="noreferrer"
            >
              <span className="icon-instagram" />
              Share on instagram
            </a>
          </li>
        </ul>
      </button>
    </>
  );
};

export default FloatedButton;
