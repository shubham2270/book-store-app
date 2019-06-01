import React, { Component } from 'react';
import './BaseCSS/reset.css';
import './App.css';

import BookCard from './Components/BookCard/BookCard';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from './Components/Button/Button';
import NavBar from './Components/NavBar/NavBar';
import SideMenu from './Components/SideMenu/SideMenu';

class App extends Component {
  state = {
    keyword: 'food',
    currentKeyword: '',
    sort: 'relevance',
    print: 'all'
  }

  inputValueHandler = (value) => {
    this.setState({currentKeyword: value})
  }

  bookSearchHandler = () => {
    this.setState({keyword: this.state.currentKeyword})
  }

  sortRadioButtonHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  printRadioButtonHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <NavBar />
     <div className="main_wrapper">
        <SideMenu 
          sortChecked={this.state.sort === "relevance"}
          printChecked={this.state.print === "all"}
          sortRadioButtonHandler={this.sortRadioButtonHandler}
          printRadioButtonHandler={this.printRadioButtonHandler}
        />
        <div>
          <div className="searchbar">
             <SearchBar inputValueHandler={this.inputValueHandler}/>
             <Button bookSearchHandler={this.bookSearchHandler} />
          </div>
          <main className="book_card_wrapper">
              <BookCard 
                printType={this.state.print}
                sortBy={this.state.sort}
                bookSearchHandler={this.bookSearchHandler}
                keyword={this.state.keyword}
                bookInfo={this.state.bookInfo}
                isLoding={this.state.isLoding}
                inputValue={this.inputValueHandler}/>
          </main>
        </div>
     </div>
      </div>
    );
  }
}

export default App;
