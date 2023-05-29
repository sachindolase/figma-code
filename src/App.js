import logo from './logo.svg';
import './App.css';
import Nav from './common-components/Nav';
import React from 'react';
import Aboutcode from './common-components/Aboutcode';
import Quality from './common-components/Quality';
import Cost from './common-components/Cost';
import Test from './common-components/Test';
import Help from './common-components/Help';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Aboutcode />
        <Quality />
        <Cost />
        <Test />
        <Help />
      </header>
    </div>
  );
}

export default App;
