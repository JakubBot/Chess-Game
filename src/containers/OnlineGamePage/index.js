import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import OnlineGame from '../../components/OnlineGame';
import ScoreBoard from '../../components/ScoreBoard';
import './index.scss';

const OnlineGamePage = ({ moves, statusText }) => {
  return (
    <>
      <Navbar />
      <div className="homePage__wrapper">
        <OnlineGame />
        <ScoreBoard isOnline moves={moves} statusText={statusText} />
      </div>
    </>
  );
};
function mapStateToProps(state) {
  const { moves, statusText } = state.boardInfo;
  return {
    moves,
    statusText,
  };
}

export default connect(mapStateToProps, null)(OnlineGamePage);
