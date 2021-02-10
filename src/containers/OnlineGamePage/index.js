import React from 'react';
import Navbar from '../../components/Navbar';
import OnlineGame from '../../components/OnlineGame';
import './index.scss';

const GamePage = (props) => {
  const { token } = props.match.params;

  return (
    <>
      <Navbar />
      <div className="gamePage__wrapper">
        <OnlineGame token={token} />
      </div>
    </>
  );
};

export default GamePage;
