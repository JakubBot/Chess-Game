/* eslint-disable camelcase */
import React from 'react';
import { domain } from '../utils/gameUtils/onlineGameUtils';

const GameBoard = ({ songRef, p1_token, p2_token, links, user }) => {
  const adress = {
    firstPlayer: `${domain()}/${p1_token}`,
    secondPlayer: `${domain()}/${p2_token}`,
  };
  return (
    <>
      <div className="game">
        <div className="userInformations">
          <div className="userWrapper">
            <span className="playerName">Guest 123</span>
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
      {links === true && (
        <div id="links">
          <h3>
            First player Link
            <a href={adress.firstPlayer}>{adress.firstPlayer}</a>
          </h3>
          <h3>
            Second player Link
            <a href={adress.secondPlayer}>{adress.secondPlayer}</a>
          </h3>
        </div>
      )}

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

export default GameBoard;
