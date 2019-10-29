import React, { Component } from 'react';
import FruitList from './FruitList';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);

    // initalize the search value to an empty string
    this.state = {
      searchValue: ''
    }
  }

  handleSearchChange = (event) => {
    const textValue = event.target.value;

    this.setState({
      searchValue: textValue
    });
  }

  render() {
    return (
      <div>
        <h1>Fruits App</h1>
        <Search
          value={this.state.searchValue}
          onChange={this.handleSearchChange} />
        <FruitList fruits={this.props.fruits} />
      </div>
    );
  }
}

export default App;