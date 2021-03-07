import React, { useEffect, useRef, useState } from 'react';
import Chess from 'chess.js/chess';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import { connect } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import ScoreBoard from '../../components/ScoreBoard';
import Game from '../../components/common/Game';
import { auth } from '../../firebase-config';
import { minimaxRoot } from '../../components/utils/gameUtils/computerGameUtils';
import {
  removeDotSquares,
  allowMove,
  makeDots,
  statusText,
  isMyTurn,
} from '../../components/utils/gameUtils/commonGameUtils';
import { generateID } from '../../components/utils';
import * as userActions from '../../redux/actions/userActions';
import * as boardActions from '../../redux/actions/boardActions';
import EndGameCard from '../../components/EndGameCard';

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
  updateUserPoints,
}) => {
  const [authUser] = useAuthState(auth);
  const [gameMove, setGameMove] = useState({
    whiteSan: '',
    blackSan: '',
    id: null,
    index: 0,
  });
  const [timeLeft, setTimeLeft] = useState({
    whiteTime: 300,
    blackTime: 300,
    isGameActive: false,
  });
  const [isGameEndByTime, setIsGameEndByTime] = useState(false);
  const songRef = useRef(null);

  useEffect(() => {
    if (authUser !== null && user === null) {
      unsubscribe = loginUserWithSocials(authUser);
    }
    if (authUser === null && user === null) {
      loginUserWithForm();
    }
    return () => unsubscribe && unsubscribe();
  }, [authUser]);

  useEffect(() => {
    setTimeLeft((prevState) => ({
      ...prevState,
      isGameActive: false,
    }));
  }, [game.game_over(), isGameEndByTime]);

  useEffect(() => {
    let timer = null;
    if (timeLeft.isGameActive) {
      timer = setInterval(() => {
        updateTimeLeft();
      }, 1000);
    }
    if (timeLeft.whiteTime <= 0 || timeLeft.blackTime <= 0) {
      clearInterval(timer);
      setIsGameEndByTime(true);
    }
    return () => clearInterval(timer);
  }, [timeLeft.isGameActive, timeLeft]);

  function updateTimeLeft() {
    if (game.turn() === 'w') {
      setTimeLeft((prevState) => ({
        ...prevState,
        whiteTime: prevState.whiteTime - 1,
      }));
    } else {
      setTimeLeft((prevState) => ({
        ...prevState,
        blackTime: prevState.blackTime - 1,
      }));
    }
  }

  useEffect(() => {
    if (!gameMove) return;
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
        blackSan: move?.san,
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

      window.setTimeout(makeEngineMove, 200);

      setGameMove((prevState) => ({
        ...prevState,
        whiteSan: move?.san,
        index: prevState.index + 1,
      }));
      setTimeLeft((prevState) => ({
        ...prevState,
        isGameActive: true,
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

  return (
    <>
      <div className="page__wrapper">
        {(game.game_over() || isGameEndByTime) && (
          <EndGameCard
            timeLeft={timeLeft}
            turn={game.turn()}
            user={user}
            updateUserPoints={updateUserPoints}
          />
        )}
        <Game
          timeLeft={timeLeft}
          songRef={songRef}
          links={false}
          playerNum={1}
        />
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
