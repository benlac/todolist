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
const App = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Form />
      <Tasks />
    </div>
    <Aside />
    <Counter />
  </div>
);

// == Export
export default App;
