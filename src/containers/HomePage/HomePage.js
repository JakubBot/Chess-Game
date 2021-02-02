import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import InitialGame from '../../components/InitialGame/InitialGame';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="wrapper">
          <InitialGame />

          <ScoreBoard />
        </div>
      </div>
    </>
  );
};
export default HomePage;
