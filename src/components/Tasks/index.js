import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

import './tasks.scss';

const Tasks = ({ tasks, setDone }) => (
  <div className="tasks">
    {tasks.map((task) => (
      <Task {...task} key={task.id} setDone={setDone} />
    ))}
  </div>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  setDone: PropTypes.func.isRequired,
};

export default Tasks;
