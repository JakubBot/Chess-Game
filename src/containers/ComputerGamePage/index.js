import React from 'react';
import Navbar from '../../components/Navbar';
import ComputerGame from '../../components/ComputerGame';
import './index.scss';

const ComputerGamePage = () => {
  return (
    <>
      <Navbar />
      <div className="gamePage__wrapper">
        <ComputerGame />
      </div>
    </>
  );
};
export default ComputerGamePage;
