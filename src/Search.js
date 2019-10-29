import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <label>Search these Fruits: </label>
        <input type="text"
               onChange={this.props.onChange}
               value={this.props.value} />
      </div>
    );
  }
}

export default Search;