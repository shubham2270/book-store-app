import React, { Component } from 'react';
import './BaseCSS/reset.css';
import './App.css';

import BookCard from './Components/BookCard/BookCard';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from './Components/Button/Button';
import NavBar from './Components/NavBar/NavBar';
import SideMenu from './Components/SideMenu/SideMenu';
import Backdrop from './Components/Backdrop/Backdrop';


class App extends Component {
  state = {
    keyword: 'krishna',
    currentKeyword: '',
    sort: 'relevance',
    print: 'all',
    modelToggle: 'none',
    description: [],
    currentDescription: ''
  }

//Resets the description to empty when any thing changes in state 
  emptyDescription = () => {
    this.setState({description: []})
  }

  inputValueHandler = (value) => {
    this.setState({currentKeyword: value})
  }

  //Displays the search result on clicking search button or pressing enter
  bookSearchHandler = () => {
    this.setState({keyword: this.state.currentKeyword})
  }

  // Performs search on clicking enter key
  searchOnPressingEnter = (event) => {
    if(event.keyCode === 13) {
      this.bookSearchHandler()
    }
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

  // Displays the model on clicking info button and filters and store the description of clicked info
  showModelOnInfoClick = (index) => {
    this.setState({modelToggle: 'flex'})
    this.descriptionHandler()

    // Filters the description of clicked info
    let currDec = this.state.description.filter((el, i) => {
       return i === index
      }
    )
    this.setState({currentDescription: currDec})

  }

  hideModelWindow = () => {
    this.setState({modelToggle: 'none'})
  }

  descriptionHandler = (desc) => {
   let description = [...this.state.description]
   description.push(desc)
    this.setState({description: description})
  }



  render() {
    return (
      <div className="App">
      <Backdrop
        description={this.state.currentDescription} 
        modelToggle={this.state.modelToggle} 
        hideModel={this.hideModelWindow}/>
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
             <SearchBar inputValueHandler={this.inputValueHandler}  searchOnPressingEnter={this.searchOnPressingEnter}/>
             <Button bookSearchHandler={this.bookSearchHandler} />
          </div>
          <main className="book_card_wrapper">
              <BookCard
                emptyDescription={this.emptyDescription}
                cardCounterHandler={this.cardCounterHandler}
                descriptionHandler={this.descriptionHandler}
                showModelOnInfoClick={this.showModelOnInfoClick} 
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
