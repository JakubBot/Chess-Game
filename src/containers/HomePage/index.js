import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import { useAuthState } from 'react-firebase-hooks/auth';
import ConfigBoard from '../../components/ConfigBoard';
import * as boardActions from '../../redux/actions/boardActions';
import { auth } from '../../firebase-config';
import Game from '../../components/common/Game';
import * as userActions from '../../redux/actions/userActions';

const $ = window.jQuery;
const HomePage = ({
  user,
  board,
  piece,
  mode,
  changeBoard,
  changePiece,
  changeMode,
  defaultBoardSettings,
  loginUserWithSocials,
  loginUserWithForm,
}) => {
  const [authUser] = useAuthState(auth);
  useEffect(() => {
    if (authUser !== null && user === null) {
      loginUserWithSocials(authUser);
    }
    if (authUser === null && user === null) {
      loginUserWithForm();
    }
  }, [authUser]);

  useEffect(() => {
    updateConfig();
  }, [board, piece]);
  useEffect(() => {
    defaultBoardSettings();
  }, []);
  const updateConfig = () => {
    const config = {
      pieceTheme: `${process.env.PUBLIC_URL}/img/chesspieces/${piece}/{piece}.png`,
      position: 'start',
    };

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
        <Game userName={user?.userName} points={user?.points} />
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
  defaultBoardSettings: boardActions.defaultBoardSettings,
  loginUserWithSocials: userActions.loginUserWithSocials,
  loginUserWithForm: userActions.loginUserWithForm,
};

HomePage.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string,
    photo: PropTypes.string,
    uid: PropTypes.string,
    points: PropTypes.number,
  }),
  board: PropTypes.string.isRequired,
  piece: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  changeBoard: PropTypes.func.isRequired,
  changePiece: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  defaultBoardSettings: PropTypes.func.isRequired,
  loginUserWithSocials: PropTypes.func.isRequired,
  loginUserWithForm: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
