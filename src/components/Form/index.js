import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ value, newValue }) => {
  const handleChange = (event) => {
    newValue(event.target.value);
  };

  return (
    <form className="form">
      <input
        type="text"
        className="form__input"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string.isRequired,
  newValue: PropTypes.func.isRequired,
};

export default Form;
