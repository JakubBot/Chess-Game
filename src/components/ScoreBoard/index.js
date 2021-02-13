import React from 'react';
import { connect } from 'react-redux';
import BoardMoves from './BoardMoves';
import LocalChat from '../LocalChat';
import './index.scss';

const ScoreBoard = ({ moves, statusText }) => {
  return (
    <>
      <div className="scoreBoard">
        <div className="scoreBoard__wrapper">
          <div className="scoreBoard__header flex-c">{statusText}</div>
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
            </div>
            <div className="scoreBoard__info__chat">
              <div className="scoreBoard__info__header">Chat</div>
              <div className="scoreBoard__info__options">
                <LocalChat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  const { moves, statusText } = state.boardInfo;
  return {
    moves,
    statusText,
  };
}

export default connect(mapStateToProps, null)(ScoreBoard);
