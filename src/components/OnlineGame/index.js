/* eslint-disable no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
import Chess from 'chess.js/chess';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import { connect } from 'react-redux';
import GameBoard from '../common/GameBoard';
import { firestore } from '../../firebase-config';
import * as boardActions from '../../redux/actions/boardActions';
import {
  figurePlayer,
  statusText,
  Turn,
  isMyTurn,
} from '../utils/gameUtils/onlineGameUtils';
import {
  removeDotSquares,
  allowMove,
  makeDots,
} from '../utils/gameUtils/commonGameUtils';

import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.css';

import './index.scss';

const $ = window.jQuery;

const INITIAL_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
let unsubscribe = null;
let board = null;

function ChessGame({
  boardType,
  piece,
  user,
  updateMoves,
  updateStatusText,
  defaultBoardConfig,
  ...props
}) {
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
      defaultBoardConfig();
    };
  }, []);
  useEffect(() => {
    updateStatusText(state.statusText);
  }, [state.statusText]);
  // eslint-disable-next-line camelcase
  function updateState({ p1_token, p2_token, moveFrom, moveTo }) {
    const playerNum = figurePlayer(state.token, { p1_token, p2_token });
    setState((prevState) => ({
      ...prevState,
      p1_token,
      p2_token,
      moveFrom,
      moveTo,
      turn: Turn(playerNum, isMyTurn(playerNum, gameEngine.turn())),
      statusText: statusText(
        gameEngine.turn(),
        playerNum,
        isMyTurn(playerNum, gameEngine.turn()),
        gameEngine.in_draw(),
        gameEngine.in_check(),
        gameEngine.in_checkmate(),
        gameEngine.in_threefold_repetition(),
        gameEngine.insufficient_material(),
        gameEngine.in_stalemate()
      ),
    }));
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
      onMouseoutSquare: removeDotSquares,
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

    function onMouseoverSquare(square) {
      const canIMove = isMyTurn(playerNum, engine.turn());

      // get list of possible moves for this square

      if (canIMove) {
        makeDots(gameEngine, square);
      }
    }

    function onDragStart(square, piece) {
      makeDots(gameEngine, square);
      const img = $(`img[data-piece="${piece}"]`);
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
      updateMoves({
        from: source,
        to: target,
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
        links
        songRef={songRef}
        p1_token={state.p1_token}
        p2_token={state.p2_token}
        user={user}
      />
    </>
  );
}
function mapStateToProps(state) {
  const { piece, board } = state.boardInfo;
  return {
    piece,
    boardType: board,
    user: state.user ?? null,
  };
}

const mapDispatchToProps = {
  updateMoves: boardActions.updateMoves,
  updateStatusText: boardActions.updateStatusText,
  defaultBoardConfig: boardActions.defaultBoardConfig,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChessGame);
