import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import { useAuthState } from 'react-firebase-hooks/auth';
import ConfigBoard from '../ConfigBoard';
import * as boardActions from '../../redux/actions/boardActions';
import { auth } from '../../firebase-config';
import GameBoard from '../../components/GameBoard';
import * as userActions from '../../redux/actions/userActions';
import LogIn from '../utils/loginUitls';

const $ = window.jQuery;
let unsubscribe = null;
const HomePage = ({
  user,
  board,
  piece,
  mode,
  changeBoard,
  changePiece,
  changeMode,
  loginUser,
  defaultBoardSettings,
}) => {
  const [authUser] = useAuthState(auth);

  useEffect(() => {
    unsubscribe = LogIn(authUser, user, loginUser);
    defaultBoardSettings();

    return () => unsubscribe && unsubscribe();
  }, [authUser]);

  useEffect(() => {
    updateConfig();
  }, [board, piece]);

  const updateConfig = () => {
    const config = {
      pieceTheme: `${process.env.PUBLIC_URL}/img/chesspieces/${piece}/{piece}.png`,
      position: 'start',
    };
    // eslint-disable-next-line no-unused-vars
    const chessBoard = Chessboard('board', config);

    const $board = $('.chessboard-63f37');
    const squares = $('.square-55d63');

    if (board === 'wooden') {
      $board.addClass('woodenBoard');
      squares.addClass('transparent');
    } else if (board === 'classic') {
      $board.removeClass('woodenBoard');
      squares.removeClass('transparent');
    }

    $(window).resize(chessBoard.resize);
  };
  return (
    <>
      <div className="page__wrapper">
        <GameBoard />
        <ConfigBoard
          board={board}
          piece={piece}
          mode={mode}
          changeBoard={changeBoard}
          changePiece={changePiece}
          changeMode={changeMode}
        />
      </div>
    </>
  );
};

function mapStateToProps(state) {
  const { boardInfo } = state;
  const { user } = state;

  return {
    board: boardInfo.board,
    piece: boardInfo.piece,
    mode: boardInfo.mode,
    user,
  };
}

const mapDispatchToProps = {
  changeBoard: boardActions.changeBoard,
  changePiece: boardActions.changePiece,
  changeMode: boardActions.changeMode,
  loginUser: userActions.loginUser,
  defaultBoardSettings: boardActions.defaultBoardSettings,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
