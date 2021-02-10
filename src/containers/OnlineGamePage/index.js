import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import OnlineGame from '../../components/OnlineGame';
import ComputerGame from '../../components/ComputerGame';
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
