import React from 'react';

const Task = () => (
  <div className="task">
    <input className="task__input" type="checkbox" id="task" />
    <label className="task__label" htmlFor="task">
      Try a new recipe
    </label>
  </div>
);

export default Task;