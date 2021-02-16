import React from 'react';
import Navbar from '../../components/Navbar';
import OnlineGame from '../../components/OnlineGame';
import ScoreBoard from '../../components/ScoreBoard';
import './index.scss';

const OnlineGamePage = () => {
  return (
    <>
      <Navbar />
      <div className="homePage__wrapper">
        <OnlineGame />
        <ScoreBoard isOnline />
      </div>
    </>
  );
};

export default OnlineGamePage;
