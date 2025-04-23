// Search.js
import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
    // Lift the state up to the parent
    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.searchTerm}
        onChange={this.onSearchChange}
        placeholder="Search..."
      />
    );
  }
}

export default Search;
