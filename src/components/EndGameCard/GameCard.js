import React from 'react';

const defaultIMG =
  'https://betacssjs.chesscomfiles.com/bundles/web/images/white_400.09ae248e.png';

const GameCard = ({
  status,
  photo = defaultIMG,
  points,
  isSignedIn,
  deleteCard,
}) => {
  return (
    <>
      <div
        className={`endGameCard ${
          status === 'You won' ? 'greenBackgrond' : 'greyBackground'
        }`}
      >
        <div className="endGameCard__close">
          <button
            className="endGameCard__close__button"
            type="button"
            onClick={deleteCard}
          >
            ✘
          </button>
        </div>
        <div className="wrapper">
          <h3 className="wrapper__header">{status}</h3>
          <div className="wrapper__images">
            <img
              src={photo}
              alt="userImage"
              className={`wrapper__image ${
                status === 'You won' ? 'win__border' : 'lose__border'
              }`}
            />
            <img
              src={defaultIMG}
              alt="userImage"
              className={`wrapper__image ${
                status === 'You lost' ? 'win__border' : 'lose__border'
              }`}
            />
          </div>
          <div className="wrapper__rating">
            <h3 className="wrapper__rating__header">Rating</h3>
            <div className="wrapper__rating__points">
              <span className="wrapper__rating__point">{points}</span>
              {isSignedIn ? (
                status === 'You won' ? (
                  <span className="wrapper__rating__win">+8</span>
                ) : (
                  <span className="wrapper__rating__lose">-8</span>
                )
              ) : (
                <span className="wrapper__rating__unranked">Unranked</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;
