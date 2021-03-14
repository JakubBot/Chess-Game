/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const GameBoard = ({
  songRef,
  links,
  adress,
  userName,
  points,
  whiteTime,
  blackTime,
  playerNum,
  removeLink,
  isGameEnded,
  onBackToHome,
}) => {
  return (
    <>
      <div className="game">
        {isGameEnded && (
          <button type="button" className="backToHome" onClick={onBackToHome}>
            Back to Home
          </button>
        )}

        <div className="userInformations">
          <div className="userWrapper">
            <span className="playerName">{userName ?? 'Guest 120'}</span>
            <span className="points">(500)</span>
          </div>
          <div className="timer">
            {playerNum === 1
              ? blackTime
              : playerNum === 2
              ? whiteTime
              : '5: 00'}
          </div>
        </div>
        <div id="board" className="board" />
        <div className="userInformations">
          <div className="userWrapper">
            <span className="playerName">{userName ?? 'Guest 152'}</span>
            <span className="points">{`(${points ?? 500})`}</span>
          </div>
          <div className="timer">
            {playerNum === 1
              ? whiteTime
              : playerNum === 2
              ? blackTime
              : '5: 00'}
          </div>
        </div>
        {links === true && (
          <div className="links">
            <h3 className="links__header">Second player Link</h3>
            <div className="links__link">
              <a target="_blank" rel="noreferrer" href={adress.secondPlayer}>
                {adress.secondPlayer}
              </a>
            </div>
            <div
              className="closeButton"
              role="button"
              tabIndex={0}
              onClick={removeLink}
            >
              X
            </div>
          </div>
        )}
      </div>

      <audio id="myAudio" ref={songRef}>
        <source
          src="https://images.chesscomfiles.com/chess-themes/sounds/_WEBM_/default/game-start.webm"
          type="audio/webm"
        />
        <source
          src="https://images.chesscomfiles.com/chess-themes/sounds/_OGG_/default/game-start.ogg"
          type="audio/ogg"
        />
        <source
          src="https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/game-start.mp3"
          type="audio/mpeg"
        />
        <source
          src="https://images.chesscomfiles.com/chess-themes/sounds/_WAV_/default/game-start.wav"
          type="audio/wav"
        />
      </audio>
    </>
  );
};

GameBoard.propTypes = {
  songRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  links: PropTypes.bool,
  adress: PropTypes.shape({
    firstPlayer: PropTypes.string,
    secondPlayer: PropTypes.string,
  }),
  userName: PropTypes.string,
  points: PropTypes.number,
  whiteTime: PropTypes.string.isRequired,
  blackTime: PropTypes.string.isRequired,
  playerNum: PropTypes.number,
  isGameEnded: PropTypes.bool,
  removeLink: PropTypes.func.isRequired,
  onBackToHome: PropTypes.func.isRequired,
};

// songRef, p1_token, p2_token, links, user
export default GameBoard;
