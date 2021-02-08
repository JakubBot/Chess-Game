import React from 'react';
import Navbar from '../../components/Navbar';
import Game from '../../components/Game';
import './index.scss';

const GamePage = (props) => {
  const { token } = props.match.params;
  return (
    <>
      <Navbar />
      <div className="gamePage__wrapper">
        <Game token={token} />
      </div>
    </>
  );
};

export default GamePage;
