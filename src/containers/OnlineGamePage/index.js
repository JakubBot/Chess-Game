import React from 'react';
import Navbar from '../../components/Navbar';
import OnlineGame from '../../components/OnlineGame';
import ScoreBoard from '../../components/ScoreBoard';
import './index.scss';

const GamePage = (props) => {
  const { token } = props.match.params;

  return (
    <>
      <Navbar />
      <div className="homePage__wrapper">
        <OnlineGame token={token} />
        <ScoreBoard />
      </div>
    </>
  );
};

export default GamePage;
