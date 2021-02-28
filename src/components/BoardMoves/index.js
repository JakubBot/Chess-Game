import React from 'react';
import './index.scss';

const BoardMoves = ({ moves }) => {
  return (
    <>
      <ul className="moves">
        {[...moves].reverse().map((move) => {
          const { whiteSan, blackSan, moveIndex } = move;
          // console.log(move);
          return (
            <li className="moves__item" key={move.id}>
              <span className="index">{moveIndex}</span>
              <span className="san">{whiteSan}</span>
              <span className="san">{blackSan}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default BoardMoves;
