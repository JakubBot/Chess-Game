import React, { useEffect, useRef } from 'react';
import Chess from 'chess.js/chess';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import { connect } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import GameBoard from '../OnlineGame/GameBoard';
import { auth, firestore } from '../../firebase-config';
import { minimaxRoot } from '../utils/gameUtils/computerGameUtils';
import {
  removeDotSquares,
  dotSquare,
  onMouseoutSquare,
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
const ComputerGame = ({ boardType, user, piece, loginUser, updateMoves }) => {
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
    function makeEngineMove() {
      const bestMove = minimaxRoot(game, maxDepth, true);
      game.move(bestMove);
      board.position(game.fen());
      updateStatus();
    }

    function onDragStart(source, piece) {
      const img = $(`img[src$="${piece}.png"]`);
      img.addClass('z-index');
      if (game.game_over()) {
        return false;
      }
      return true;
    }

    function onDrop(source, target, piece) {
      const img = $(`img[data-piece="${piece}"]`);
      img.removeClass('z-index');
      const move = game.move({
        from: source,
        to: target,
        promotion: 'q',
      });
      if (move === null) {
        return 'snapback';
      }
      removeDotSquares();
      updateStatus();
      window.setTimeout(makeEngineMove, 1000);
      updateMoves({
        from: source,
        to: target,
      });
    }

    function onSnapEnd() {
      songRef.current.play();

      board.position(game.fen());
    }

    function updateStatus() {
      let status = '';
      let moveColor = 'White';
      if (game.turn() === 'b') {
        moveColor = 'Black';
      }
      if (game.in_checkmate()) {
        status = `Game over, ${moveColor} is in checkmate.`;
      } else if (game.in_draw()) {
        status = 'Game over, drawn position';
      } else {
        status = `${moveColor} to move`;
        // check?
        if (game.in_check()) {
          status += `, ${moveColor} is in check`;
        }
      }
    }

    function onMouseoverSquare(square) {
      if (game.turn() === 'w') {
        const moves = game.moves({
          square,
          verbose: true,
        });
        if (moves.length === 0) return;

        for (let i = 0; i < moves.length; i += 1) {
          dotSquare(moves[i].to);
        }
      }
    }

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
};

export default connect(mapStateToProps, mapDispatchToProps)(ComputerGame);
