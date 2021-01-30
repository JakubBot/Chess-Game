import React, { useEffect } from 'react';

import './ScoreBoard.scss';

const ScoreBoard = () => {
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
                <button className="scoreBoard__options__btn flex-c">Wooden</button>
                <button className="scoreBoard__options__btn">Classic</button>
              </div>
            </div>
            <div className="scoreBoard__config__pieces">
              <div className="pieces__header">
                <span>Your Pieces</span>
              </div>
              <div className="pieces__options">
                <button>Alpha</button>
                <button>USCF</button>
                <button>Classic</button>
              </div>
            </div>
            <div className="mode">
              <div className="pieces__header">
                <span>Mode</span>
              </div>
              <div className="pieces__options">
                <button>against computer</button>
                <button>with friend</button>
              </div>
            </div>
            <div className="findGame">
              <button className="findGame__button">Find a game</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
