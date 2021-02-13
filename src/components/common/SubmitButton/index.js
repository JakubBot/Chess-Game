import React from 'react';

import './index.scss';

const SubmitButton = ({ text }) => {
  return (
    <>
      <button type="submit" className="form__button">
        <span>{text}</span>
      </button>
    </>
  );
};

export default SubmitButton;
