import React from 'react';
import Navbar from '../../components/Navbar';
import ComputerGame from '../../components/ComputerGame';
import ScoreBoard from '../../components/ScoreBoard';
import './index.scss';

const ComputerGamePage = () => {
  return (
    <>
      <Navbar />
      <div className="homePage__wrapper">
        <ComputerGame />
        <ScoreBoard />
      </div>
    </>
  );
};
export default ComputerGamePage;
