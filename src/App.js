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
    currentDescription: '',
    googleBookLinks: [],
    currentLink: '',
    bookTitle: [],
    currentTitle: ''
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
   this.setState({currentDescription: currDec, currentLink: currLink, currentTitle: currTitle })
  }

  hideModelWindow = () => {
    this.setState({modelToggle: 'none'})
  }

  descriptionHandler = (desc) => {
   let description = [...this.state.description]
   description.push(desc)
    this.setState({description: description})
  }

  googleBookLinkHandler = (link) => {
    let links = [...this.state.googleBookLinks]
    links.push(link)
    this.setState({googleBookLinks: links})
  }

  bookTitleHandler = (title) => {
    let bookTitle = [...this.state.bookTitle]
    bookTitle.push(title)
    this.setState({bookTitle: bookTitle})
  }

  //Resets the description and google book link to empty when any thing changes in state 
  emptyDescription = () => {
    this.setState({description: [], googleBookLinks: [], bookTitle: []})
  }

  render() {
    return (
      <div className="App">
      <Backdrop
        bookTitle={this.state.currentTitle[0]}
        infoLink={this.state.currentLink[0]}
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
        <span>
          <div className="searchbar">
             <SearchBar inputValueHandler={this.inputValueHandler}  
             searchOnPressingEnter={this.searchOnPressingEnter}/>
             <Button bookSearchHandler={this.bookSearchHandler} btnName='Search'/>
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
                printType={this.state.print}
                sortBy={this.state.sort}
                bookSearchHandler={this.bookSearchHandler}
                keyword={this.state.keyword}
                // bookInfo={this.state.bookInfo}
                // isLoding={this.state.isLoding}
                inputValue={this.inputValueHandler}/>
          </main>
         <div className='pagination_wrapper'>
            <Button btnName='1'/>
            <Button btnName='2'/>
            <Button btnName='3'/>
         </div>
        </span>
     </div>
      </div>
    );
  }
}

export default App;
