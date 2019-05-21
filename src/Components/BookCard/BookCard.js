import React, { Component } from 'react';
import styles from './BookCard.module.css';

class BookCard extends Component {

  state = {
    isLoding: true,
    bookInfo: null,
    keyword: 'javascript',
  }

  keywordHandler = () => {
    // this.setState({keyword: this.props.inputValue})
    this.setState({keyword: 'jokes'})
  }

  componentDidMount() {
    this.keywordHandler()

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.keyword}`)
      .then(res => res.json())
      .then(data => console.log(data))


    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.keyword}`)
      .then(res => res.json())
      .then(data => {
       const bookInfo = data.items.map(el => {
         const {authors, publisher, publishedDate, subtitle, imageLinks} = el.volumeInfo
           return(
           
           <div className={styles.bookCard} key={el.id}>
           <h2>{el.volumeInfo.title}</h2>
           <img src={imageLinks.smallThumbnail} alt="book-cover" className={styles.bookImg}/>
           <ul>
             <li><strong>Author:</strong> {authors}</li>
             <li><strong>Publisher:</strong>{publisher}</li>
             <li><strong>Published:</strong> {publishedDate}</li>
           </ul>

            { subtitle && <p className="description">{subtitle.substring(0, 100)}</p> }
           
         </div>
         
         )
          // this.setState({bookImage:  el.volumeInfo.imageLinks.smallThumbnail})
        })
           this.setState({bookInfo: bookInfo, isLoding: false}) 
      })

  }

  

  searchInput = () => {
    this.componentDidMount()
  }

  searchHandler = () => {
    this.props.search(this.searchInput())
  }

 

  render() {
  
    return (
     this.state.isLoding ? <div>Loading...</div> :  this.state.bookInfo
    )
  }
  
}

export default BookCard;