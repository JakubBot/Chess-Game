import React from 'react';
import PropTypes from 'prop-types';
import './BoardMoves.scss';

const BoardMoves = ({ moves }) => {
  return (
    <>
      <ul className="moves">
        {[...moves].reverse().map((move) => {
          const { whiteSan, blackSan, moveIndex } = move;
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

BoardMoves.propTypes = {
  moves: PropTypes.arrayOf(
    PropTypes.shape({
      blackSan: PropTypes.string,
      whiteSan: PropTypes.string,
      id: PropTypes.string,
      index: PropTypes.number,
    })
  ),
};
export default BoardMoves;
