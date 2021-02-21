import React, { useEffect, useRef } from 'react';
import Chess from 'chess.js/chess';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import { connect } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from '../../components/Navbar';
import ScoreBoard from '../ScoreBoard';
import Game from '../Game';
import { auth, firestore } from '../../firebase-config';
import { minimaxRoot } from '../utils/gameUtils/computerGameUtils';
import {
  removeDotSquares,
  allowMove,
  makeDots,
  statusText,
  isMyTurn,
} from '../utils/gameUtils/commonGameUtils';
import { generateID } from '../utils/utils';
import * as userActions from '../../redux/actions/userActions';
import * as boardActions from '../../redux/actions/boardActions';

const $ = window.jQuery;
let board = null;
const game = new Chess();
const maxDepth = 2;
let unsbscribe;

const ComputerGamePage = ({
  boardType,
  piece,
  loginUser,
  updateMoves,
  updateStatusText,
  moves,
  currentStatusText,
}) => {
  const [user] = useAuthState(auth);

  const songRef = useRef(null);

  useEffect(() => {
    if (!user) return;

    const userRef = firestore.collection('users').where('uid', '==', user.uid);

    unsbscribe = userRef.onSnapshot((docs) => {
      if (!docs.empty) {
        loginUser(docs);
      }
    });

    return () => {
      unsbscribe();
    };
  }, [user]);

  function updateStatus() {
    const statusGame = statusText(
      game.turn(),
      1,
      isMyTurn(1, game.turn()),
      game.in_draw(),
      game.in_check(),
      game.in_checkmate(),
      game.in_threefold_repetition(),
      game.insufficient_material(),
      game.in_stalemate()
    );
    updateStatusText(statusGame);
  }
  useEffect(() => {
    songRef.current.play();

    function makeEngineMove() {
      const bestMove = minimaxRoot(game, maxDepth, true);
      game.move(bestMove);
      board.position(game.fen());
      updateStatus();
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
        id: generateID(5),
      });
    }

    function onSnapEnd() {
      songRef.current.play();

      board.position(game.fen());
      updateStatus();
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
      <Navbar />
      <div className="page__wrapper">
        <Game songRef={songRef} links={false} />
        <ScoreBoard moves={moves} statusText={currentStatusText} />
      </div>
    </>
  );
};

function mapStateToProps(state) {
  const { piece, board, moves, statusText } = state.boardInfo;
  const { user } = state;
  return {
    piece,
    boardType: board,
    user,
    moves,
    currentStatusText: statusText,
  };
}

const mapDispatchToProps = {
  loginUser: userActions.loginUser,
  updateMoves: boardActions.updateMoves,
  updateStatusText: boardActions.updateStatusText,
  defaultBoardConfig: boardActions.defaultBoardConfig,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComputerGamePage);
