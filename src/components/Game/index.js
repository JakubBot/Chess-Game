/* eslint-disable no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import Chess from 'chess.js/chess';
import { firestore } from '../../firebase-config';
import {
  figurePlayer,
  statusText,
  Turn,
  isMyTurn,
  allowMove,
  domain,
} from '../utils/utils';

import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.css';
import './index.scss';

const $ = window.jQuery;

const INITIAL_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
let unsubscribe = null;
let board = null;

function ChessGame(props) {
  const [gameEngine] = useState(new Chess());
  const [state, setState] = useState({
    token: props.token,
  });
  const songRef = useRef(null);
  const gameRef = useRef(null);

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

    const $board = $('#myBoard');
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
    const { token } = state;
    const engine = gameEngine;
    const playerNum = figurePlayer(token, game);
    const config = {
      pieceTheme: 'img/chesspieces/alpha/{piece}.png',
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

    return board;

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
    function removeDotSquares() {
      $('#myBoard .square-55d63').removeClass('square');
    }
    function dotSquare(square) {
      const $square = $(`#myBoard .square-${square}`);

      $square.addClass('square');
    }

    function onDragStart(source, piece) {
      return (
        !engine.game_over() &&
        isMyTurn(playerNum, engine.turn()) &&
        allowMove(engine.turn(), piece)
      );
    }

    function onDrop(source, target) {
      removeDotSquares();
      const move = gameEngine.move({
        from: source,
        to: target,
        promotion: 'q',
      });

      if (move === null) return 'snapback';

      game = {
        ...game,
        fen: engine.fen(),
        moveFrom: source,
        moveTo: target,
      };

      const chessRef = firestore.collection('games').doc(id);
      chessRef.update(game);
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
  function changeBoard(type) {
    const board = $('.chessboard-63f37');
    if (type === 'wooden') {
      board.addClass('woodenBoard');
    }
    if (type === 'standard') {
      board.removeClass('woodenBoard');
    }
  }

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
        <div id="board" className="board" ref={gameRef} />
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

      {/* <div id="links">
        <h3>
          First player Link
          <a href={`${domain()}/${state.p1_token}`}>
            {' '}
            {`${domain()}/${state.p1_token}`}
          </a>
        </h3>
        <h3>
          Second player Link
          <a href={`${domain()}/${state.p2_token}`}>
            {' '}
            {`${domain()}/${state.p2_token}`}
          </a>
        </h3>
      </div> */}
      {/* <audio id="myAudio" ref={songRef}>
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
      </audio> */}
    </>
  );
}

export default ChessGame;
