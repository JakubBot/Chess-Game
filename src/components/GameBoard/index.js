/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const $ = window.jQuery;
const GameBoard = ({
  p1_token,
  p2_token,
  songRef,
  links,
  adress,
  removeLink,
  user,
}) => {
  return (
    <>
      <div className="game">
        <div className="userInformations">
          <div className="userWrapper">
            <span className="playerName">
              {user.userName ? user.userName : 'Guest 123'}
            </span>
            <span className="points">(500)</span>
          </div>
          <div className="timer">3: 00</div>
        </div>
        <div id="board" className="board" />
        <div className="userInformations">
          <div className="userWrapper">
            <span className="playerName">Guest 123</span>
            <span className="points">(500)</span>
          </div>
          <div className="timer">3: 00</div>
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

      {/* <div id="informations">
          {state.statusText === '' ? (
            <h1>{state.turn}</h1>
          ) : (
            <h1>{state.statusText}</h1>
          )}
          <h3>Chessbard Color</h3>
          <button type="button" onClick={() => changeBoard('standard')}>
            Standard
          </button>
          <button type="button" onClick={() => changeBoard('wooden')}>
            Wooden
          </button>
          <br />
        </div> */}

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

GameBoard.propType = {
  songRef: PropTypes.object.isRequired,
  p1_token: PropTypes.number.isRequired,
  p2_token: PropTypes.number.isRequired,
  links: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    points: PropTypes.number,
    userName: PropTypes.string,
    photo: PropTypes.string,
  }),
};

// songRef, p1_token, p2_token, links, user
export default GameBoard;
