import React, { Component } from 'react';
import './BaseCSS/reset.css';
import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Backdrop from './Components/Backdrop/Backdrop';
import Login from './Components/LoginForm/Login/Login';
import Register from './Components/LoginForm/Register/Register';
import PaginationButton from './Components/PaginationButton/PaginationButton';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


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
    disabledStatus: true,
    isSignedIn: false,
    route: 'login',
    user: {
      id: '',
      name: '',
      email: '',
      joined: ''
    }
  }

  //update user info to state
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined
      }
    })
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

  // Change the login status for displaying home or login screen
  onRouteChange = (status) => {
    if (status === 'home') {
      this.setState({ isSignedIn: true })
    } else {
      this.setState({ isSignedIn: false })
    }
    this.setState({ route: status })
  }

  Home = () => (
    <>
      <div className='pagination_wrapper'>
        <PaginationButton pageBtnName='0' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
        <PaginationButton pageBtnName='1' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
        <PaginationButton pageBtnName='2' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
        <PaginationButton pageBtnName='3' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
        <PaginationButton pageBtnName='4' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
        <PaginationButton pageBtnName='5' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
        <PaginationButton pageBtnName='6' paginationHandler={this.paginationHandler} activeButton={this.state.activePaginationBtn} />
      </div>
    </>
  )




  render() {
    return (
      <Router>
        <div className="App">
          <NavBar onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
          {this.state.route === 'login'
            ? <>
              <Redirect to='/login' />
              <Route path="/login" render={() => (
                <Login onRouteChange={this.onRouteChange} />
              )} />
            </>
            : (this.state.route === 'register')
              ? <>
                <Redirect to='/register' />
                <Route path="/register" render={() => (
                  <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
                )} />
              </>

              : <>
                <Redirect to='/' />
                <Backdrop
                  bookTitle={this.state.currentTitle[0]}
                  infoLink={this.state.currentLink[0]}
                  description={this.state.currentDescription}
                  modelToggle={this.state.modelToggle}
                  hideModel={this.hideModelWindow} />
                <HomePage
                  disabledStatus={this.state.disabledStatus}
                  sortChecked={this.state.sort === "relevance"}
                  printChecked={this.state.print === "all"}
                  resetFilters={this.resetFilters}
                  sortRadioButtonHandler={this.sortRadioButtonHandler}
                  printRadioButtonHandler={this.printRadioButtonHandler}
                  inputValueHandler={this.inputValueHandler}
                  searchOnPressingEnter={this.searchOnPressingEnter}
                  onClick={this.bookSearchHandler}
                  btnName='Search'
                  bookTitleHandler={this.bookTitleHandler}
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
                <Route path="/" exact component={this.Home} />
              </>
          }
        </div>
      </Router>
    );
  }
}

export default App;
