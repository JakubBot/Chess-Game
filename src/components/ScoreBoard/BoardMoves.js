import React from 'react';

import './BoardMoves.scss';

const BoardMoves = ({ moves }) => {
  return (
    <>
      <ul className="moves">
        {moves.map((move, index) => {
          return (
            <li className="moves__item" key={move}>
              <span>{index + 1}</span>
              <span>{move.from}</span>
              <span>{move.to}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BoardMoves;
