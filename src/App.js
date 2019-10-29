import React, { Component } from 'react';
import FruitList from './FruitList';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);

    // initalize the search value to an empty string
    this.state = {
      searchValue: '',
      fruitsToDisplay: this.props.fruits
    }
  }

  handleSearchChange = (event) => {
    const textValue = event.target.value;

    const filteredFruitList = this.props.fruits.filter(function(fruit) {
      return fruit.toLowerCase().includes(textValue.toLowerCase());
    });

    this.setState({
      searchValue: textValue,
      fruitsToDisplay: filteredFruitList
    });
  }

  render() {
    return (
      <div>
        <h1>Fruits App</h1>
        <Search
          value={this.state.searchValue}
          onChange={this.handleSearchChange} />
        <FruitList fruits={this.state.fruitsToDisplay} />
      </div>
    );
  }
}

export default App;