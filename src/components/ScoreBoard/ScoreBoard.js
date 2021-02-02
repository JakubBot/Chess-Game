import React from 'react';
import { connect } from 'react-redux';
import * as boardActions from '../../redux/actions/boardActions';
import './ScoreBoard.scss';

const $ = window.jQuery;

const ScoreBoard = ({ board, piece, mode, ...props }) => {


  const changeBoard = ({ target }) => {
    const buttons = $('.board__btn');
    const activeButton = target;
    buttons.removeClass('scoreBoard__options__btn--active');
    $(activeButton).addClass('scoreBoard__options__btn--active');

    const board = target.name;
    props.changeBoard(board);
  };

  const changePiece = ({ target }) => {
    const buttons = $('.piece__btn');
    const activeButton = target;
    buttons.removeClass('scoreBoard__options__btn--active');
    $(activeButton).addClass('scoreBoard__options__btn--active');

    props.changePiece(target.name);
  };
  const changeMode = ({ target }) => {
    const buttons = $('.mode__btn');
    const activeButton = target;
    buttons.removeClass('scoreBoard__options__btn--active');
    $(activeButton).addClass('scoreBoard__options__btn--active');
    props.changeMode(target.name);
  };

  return (
    <>
      <div className="scoreBoard">
        <div className="scoreBoard__wrapper">
          <div className="scoreBoard__header flex-c">Play Chess</div>
          <div className="scoreBoard__config">
            <div className="scoreBoard__config__board">
              <div className="config__header">Your Board</div>
              <div className="scoreBoard__options">
                <button
                  type="button"
                  name="wooden"
                  className="scoreBoard__options__btn scoreBoard__options__btn--active board__btn"
                  onClick={changeBoard}
                >
                  Wooden
                </button>
                <button
                  type="button"
                  name="classic"
                  className="scoreBoard__options__btn board__btn"
                  onClick={changeBoard}
                >
                  Classic
                </button>
              </div>
            </div>
            <div className="scoreBoard__config__pieces">
              <div className="config__header">Your Pieces</div>
              <div className="scoreBoard__options">
                <button
                  type="button"
                  name="neo_wood"
                  className="scoreBoard__options__btn--small scoreBoard__options__btn--active piece__btn"
                  onClick={changePiece}
                >
                  Neo wood
                </button>
                <button
                  type="button"
                  name="alpha"
                  className="scoreBoard__options__btn scoreBoard__options__btn piece__btn"
                  onClick={changePiece}
                >
                  Alpha
                </button>
                <button
                  name="uscf"
                  onClick={changePiece}
                  type="button"
                  className="scoreBoard__options__btn piece__btn"
                >
                  USCF
                </button>
                <button
                  name="classic"
                  onClick={changePiece}
                  type="button"
                  className="scoreBoard__options__btn piece__btn"
                >
                  Classic
                </button>
              </div>
            </div>
            <div className="mode">
              <div className="config__header">Mode</div>
              <div className="scoreBoard__options">
                <button
                  onClick={changeMode}
                  type="button"
                  className="scoreBoard__options__btn--big scoreBoard__options__btn--active mode__btn"
                  name="computer"
                >
                  with computer
                </button>
                <button
                  onClick={changeMode}
                  type="button"
                  className="scoreBoard__options__btn--big mode__btn"
                  name="friend"
                >
                  with friend
                </button>
              </div>
            </div>
            <div className="findGame flex-c">
              <button type="button" className="findGame__button">
                Find game
              </button>
            </div>
          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
