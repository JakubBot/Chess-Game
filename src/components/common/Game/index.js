/* eslint-disable camelcase */
import React from 'react';
import { domain } from '../../utils/gameUtils/onlineGameUtils';
import GameBoard from './GameBoard';

const $ = window.jQuery;
const Game = ({
  songRef,
  p1_token,
  p2_token,
  links,
  user,
  timeLeft,
  playerNum,
}) => {
  const adress = {
    firstPlayer: `${domain()}/play/${p1_token}`,
    secondPlayer: `${domain()}/play/${p2_token}`,
  };
  const removeLink = () => {
    $('.links').css('display', 'none');
  };

  const convertTime = (time = 300) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <>
      <GameBoard
        whiteTime={convertTime(timeLeft?.whiteTime)}
        blackTime={convertTime(timeLeft?.blackTime)}
        playerNum={playerNum}
        adress={adress}
        removeLink={removeLink}
        songRef={songRef}
        links={links}
        user={user}
      />
    </>
  );
};

export default Game;
