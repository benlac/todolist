import React from 'react';
import PropTypes from 'prop-types';

import './counter.scss';

const Counter = ({ numberTasks }) => (
  <div className="counter">
    <p className="counter__content">
      <span className="counter__number">{numberTasks} </span>
      {numberTasks > 1 ? 'Tâches' : 'Tâche'} en cours
    </p>
  </div>
);

Counter.propTypes = {
  numberTasks: PropTypes.number.isRequired,
};

export default Counter;
