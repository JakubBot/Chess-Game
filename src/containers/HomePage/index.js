import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from '../../components/Navbar';
import ConfigBoard from '../../components/ConfigBoard';
import * as boardActions from '../../redux/actions/boardActions';
import { firestore, auth } from '../../firebase-config';
import GameBoard from '../../components/common/GameBoard';
import * as userActions from '../../redux/actions/userActions';
import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.css';
import './index.scss';

const $ = window.jQuery;
let unsubscribe = null;
const HomePage = ({
  board,
  piece,
  mode,
  changeBoard,
  changePiece,
  changeMode,
  loginUser,
}) => {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) return;
    const userRef = firestore.collection('users').where('uid', '==', user.uid);

    unsubscribe = userRef.onSnapshot((docs) => {
      if (!docs.empty) {
        loginUser(docs);
      }
    });

    // eslint-disable-next-line consistent-return
    return () => unsubscribe && unsubscribe();
  }, [user]);

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
      <Navbar />
      <div className="homePage__wrapper">
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
  return {
    board: boardInfo.board,
    piece: boardInfo.piece,
    mode: boardInfo.mode,
  };
}

const mapDispatchToProps = {
  changeBoard: boardActions.changeBoard,
  changePiece: boardActions.changePiece,
  changeMode: boardActions.changeMode,
  loginUser: userActions.loginUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
