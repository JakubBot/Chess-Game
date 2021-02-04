import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import InitialGame from '../../components/InitialGame/InitialGame';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="homePage__wrapper">
        <InitialGame />

        <ScoreBoard />
      </div>
    </>
  );
};
export default HomePage;
