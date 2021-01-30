import React, { useEffect, useState } from 'react';

import './ScoreBoard.scss';

const $ = window.jQuery;

const ScoreBoard = () => {
  const [state, setState] = useState({
    board: 'wooden',
  });

  const changeBoard = ({ target }) => {
    const buttons = $('.scoreBoard__options__btn');
    const activeButton = target;
    buttons.removeClass('scoreBoard__options__btn--active');
    $(activeButton).addClass('scoreBoard__options__btn--active');

    setState({
      ...state,
      board: target.name,
    });
  };

  return (
    <>
      <div className="scoreBoard">
        <div className="scoreBoard__wrapper">
          <div className="scoreBoard__header flex-c">
            <span>Play Chess</span>
          </div>
          <div className="scoreBoard__config">
            <div className="scoreBoard__config__board">
              <div className="board__header">
                <span>Your Board</span>
              </div>
              <div className="scoreBoard__options">
                <button
                  type="button"
                  name="wooden"
                  className="scoreBoard__options__btn scoreBoard__options__btn--active"
                  onClick={changeBoard}
                >
                  Wooden
                </button>
                <button
                  type="button"
                  name="classic"
                  className="scoreBoard__options__btn"
                  onClick={changeBoard}
                >
                  Classic
                </button>
              </div>
            </div>
            <div className="scoreBoard__config__pieces">
              <div className="pieces__header">
                <span>Your Pieces</span>
              </div>
              <div className="pieces__options">
                <button type="button">Alpha</button>
                <button type="button">USCF</button>
                <button type="button">Classic</button>
              </div>
            </div>
            <div className="mode">
              <div className="pieces__header">
                <span>Mode</span>
              </div>
              <div className="pieces__options">
                <button type="button">against computer</button>
                <button type="button">with friend</button>
              </div>
            </div>
            <div className="findGame">
              <button type="button" className="findGame__button">
                Find a game
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
