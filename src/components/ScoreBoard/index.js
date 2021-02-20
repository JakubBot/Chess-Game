import React from 'react';
import BoardMoves from './BoardMoves';
import LocalChat from './LocalChat';
import './index.scss';

const ScoreBoard = ({ moves, statusText, isOnline }) => {
  return (
    <>
      <div className="scoreBoard">
        <div className="scoreBoard__wrapper">
          <div className="scoreBoard__header flex-c">
            {statusText === '' ? 'Your turn' : statusText}
          </div>
          <div className="scoreBoard__info">
            <div className="scoreBoard__info__moves">
              <div className="scoreBoard__info__header">Last Moves</div>
              <div className="scoreBoard__info__options">
                {moves.length === 0 ? (
                  <div className="dots">
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                  </div>
                ) : (
                  <BoardMoves moves={moves} />
                )}
              </div>
              {isOnline && <LocalChat />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
