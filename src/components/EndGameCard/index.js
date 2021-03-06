import React from 'react';
import './index.scss';

const EndGameCard = ({ timeLeft, turn, playerNum = 1 }) => {
  function winLoseStatus() {
    if (playerNum === 1) {
      if (timeLeft.whiteTime === 0) {
        return 'You lost';
      }
      if (timeLeft.blackTime === 0) {
        return 'You won';
      }
    }
    if (playerNum === 2) {
      if (timeLeft.whiteTime === 0) {
        return 'You won';
      }
      if (timeLeft.blackTime === 0) {
        return 'You lost';
      }
    }
  }
  return (
    <>
      <div className="endGameCard">
        <div className="endGameCard__close">
          <div className="endGameCard__close__button">✘</div>
        </div>
        <div className="wrapper">
          <h3 className="wrapper__header">{winLoseStatus()}</h3>
          <div className="wrapper__images">
            <img
              src="https://betacssjs.chesscomfiles.com/bundles/web/images/white_400.09ae248e.png"
              alt="userImage"
              className={`wrapper__image ${
                timeLeft?.whiteTime === 0 ? 'lose__border' : 'win__border'
              }`}
            />
            <img
              src="https://betacssjs.chesscomfiles.com/bundles/web/images/white_400.09ae248e.png"
              alt="userImage"
              className={`wrapper__image ${
                timeLeft?.blackTime === 0 ? 'lose__border' : 'win__border'
              }`}
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
