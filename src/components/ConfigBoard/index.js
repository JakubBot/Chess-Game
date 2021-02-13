import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as boardActions from '../../redux/actions/boardActions';
import { generateID } from '../utils/utils';
import { firestore } from '../../firebase-config';
import ConfigForm from './ConfigForm';

import './ConfigForm.scss';

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
      p1_token: generateID(8),
      p2_token: generateID(8),
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
      <ConfigForm
        changeBoard={changeBoard}
        changePiece={changePiece}
        changeMode={changeMode}
        createGame={createGame}
      />
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