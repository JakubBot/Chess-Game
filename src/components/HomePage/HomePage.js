import React, { useEffect } from 'react';
import Navbar from '../common/Navbar';
import EmptyGame from './initialGame';
import './HomePage.scss';
import './initialGame.scss';

const $ = window.jQuery;

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />

      <div className="wrapper">
        <EmptyGame />
        <div className="scoreBoard">sssssss</div>
      </div>
    </div>
  );
};
export default HomePage;
