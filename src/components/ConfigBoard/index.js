import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { generateID } from '../utils';
import { firestore } from '../../firebase-config';
import ConfigForm from './ConfigForm';

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
      moveIndex: 1,
      timeLeft: {
        whiteTime: 300,
        blackTime: 300,
      },
    };

    if (mode === 'online') {
      const gamesRef = firestore.collection('games');
      gamesRef
        .add(newGame)
        .then(() => history.push(`/play/online/${newGame.p1_token}`))
        .catch((err) => {
          throw err;
        });
    } else if (mode === 'computer') {
      history.push(`/play/computer`);
    }
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

ConfigForm.propTypes = {
  board: PropTypes.string,
  piece: PropTypes.string,
  mode: PropTypes.string,
  history: PropTypes.string,
  changeBoard: PropTypes.func.isRequired,
  changePiece: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
};
// PropTypes;
export default withRouter(ConfigBoard);
