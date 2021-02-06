import React from 'react';
import Navbar from '../../components/Navbar';
import InitialGame from '../../components/InitialGame';
import ScoreBoard from '../../components/ScoreBoard';
import './index.scss';

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
