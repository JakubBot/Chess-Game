import React, { useState } from 'react';
import { connect } from 'react-redux';
import BoardMoves from './BoardMoves';
import * as boardActions from '../../redux/actions/boardActions';
import './index.scss';

const ScoreBoard = ({ moves, updateMoves }) => {
  return (
    <>
      <div className="scoreBoard">
        <div className="scoreBoard__wrapper">
          <div className="scoreBoard__header flex-c">Your turn</div>
          <div className="scoreBoard__info">
            <div className="scoreBoard__info__moves">
              <div className="scoreBoard__info__header">Moves</div>
              <div className="scoreBoard__info__options">
                <BoardMoves moves={moves} />
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

function mapStateToProps(state) {
  const { moves } = state.boardInfo;
  return {
    moves,
  };
}

export default connect(mapStateToProps, null)(ScoreBoard);
