import React, { useEffect } from 'react';
import Chess from 'chess.js/chess';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import { minimaxRoot } from '../utils/computerGameUtils';

import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.css';

let board = null;
const game = new Chess();
const maxDepth = 2;
const ComputerGame = () => {
  useEffect(() => {
    // is greater than the least value so far (beta).

    // evaluates the board for the minimax function

    // returns piece value

    /*
    ================================================================================================================
    Game Mechanics, State Handling, Integration
    ================================================================================================================
    */

    // makes engine move
    function makeEngineMove() {
      const bestMove = minimaxRoot(game, maxDepth, true);
      game.move(bestMove);
      board.position(game.fen());
      updateStatus();
    }

    // fires when a piece is picked up
    function onDragStart() {
      // only pick up pieces while the game isn't over
      if (game.game_over()) {
        return false;
      }
      return true;
    }

    // fires when a piece is dropped
    function onDrop(source, target) {
      // checks if the move is legal
      const move = game.move({
        from: source,
        to: target,
        promotion: 'q', // NOTE: auto promote queen
      });
      if (move === null) {
        return 'snapback';
      }
      updateStatus();
      window.setTimeout(makeEngineMove, 250);
    }

    // update the board position after the piece snap
    // for castling, en passant, pawn promotion
    function onSnapEnd() {
      board.position(game.fen());
    }

    // manages the status
    function updateStatus() {
      let status = '';
      let moveColor = 'White';
      if (game.turn() === 'b') {
        moveColor = 'Black';
      }
      // checkmate?
      if (game.in_checkmate()) {
        status = `Game over, ${moveColor} is in checkmate.`;
      }
      // draw?
      else if (game.in_draw()) {
        status = 'Game over, drawn position';
      }
      // game still on
      else {
        status = `${moveColor} to move`;
        // check?
        if (game.in_check()) {
          status += `, ${moveColor} is in check`;
        }
      }
    }

    // configuration for chessboard.js
    const config = {
      pieceTheme: `${process.env.PUBLIC_URL}/img/chesspieces/neo_wood/{piece}.png`,

      draggable: true,
      position: 'start',
      onDragStart,
      onDrop,
      onSnapEnd,
    };

    // setting up board with config
    board = Chessboard('myBoard', config);
    updateStatus();
  });
  return (
    <>
      <div id="myBoard" className="myBoard" style={{ width: 400 }} />
    </>
  );
};

export default ComputerGame;
