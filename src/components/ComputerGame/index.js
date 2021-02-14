import React, { useEffect, useRef } from 'react';
import Chess from 'chess.js/chess';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import { connect } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import GameBoard from '../common/GameBoard';
import { auth, firestore } from '../../firebase-config';
import { minimaxRoot } from '../utils/gameUtils/computerGameUtils';
import {
  removeDotSquares,
  allowMove,
  makeDots,
} from '../utils/gameUtils/commonGameUtils';
import * as userActions from '../../redux/actions/userActions';
import * as boardActions from '../../redux/actions/boardActions';

import './index.scss';
import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.css';

const $ = window.jQuery;
let board = null;
const game = new Chess();
const maxDepth = 2;
let unsbscribe;
const ComputerGame = ({
  boardType,
  piece,
  loginUser,
  updateMoves,
  updateStatusText,
}) => {
  const [userInfo] = useAuthState(auth);

  const songRef = useRef(null);

  useEffect(() => {
    if (!userInfo) return;

    const userRef = firestore
      .collection('users')
      .where('uid', '==', userInfo.uid);

    unsbscribe = userRef.onSnapshot((docs) => {
      if (!docs.empty) {
        loginUser(docs);
      }
    });

    // eslint-disable-next-line consistent-return
    return () => unsbscribe && unsbscribe();
  }, [userInfo]);

  useEffect(() => {
    songRef.current.play();

    function makeEngineMove() {
      const bestMove = minimaxRoot(game, maxDepth, true);
      game.move(bestMove);
      board.position(game.fen());
      updateStatus('w');
    }

    function onDragStart(square, piece) {
      makeDots(game, square);

      return (
        !game.game_over() &&
        game.turn() === 'w' &&
        allowMove(game.turn(), piece)
      );
    }

    function onDrop(source, target) {
      removeDotSquares();

      const move = game.move({
        from: source,
        to: target,
        promotion: 'q',
      });
      if (move === null) {
        return 'snapback';
      }

      window.setTimeout(makeEngineMove, 800);
      updateMoves({
        from: source,
        to: target,
      });
    }

    function onSnapEnd() {
      songRef.current.play();

      board.position(game.fen());
      updateStatus('b');
    }

    function updateStatus(turn = 'w') {
      let status = '';
      const moveColor = turn === 'w' ? 'White' : 'Black';

      if (turn === 'w') {
        status = 'Your Turn';
      }
      if (turn === 'b') {
        status = "Opponents' Turn";
      }
      if (game.in_stalemate()) {
        status = 'draw by stalemate';
      }
      if (game.in_threefold_repetition()) {
        status = `draw by repetition`;
      }
      if (game.insufficient_material()) {
        status = 'draw by insufficient material';
      }
      if (game.in_draw()) {
        status = `draw position`;
      }
      if (game.in_checkmate()) {
        status = `${moveColor} in checkmate, gameover`;
      }
      if (game.in_check()) {
        status = `${moveColor} in check`;
      }
      updateStatusText(status);
    }

    function onMouseoverSquare(square) {
      makeDots(game, square);
    }

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

    $(window).resize(board.resize);

    const $board = $('.chessboard-63f37');
    const squares = $('.square-55d63');

    if (boardType === 'wooden') {
      $board.addClass('woodenBoard');
      squares.addClass('transparent');
    } else if (board === 'classic') {
      $board.removeClass('woodenBoard');
      squares.removeClass('transparent');
    }
    updateStatus();
  }, []);

  return (
    <>
      <GameBoard songRef={songRef} links={false} />
    </>
  );
};

function mapStateToProps(state) {
  const { piece, board } = state.boardInfo;
  const { user } = state;
  return {
    piece,
    boardType: board,
    user,
  };
}

const mapDispatchToProps = {
  loginUser: userActions.loginUser,
  updateMoves: boardActions.updateMoves,
  updateStatusText: boardActions.updateStatusText,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComputerGame);
