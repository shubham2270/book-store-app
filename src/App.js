import React, { Component } from 'react';
import './BaseCSS/reset.css';
import './App.css';

import BookCard from './Components/BookCard/BookCard';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from './Components/Button/Button';
import NavBar from './Components/NavBar/NavBar';
import SideMenu from './Components/SideMenu/SideMenu';
import Backdrop from './Components/Backdrop/Backdrop';
import Login from './Components/LoginForm/Login/Login';
import Register from './Components/LoginForm/Register/Register';
import PaginationButton from './Components/PaginationButton/PaginationButton';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  state = {
    keyword: '',
    currentKeyword: '',
    sort: 'relevance',
    print: 'all',
    modelToggle: 'none',
    description: [],
    currentDescription: '',
    googleBookLinks: [],
    currentLink: '',
    bookTitle: [],
    currentTitle: '',
    startItemIndex: 0,
    maxItems: 8,
    activePaginationBtn: '0',
    disabledStatus: true
  }


  inputValueHandler = (value) => {
    this.setState({ currentKeyword: value })
  }

  //Displays the search result on clicking search button or pressing enter
  bookSearchHandler = () => {
    this.setState({ keyword: this.state.currentKeyword })
  }

  // Performs search on clicking enter key
  searchOnPressingEnter = (event) => {
    if (event.keyCode === 13) {
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
  // Resets the filters to default on clicking Reset filter button 
  resetFilters = () => {
    this.setState({ sort: 'relevance', print: 'all' })
    console.log('worked!');
  }

  // Displays the model on clicking info button and filters and store the description of clicked info
  showModelOnInfoClick = (index) => {
    this.setState({ modelToggle: 'flex' })
    this.descriptionHandler()

    // Filters the description and google book link of clicked info
    let currDec = this.state.description.filter((el, i) => {
      return i === index
    }
    )
    let currLink = this.state.googleBookLinks.filter((el, i) => {
      return i === index
    }
    )
    let currTitle = this.state.bookTitle.filter((el, i) => {
      return i === index
    })
    this.setState({ currentDescription: currDec, currentLink: currLink, currentTitle: currTitle })
  }

  hideModelWindow = () => {
    this.setState({ modelToggle: 'none' })
  }

  //Handles the description, link and title for model window
  descriptionHandler = (desc) => {
    let description = [...this.state.description]
    description.push(desc)
    this.setState({ description: description })
  }
  googleBookLinkHandler = (link) => {
    let links = [...this.state.googleBookLinks]
    links.push(link)
    this.setState({ googleBookLinks: links })
  }
  bookTitleHandler = (title) => {
    let bookTitle = [...this.state.bookTitle]
    bookTitle.push(title)
    this.setState({ bookTitle: bookTitle })
  }
  //Resets the description and google book link to empty when any thing changes in state 
  emptyDescription = () => {
    this.setState({ description: [], googleBookLinks: [], bookTitle: [], disabledStatus: false })
  }

  // Sets the starting index for item for pagination
  paginationHandler = (e, pageNumber) => {
    switch (pageNumber) {
      case '1':
        this.setState({ startItemIndex: 8 })
        break;
      case '2':
        this.setState({ startItemIndex: 16 })
        break;
      case '3':
        this.setState({ startItemIndex: 24 })
        break;
      case '4':
        this.setState({ startItemIndex: 32 })
        break;
      case '5':
        this.setState({ startItemIndex: 40 })
        break;
      case '6':
        this.setState({ startItemIndex: 48 })
        break;
      default:
        this.setState({ startItemIndex: 0 })
    }
    this.setState({ activePaginationBtn: pageNumber })
  }

   Home = () => (
     <>
    <Backdrop
    bookTitle={this.state.currentTitle[0]}
    infoLink={this.state.currentLink[0]}
    description={this.state.currentDescription}
    modelToggle={this.state.modelToggle}
    hideModel={this.hideModelWindow} />
 
  <div className="main_wrapper">
    
    <span>
      <div className="searchbar">
        <SearchBar inputValueHandler={this.inputValueHandler}
          searchOnPressingEnter={this.searchOnPressingEnter} />
        <Button bookSearchHandler={this.bookSearchHandler} btnName='Search' />
      </div>
      <main className="book_card_wrapper">
        <BookCard
          bookTitleHandler={this.bookTitleHandler}
          // bookInfo={this.bookMetaInfo}
          emptyDescription={this.emptyDescription}
          cardCounterHandler={this.cardCounterHandler}
          googleBookLinkHandler={this.googleBookLinkHandler}
          descriptionHandler={this.descriptionHandler}
          showModelOnInfoClick={this.showModelOnInfoClick}
          bookSearchHandler={this.bookSearchHandler}
          inputValue={this.inputValueHandler}
          printType={this.state.print}
          sortBy={this.state.sort}
          keyword={this.state.keyword}
          startItemIndex={this.state.startItemIndex}
          maxItems={this.state.maxItems}
        />
      </main>
     
      <div className='pagination_wrapper'>
        <PaginationButton pageBtnName='0' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
        <PaginationButton pageBtnName='1' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
        <PaginationButton pageBtnName='2' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
        <PaginationButton pageBtnName='3' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
        <PaginationButton pageBtnName='4' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
        <PaginationButton pageBtnName='5' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
        <PaginationButton pageBtnName='6' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
      </div>
    </span>
  </div>
  </>
   )

  render() {
    return (
      
      <Router>
        <div className="App"> 
        <NavBar />
      <div className='main_wrapper'>
        <SideMenu
            disabledStatus={this.state.disabledStatus}
            sortChecked={this.state.sort === "relevance"}
            printChecked={this.state.print === "all"}
            resetFilters={this.resetFilters}
            sortRadioButtonHandler={this.sortRadioButtonHandler}
            printRadioButtonHandler={this.printRadioButtonHandler}
          />
      </div>
        
          <Route path="/" exact component={this.Home}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
