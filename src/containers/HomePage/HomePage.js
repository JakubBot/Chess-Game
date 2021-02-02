import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import InitialGame from '../../components/InitialGame/InitialGame';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import './HomePage.scss';

const HomePage = () => {
  const [state, setState] = useState({
    board: 'wooden',
    piece: 'neo_wood',
    mode: 'computer',
  });
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="wrapper">
          <InitialGame piece={state.piece} />

          <ScoreBoard state={state} setState={setState} />
        </div>
      </div>
    </>
  );
};
export default HomePage;
