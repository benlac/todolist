import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ value, newValue, submitTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    submitTask();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form__input"
        value={value}
        onChange={(event) => {
          newValue(event.target.value);
        }}
      />
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string.isRequired,
  newValue: PropTypes.func.isRequired,
  submitTask: PropTypes.func.isRequired,
};

export default Form;
