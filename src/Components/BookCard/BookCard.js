import React, { Component } from 'react';
import styles from './BookCard.module.css';

class BookCard extends Component {

  state = {
    isLoding: true,
    bookInfo: null,
  }

  componentDidMount() {

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.keyword}&orderBy=${this.props.sortBy}`)
      .then(res => res.json())
      .then(data => console.log(data));


    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.keyword}&orderBy=${this.props.sortBy}`)
      .then(res => res.json())
      .then(data => {
       const bookInfo = data.items.map(el => {
         const {authors, publisher, publishedDate, subtitle, imageLinks} = el.volumeInfo
           return(
           
           <div className={styles.bookCard} key={el.id}>
           <h2>{el.volumeInfo.title}</h2>
           <img src={imageLinks.thumbnail} alt="book-cover" className={styles.bookImg}/>
           <ul>
             <li><strong>Author:</strong> {authors}</li>
             <li><strong>Publisher:</strong>{publisher}</li>
             <li><strong>Published:</strong> {publishedDate}</li>
           </ul>

            { subtitle && <p className="description">{subtitle.substring(0, 100)}</p> }
           
         </div>
         
         )
        })
           this.setState({bookInfo: bookInfo, isLoding: false}) 
      }).catch(err => {
           this.setState({bookInfo: 'Sorry no search result found! Please Try Again'}) 
           console.log(err)
      })

  }

  componentDidUpdate(prevProps) {
    if (this.props.keyword !== prevProps.keyword || this.props.sortBy !== prevProps.sortBy) {
      this.componentDidMount()
    }
   
  }


  render() {
    return (
     this.state.isLoding ? <div>Loading...</div> :  this.state.bookInfo
    )
  }
  
}

export default BookCard;