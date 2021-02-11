import React from 'react';
import Navbar from '../../components/Navbar';
import InitialGame from '../../components/InitialGame';
import ConfigBoard from '../../components/ConfigBoard';
import './index.scss';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="homePage__wrapper">
        <InitialGame />

        <ConfigBoard />
      </div>
    </>
  );
};
export default HomePage;
