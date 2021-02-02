import React, { useEffect } from 'react';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';

// import Chess from 'chess.js/chess';
import { connect } from 'react-redux';
import * as boardActions from '../../redux/actions/boardActions';

import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.css';
import './InitialGame.scss';

const $ = window.jQuery;

const InitialGame = ({ board, piece, mode }) => {
  console.log(board);
  useEffect(() => {
    updateConfig();
  }, [board, piece, mode]);

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

    $(window).resize(board.resize);
  };

  return (
    <>
      <div className="game">
        <div className="userInformations">
          <span className="playerName">Guest 123</span>
          <span className="points">(500)</span>
        </div>
        <div id="board" className="board" />
        <div className="userInformations">
          <span className="playerName">Guest 123</span>
          <span className="points">(500)</span>
        </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialGame);
