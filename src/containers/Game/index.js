/* eslint-disable camelcase */
import React from 'react';
import { domain } from '../utils/gameUtils/onlineGameUtils';
import GameBoard from '../../components/GameBoard';

const $ = window.jQuery;
const Game = ({ songRef, p1_token, p2_token, links, user }) => {
  const adress = {
    firstPlayer: `${domain()}/play/${p1_token}`,
    secondPlayer: `${domain()}/play/${p2_token}`,
  };
  const removeLink = () => {
    $('.links').css('display', 'none');
  };
  return (
    <>
      <GameBoard
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
