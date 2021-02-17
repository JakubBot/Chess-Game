import React from 'react';
import FloatedButton from './FloatedButton';

const $ = window.jQuery;
const GlobalChat = () => {
  const handleClick = () => {
    $('.floatedButton').toggleClass('active');
  };
  return (
    <>
      <FloatedButton onClick={handleClick} />
    </>
  );
};

export default GlobalChat;
