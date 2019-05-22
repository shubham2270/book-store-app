import React, { Component } from 'react';
import './BaseCSS/reset.css';
import './App.css';

import BookCard from './Components/BookCard/BookCard';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from './Components/Button/Button';

class App extends Component {

  
  state = {
    keyword: 'javascript',
    currentKeyword: ''
  }

  inputValueHandler = (value) => {
    this.setState({currentKeyword: value})
  }

  bookSearchHandler = () => {
    this.setState({keyword: this.state.currentKeyword})
    console.log('test')
  }

  render() {
    return (
      <div className="App">
      <h1>Book Store</h1>
      <div className="searchbar">
         <SearchBar 
          inputValueHandler={this.inputValueHandler}/>
         <Button 
           bookSearchHandler={this.bookSearchHandler}
         />
      </div>
      <main className="book_card_wrapper">
          <BookCard 
            bookSearchHandler={this.bookSearchHandler}
            keyword={this.state.keyword}
            bookInfo={this.state.bookInfo}
            isLoding={this.state.isLoding}
            inputValue={this.inputValueHandler}/>
      </main>
      </div>
    );
  }
}

export default App;
