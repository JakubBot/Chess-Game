import React from 'react';
import './index.scss';

const BoardMoves = ({ moves }) => {
  return (
    <>
      <ul className="moves">
        {[...moves].reverse().map((move) => {
          return (
            <li className="moves__item" key={move.id}>
              <span>{move.whiteSan}</span>
              <span>{move.blackSan}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default BoardMoves;
