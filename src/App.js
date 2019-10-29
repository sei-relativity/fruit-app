import React, { Component } from 'react';
import FruitList from './FruitList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Fruits App</h1>
        <FruitList />
      </div>
    );
  }
}

export default App;