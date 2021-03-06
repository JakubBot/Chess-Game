/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { domain } from '../../utils/gameUtils/onlineGameUtils';
import { winLoseStatus } from '../../utils/gameUtils/commonGameUtils';
import GameBoard from './GameBoard';

const $ = window.jQuery;
const Game = ({
  moveSongRef,
  checkSongRef,
  p1_token,
  p2_token,
  links,
  userName,
  points,
  token,
  timeLeft,
  playerNum,
  isGameEnded,
  changeSite,
  updateLocalStorage,
  turn,
}) => {
  useEffect(() => {
    let localStorageUser = localStorage.getItem('user');
    const status = winLoseStatus(playerNum, timeLeft, turn);
    if (localStorageUser !== null) {
      localStorageUser = JSON.parse(localStorageUser);
      if (isGameEnded && localStorageUser) {
        status === 'You won'
          ? updateLocalStorage(localStorageUser?.points + 8)
          : updateLocalStorage(localStorageUser?.points - 8);
      }
    }
  }, [isGameEnded]);
  const adress = {
    firstPlayer: `${domain()}/play/online/${p1_token}`,
    secondPlayer: `${domain()}/play/online/${p2_token}`,
  };

  const removeLink = () => {
    $('.links').css('display', 'none');
  };

  const convertTime = (time = 300) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleBackToHome = () => {
    changeSite('/');
  };

  return (
    <>
      <GameBoard
        whiteTime={convertTime(timeLeft?.whiteTime)}
        blackTime={convertTime(timeLeft?.blackTime)}
        playerNum={playerNum}
        adress={adress}
        removeLink={removeLink}
        moveSongRef={moveSongRef}
        checkSongRef={checkSongRef}
        links={links}
        userName={userName}
        points={points}
        isGameEnded={isGameEnded}
        onBackToHome={handleBackToHome}
        token={token}
      />
    </>
  );
};

GameBoard.propTypes = {
  moveSongRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  checkSongRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  links: PropTypes.bool,
  userName: PropTypes.string,
  points: PropTypes.number,
  token: PropTypes.string,
  playerNum: PropTypes.number,
  isGameEnded: PropTypes.bool,
  p1_token: PropTypes.string,
  p2_token: PropTypes.string,
  timeLeft: PropTypes.shape({
    whiteTime: PropTypes.number,
    blackTime: PropTypes.number,
    isGameActive: PropTypes.bool,
  }),
  changeSite: PropTypes.func,
  updateLocalStorage: PropTypes.func,
  turn: PropTypes.string,
};

export default Game;
