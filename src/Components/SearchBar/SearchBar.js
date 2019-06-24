import React, { Component } from 'react'

import styles from './SearchBar.module.css';
import Button from '../Button/Button';

class SearchBar extends Component {

  handleInput = (e) => {
    this.props.inputValueHandler(e.target.value)
  }

  render() {
    return (
      <div className={styles.searchbar_wrapper}>
        <input
          onKeyDown={this.props.searchOnPressingEnter} 
          onChange={this.handleInput}
          type="text" 
          placeholder="Type author, book name, subject, keyword..." 
          className={styles.searchBar}/>
        <Button 
          onClick={this.props.onClick}
          btnName={this.props.btnName}
        />
      </div>
    )
  }
}

export default SearchBar;
 