import React from 'react';
import PropTypes from 'prop-types';

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

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubmitButton;
