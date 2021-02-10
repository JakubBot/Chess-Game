import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import OnlineGame from '../../components/OnlineGame';
import ComputerGame from '../../components/ComputerGame';
import './index.scss';

const GamePage = ({ mode, ...props }) => {
  const { token } = props.match.params;

  return (
    <>
      <Navbar />
      <div className="gamePage__wrapper">
        {mode === 'computer' ? <ComputerGame /> : <OnlineGame token={token} />}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    mode: state.mode,
  };
}

export default connect(mapStateToProps, null)(GamePage);
