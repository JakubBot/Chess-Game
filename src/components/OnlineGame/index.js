/* eslint-disable no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
import Chess from 'chess.js/chess';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';
import { firestore } from '../../firebase-config';

import {
  figurePlayer,
  statusText,
  Turn,
  isMyTurn,
  allowMove,
} from '../utils/onlineGameUtils';
import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.css';

import './index.scss';

const $ = window.jQuery;

const INITIAL_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
let unsubscribe = null;
let board = null;

function ChessGame({ boardType, piece, ...props }) {
  const [gameEngine] = useState(new Chess());
  const [state, setState] = useState({
    token: props.token,
  });
  const songRef = useRef(null);

  useEffect(() => {
    ListenForUpdates(state.token, (id, game) => {
      updateBoard(id, game);
      updateState(game);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const move = {
      from: state.moveFrom,
      to: state.moveTo,
      turn: gameEngine.turn(),
    };

    const $board = $('#board');
    const squareClass = 'square-55d63';

    if (move.turn === 'w') {
      removeHighlights('from');
      removeHighlights('to');
      $board.find(`.square-${move.from}`).addClass('highlight-from');
      $board.find(`.square-${move.to}`).addClass('highlight-to');
    } else {
      removeHighlights('from');
      removeHighlights('to');
      $board.find(`.square-${move.from}`).addClass('highlight-from');
      $board.find(`.square-${move.to}`).addClass('highlight-to');
    }

    function removeHighlights(color) {
      $board.find(`.${squareClass}`).removeClass(`highlight-${color}`);
    }
  }, [gameEngine, state]);

  // eslint-disable-next-line camelcase
  function updateState({ p1_token, p2_token, moveFrom, moveTo }) {
    const playerNum = figurePlayer(state.token, { p1_token, p2_token });
    setState({
      ...state,
      p1_token,
      p2_token,
      moveFrom,
      moveTo,
      turn: Turn(playerNum, isMyTurn(playerNum, gameEngine.turn())),
      statusText: statusText(
        gameEngine.in_draw(),
        gameEngine.in_check(),
        gameEngine.in_checkmate(),
        gameEngine.turn(),
        gameEngine.in_threefold_repetition(),
        gameEngine.insufficient_material(),
        gameEngine.in_stalemate()
      ),
    });
  }

  function updateBoard(id, game) {
    const engine = gameEngine;
    const playerNum = figurePlayer(state.token, game);
    engine.load(game.fen || INITIAL_FEN);

    if (!board) {
      board = initBoard(id, game);
      board.position(engine.fen());
    } else if (isMyTurn(playerNum, engine.turn())) {
      board.position(engine.fen());
    }
  }
  function initBoard(id, game) {
    const engine = gameEngine;
    const playerNum = figurePlayer(state.token, game);
    const config = {
      pieceTheme: `${process.env.PUBLIC_URL}/img/chesspieces/${piece}/{piece}.png`,
      draggable: true,
      position: 'start',
      onDragStart,
      onDrop,
      onSnapEnd,
      onMouseoutSquare,
      onMouseoverSquare,
    };
    board = Chessboard('board', config);
    if (playerNum === 2) {
      board.orientation('black');
    }

    const $board = $('.chessboard-63f37');
    const squares = $('.square-55d63');

    if (boardType === 'wooden') {
      $board.addClass('woodenBoard');
      squares.addClass('transparent');
    } else if (board === 'classic') {
      $board.removeClass('woodenBoard');
      squares.removeClass('transparent');
    }

    $(window).resize(board.resize);

    return board;

    function removeDotSquares() {
      $('#board .square-55d63').removeClass('square');
    }
    function dotSquare(square) {
      const $square = $(`#board .square-${square}`);

      $square.addClass('square');
    }
    function onMouseoutSquare() {
      removeDotSquares();
    }
    function onMouseoverSquare(square) {
      const canIMove = isMyTurn(playerNum, engine.turn());

      // get list of possible moves for this square
      if (canIMove) {
        const moves = gameEngine.moves({
          square,
          verbose: true,
        });
        // exit if there are no moves available for this square
        if (moves.length === 0) return;

        // highlight the possible squares for this piece
        for (let i = 0; i < moves.length; i += 1) {
          dotSquare(moves[i].to);
        }
      }
    }

    function onDragStart(source, piece) {
      const img = $(`img[src$="${piece}.png"]`);
      img.addClass('z-index');
      return (
        !engine.game_over() &&
        isMyTurn(playerNum, engine.turn()) &&
        allowMove(engine.turn(), piece)
      );
    }

    function onDrop(source, target, piece) {
      const img = $(`img[data-piece="${piece}"]`);
      img.removeClass('z-index');
      removeDotSquares();
      const move = gameEngine.move({
        from: source,
        to: target,
        promotion: 'q',
      });

      if (move === null) return 'snapback';

      const chessRef = firestore.collection('games').doc(id);
      chessRef.update({
        fen: engine.fen(),
        moveFrom: source,
        moveTo: target,
      });
    }
    function onSnapEnd() {
      songRef.current.play();
      return board.position(engine.fen());
    }
  }
  function ListenForUpdates(token, cb) {
    ['p1_token', 'p2_token'].forEach((name) => {
      const chessRef = firestore.collection('games').where(name, '==', token);
      unsubscribe = chessRef.onSnapshot((querySnapshot) => {
        if (querySnapshot.size) {
          const [data] = querySnapshot.docs.map((doc) => {
            return {
              data: doc.data(),
              id: doc.id,
            };
          });
          cb(data.id, data.data);
        }
      });
    });
  }

  return (
    <>
      <GameBoard
        songRef={songRef}
        p1_token={state.p1_token}
        p2_token={state.p2_token}
      />
    </>
  );
}
function mapStateToProps(state) {
  const { piece, board } = state.boardInfo;
  return {
    piece,
    boardType: board,
  };
}

export default connect(mapStateToProps, null)(ChessGame);
