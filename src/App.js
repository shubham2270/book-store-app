import React, { Component } from 'react';
import './BaseCSS/reset.css';
import './App.css';

import BookCard from './Components/BookCard/BookCard';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from './Components/Button/Button';

class App extends Component {


  inputValueHandler = (value) => {
      return value
  }

  searchHandler = () => {

  }

  render() {
    return (
      <div className="App">
      <h1>Book Store</h1>
      <div className="searchbar">
         <SearchBar inputValueHandler={this.inputValueHandler}/>
         <Button />
      </div>
      <main className="book_card_wrapper">
          <BookCard 
            search={this.searchHandler}
            inputValue={this.inputValueHandler}/>
      </main>
      </div>
    );
  }
}

export default App;
