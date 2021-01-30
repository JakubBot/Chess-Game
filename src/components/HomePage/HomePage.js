import React from 'react';
import Navbar from '../common/Navbar';
import EmptyGame from './InitialGame';
import ScoreBoard from './ScoreBoard';
import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="wrapper">
          <EmptyGame />

          <ScoreBoard />
        </div>
      </div>
    </>
  );
};
export default HomePage;
