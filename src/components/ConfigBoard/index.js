import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as boardActions from '../../redux/actions/boardActions';
import { generateID } from '../utils/utils';
import { firestore } from '../../firebase-config';
import './index.scss';

const $ = window.jQuery;

const ConfigBoard = ({ board, piece, mode, history, ...props }) => {
  const changeBoard = ({ target }) => {
    const buttons = $('.board__btn');
    const activeButton = target;
    buttons.removeClass('configBoard__options__btn--active');
    $(activeButton).addClass('configBoard__options__btn--active');

    const board = target.name;
    props.changeBoard(board);
  };

  const changePiece = ({ target }) => {
    const buttons = $('.piece__btn');
    const activeButton = target;
    buttons.removeClass('configBoard__options__btn--active');
    $(activeButton).addClass('configBoard__options__btn--active');

    props.changePiece(target.name);
  };
  const changeMode = ({ target }) => {
    const buttons = $('.mode__btn');
    const activeButton = target;
    buttons.removeClass('configBoard__options__btn--active');
    $(activeButton).addClass('configBoard__options__btn--active');
    props.changeMode(target.name);
  };

  const createGame = () => {
    const newGame = {
      p1_token: generateID(),
      p2_token: generateID(),
    };
    const gamesRef = firestore.collection('games');
    gamesRef
      .add(newGame)
      .then(() => {
        if (mode === 'online') history.push(`./play/${newGame.p1_token}`);
        else if (mode === 'computer') history.push(`./play/computer`);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <div className="configBoard">
        <div className="configBoard__wrapper">
          <div className="configBoard__header flex-c">Play Chess</div>
          <div className="configBoard__config">
            <div className="configBoard__config__board">
              <div className="config__header">Your Board</div>
              <div className="configBoard__options">
                <button
                  type="button"
                  name="wooden"
                  className="configBoard__options__btn configBoard__options__btn--active board__btn"
                  onClick={changeBoard}
                >
                  Wooden
                </button>
                <button
                  type="button"
                  name="classic"
                  className="configBoard__options__btn board__btn"
                  onClick={changeBoard}
                >
                  Classic
                </button>
              </div>
            </div>
            <div className="configBoard__config__pieces">
              <div className="config__header">Your Pieces</div>
              <div className="configBoard__options">
                <button
                  type="button"
                  name="neo_wood"
                  className="configBoard__options__btn--small configBoard__options__btn--active piece__btn"
                  onClick={changePiece}
                >
                  Neo wood
                </button>
                <button
                  type="button"
                  name="alpha"
                  className="configBoard__options__btn configBoard__options__btn piece__btn"
                  onClick={changePiece}
                >
                  Alpha
                </button>
                <button
                  name="uscf"
                  onClick={changePiece}
                  type="button"
                  className="configBoard__options__btn piece__btn"
                >
                  USCF
                </button>
                <button
                  name="classic"
                  onClick={changePiece}
                  type="button"
                  className="configBoard__options__btn piece__btn"
                >
                  Classic
                </button>
              </div>
            </div>
            <div className="mode">
              <div className="config__header">Mode</div>
              <div className="configBoard__options">
                <button
                  onClick={changeMode}
                  type="button"
                  className="configBoard__options__btn--big configBoard__options__btn--active mode__btn"
                  name="computer"
                >
                  with computer
                </button>
                <button
                  onClick={changeMode}
                  type="button"
                  className="configBoard__options__btn--big mode__btn"
                  name="online"
                >
                  with friend
                </button>
              </div>
            </div>
            <div className="findGame flex-c">
              <button
                type="button"
                className="findGame__button"
                onClick={createGame}
              >
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
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ConfigBoard)
);
