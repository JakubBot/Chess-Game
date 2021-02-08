import React from 'react';
import Navbar from '../../components/Navbar';
import Game from '../../components/Game';
import './index.scss';

const GamePage = () => {
  return (
    <>
      <Navbar />
      <div className="gamePage__wrapper">
        <Game />
      </div>
    </>
  );
};

export default GamePage;
