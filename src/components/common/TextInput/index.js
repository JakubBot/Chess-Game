import React from 'react';
import './index.scss';

const TextInput = ({ value, onChange, name, labelText }) => {
  return (
    <div className="form__item">
      <label className="form__item__header" htmlFor={name}>
        {labelText}
      </label>
      <input
        type="text"
        id={name}
        value={value}
        onChange={onChange}
        name={name}
        className="form__item__input"
      />
    </div>
  );
};

export default TextInput;
