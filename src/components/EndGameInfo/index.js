import React from 'react';
import './index.scss';

const EndGameCard = () => {
  return (
    <>
      <div className="endGameCard">
        <div className="endGameCard__close">
          <div className="endGameCard__close__button">✘</div>
        </div>
        <div className="wrapper">
          <h3 className="wrapper__header">You won</h3>
          <div className="wrapper__images">
            <img
              src="https://betacssjs.chesscomfiles.com/bundles/web/images/white_400.09ae248e.png"
              className="wrapper__image"
              alt="userImage"
            />
            <img
              src="https://betacssjs.chesscomfiles.com/bundles/web/images/white_400.09ae248e.png"
              className="wrapper__image"
              alt="userImage"
            />
          </div>
          <div className="wrapper__rating">
            <h3 className="wrapper__rating__header">Rating</h3>
            <div className="wrapper__rating__points">
              <span className="wrapper__rating__point">1223</span>
              <span className="wrapper__rating__change">+8</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndGameCard;
