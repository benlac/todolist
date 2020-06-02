// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import Form from 'src/components/Form';
import Tasks from 'src/components/Tasks';
import Aside from 'src/components/Aside';
import Counter from 'src/components/Counter';

// == Import
import './app.scss';

// == Composant
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  state = {
    valueForm: '',
    tasks: [],
  };

  changeValue = (newValue) => {
    this.setState({
      valueForm: newValue,
    });
  }

  submitTask = () => {
    const { tasks, valueForm } = this.state;
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment
      tasks: [...tasks,
        {
          id: tasks.length,
          content: valueForm,
          done: false,
        }],
      valueForm: '',
    });
  }

  updateTask = (id, newValue) => {
    const { tasks } = this.state;

    const taskUpdated = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: newValue,
        };
      }
      return task;
    });

    this.setState({
      tasks: taskUpdated,
    });
  }

  render() {
    const { valueForm, tasks } = this.state;

    const taskInProgress = tasks.filter((task) => !task.done).length;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Form value={valueForm} newValue={this.changeValue} submitTask={this.submitTask} />
          <Tasks tasks={tasks} setDone={this.updateTask} />
        </div>
        <Aside />
        <Counter numberTasks={taskInProgress} />
      </div>
    );
  }
}

// const App = () => (
//   <div className="app">
//     <Header />
//     <div className="container">
//       <Form />
//       <Tasks />
//     </div>
//     <Aside />
//     <Counter />
//   </div>
// );

// == Export
export default App;
