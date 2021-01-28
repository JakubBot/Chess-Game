import React, { useEffect } from 'react';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import Chess from 'chess.js/chess';

import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.css';
import './initialGame.scss';

const $ = window.jQuery;

const InitialGame = () => {
  useEffect(() => {
    const config = {
      pieceTheme: `${process.env.PUBLIC_URL}/img/chesspieces/wikipedia/{piece}.png`,
      position: 'start',
    };
    const board = Chessboard('board', config);

    const $board = $('.chessboard-63f37');
    $board.addClass('woodenBoard');

    $(window).resize(board.resize);
  }, []);
  return (
    <>
      <div className="game">
        <div className="userInformations">
          <span className="playerName">Guest 123</span>
          <span className="points">(500)</span>
        </div>
        <div id="board" className="board" />
        <div className="userInformations">
          <span className="playerName">Guest 123</span>
          <span className="points">(500)</span>
        </div>
      </div>
    </>
  );
};

export default InitialGame;
