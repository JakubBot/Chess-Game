import React from 'react';
import Navbar from '../../components/Navbar';
import ComputerGame from '../../components/ComputerGame';

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
