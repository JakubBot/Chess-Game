import React from 'react';
import './index.scss';

const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <span className="loader">
          <span className="loader-inner" />
        </span>
      </div>
    </>
  );
};

export default Spinner;
