import React, { useEffect } from 'react';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import { connect } from 'react-redux';
import GameBoard from '../common/GameBoard';
import * as boardActions from '../../redux/actions/boardActions';
import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.css';
import './index.scss';

const $ = window.jQuery;

const InitialGame = ({ board, piece }) => {
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
      <GameBoard />
    </>
  );
};

function mapStateToProps(state) {
  const { boardInfo } = state;
  return {
    board: boardInfo.board,
    piece: boardInfo.piece,
  };
}
const mapDispatchToProps = {
  changeBoard: boardActions.changeBoard,
  changePiece: boardActions.changePiece,
  changeMode: boardActions.changeMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialGame);
