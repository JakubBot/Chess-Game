import React from 'react';
import { withRouter } from 'react-router-dom';
import { generateID } from '../utils/utils';
import { firestore } from '../../firebase-config';
import ConfigForm from '../../components/ConfigForm';

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

export default withRouter(ConfigBoard);
