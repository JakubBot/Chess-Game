import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TextInput = ({
  value,
  errors,
  name,
  labelText,
  placeHolder,
  onChange,
}) => {
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
        placeholder={placeHolder}
      />
      {errors && <span className="form__item__error">{errors}</span>}
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  errors: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default TextInput;
