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
  };

  changeValue = (newValue) => {
    console.log(newValue);
    this.setState({
      valueForm: newValue,
    });
  }

  render() {
    const { valueForm } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Form value={valueForm} newValue={this.changeValue} />
          <Tasks />
        </div>
        <Aside />
        <Counter />
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
