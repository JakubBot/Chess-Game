import React, { useEffect, useRef, useState } from 'react';
import Chess from 'chess.js/chess';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import { connect } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import ScoreBoard from '../ScoreBoard';
import Game from '../Game';
import { auth } from '../../firebase-config';
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
import { canLogInWithSocials, canLoginWithForm } from '../utils/loginUitls';

const $ = window.jQuery;
let board = null;
const game = new Chess();
const maxDepth = 2;
let unsubscribe;

const ComputerGamePage = ({
  boardType,
  user,
  piece,
  updateMoves,
  updateStatusText,
  moves,
  currentStatusText,
  loginUserWithSocials,
  loginUserWithForm,
}) => {
  const [authUser] = useAuthState(auth);
  const [gameMove, setGameMove] = useState({
    whiteSan: '',
    blackSan: '',
    id: null,
    index: 0,
  });
  const songRef = useRef(null);

  useEffect(() => {
    unsubscribe = canLogInWithSocials(authUser, user, loginUserWithSocials);

    canLoginWithForm(authUser, user, loginUserWithForm);

    return () => unsubscribe && unsubscribe();
  }, [authUser]);

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
    const { whiteSan, blackSan, index } = gameMove;
    if (whiteSan !== '' || blackSan !== '') {
      updateMoves({
        whiteSan,
        blackSan,
        index,
        id: generateID(5),
      });
    }
    if (whiteSan !== '' && blackSan !== '') {
      setGameMove({
        ...gameMove,
        whiteSan: '',
        blackSan: '',
        id: null,
      });
    }
  }, [gameMove]);
  useEffect(() => {
    songRef.current.play();

    function makeEngineMove() {
      const { bestMove, move } = minimaxRoot(game, maxDepth, true);

      setGameMove((prevState) => ({
        ...prevState,
        blackSan: move.san,
      }));
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

      setGameMove((prevState) => ({
        ...prevState,
        whiteSan: move.san,
        index: prevState.index + 1,
      }));
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
  updateMoves: boardActions.updateMoves,
  updateStatusText: boardActions.updateStatusText,
  loginUserWithSocials: userActions.loginUserWithSocials,
  loginUserWithForm: userActions.loginUserWithForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComputerGamePage);
