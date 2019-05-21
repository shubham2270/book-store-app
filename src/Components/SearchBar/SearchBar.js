import React, { Component } from 'react'

import styles from './SearchBar.module.css';

class SearchBar extends Component {

  handleInput = (e) => {
    this.props.inputValueHandler(e.target.value)
  }

  render() {
    return (
      <div>
        <input 
          onChange={this.handleInput}
          type="text" 
          placeholder="Type author, book name, subject, keyword..." 
          className={styles.searchBar}/>
      </div>
    )
  }
}

export default SearchBar;
