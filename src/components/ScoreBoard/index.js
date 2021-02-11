import React from 'react';
import BoardMoves from './BoardMoves';
import './index.scss';

const ScoreBoard = () => {
  return (
    <>
      <div className="scoreBoard">
        <div className="scoreBoard__wrapper">
          <div className="scoreBoard__header flex-c">Your turn</div>
          <div className="scoreBoard__info">
            <div className="scoreBoard__info__moves">
              <div className="scoreBoard__info__header">Moves</div>
              <div className="scoreBoard__info__options">
                <BoardMoves />
              </div>
            </div>
            <div className="scoreBoard__info__chat">
              <div className="scoreBoard__info__header">Chat</div>
              <div className="scoreBoard__info__options">
                <span>Czat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
