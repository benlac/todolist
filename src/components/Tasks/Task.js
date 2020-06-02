import React from 'react';
import PropTypes from 'prop-types';

const Task = ({
  content,
  id,
  done,
  setDone,
}) => {
  const handleChange = (event) => {
    setDone(id, event.target.checked);
  };

  const classDone = done ? 'task__label task__label--done' : 'task__label';
  return (
    <div className="task">
      <input
        className="task__input"
        type="checkbox"
        id={`task-${id}`}
        checked={done}
        onChange={handleChange}
      />
      <label className={classDone} htmlFor={`task-${id}`}>
        {content}
      </label>
    </div>
  );
};

Task.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  setDone: PropTypes.func.isRequired,
};

export default Task;
