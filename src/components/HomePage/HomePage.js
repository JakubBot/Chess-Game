import React, { useEffect } from 'react';
import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0';
import Chess from 'chess.js/chess';
import Navbar from '../common/Navbar'
import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.css';
import './HomePage.scss';

const $ = window.jQuery;

const HomePage = () => {
  useEffect(() => {
   


    // let config = {
    //   position: 'start',
    //   // pieceTheme: 'img/chesspieces/alpha/{piece}.png',
    // }
    // var board = Chessboard('board', config)
    // const $board = $('.chessboard-63f37');
    // $board.addClass('woodenBoard');
  }, [])

  return (
    <div className="container">
      <Navbar />


    {/* <div id="board"></div> */}
    </div>
  )
}
export default HomePage