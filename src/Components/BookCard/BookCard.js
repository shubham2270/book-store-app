import React, { Component } from 'react';
import styles from './BookCard.module.css';
import naPicture from '../assets/Images/image-not-available-200x300.jpg';

import CardButton from './CardButton/CardButton';
class BookCard extends Component {

  state = {
    isLoding: true,
    bookInfo: null,
    key: 'AIzaSyBhFWwOwC28yxjVIVtjL-gYh4dhd65gXr0'
  }

  componentDidMount() {
    this.props.emptyDescription()

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.keyword}&orderBy=${this.props.sortBy}&key=${this.state.key}`)
      .then(res => res.json())
      .then(data => console.log(data));


    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.keyword}&orderBy=${this.props.sortBy}&printType=${this.props.printType}&key=${this.state.key}`)
      .then(res => res.json())
      .then(data => {
       const bookInfo = data.items.map((el, index) => {
         const {authors, publisher, publishedDate, subtitle, imageLinks, infoLink, description} = el.volumeInfo
           return(
             <div className={styles.bookCard} key={el.etag}>
           <h2>{el.volumeInfo.title}</h2>
           <img src={imageLinks === undefined ? naPicture : imageLinks.thumbnail } alt="book-cover" width="50%" className={styles.bookImg}/>
           <ul>
             <li><strong>Author:</strong> {authors}</li>
             <li><strong>Publisher:</strong>{publisher}</li>
             <li><strong>Published:</strong> {publishedDate}</li>
           </ul>

            { subtitle && <p className="description">{subtitle.substring(0, 100)}</p> }
           <div className={styles.button_wrapper}>
             <CardButton 
              buttonName='VISIT' 
              infoLink={infoLink}/>
             <CardButton
              index={index} 
              buttonName='INFO' 
              showModel={this.props.showModelOnInfoClick} 
              desc={this.props.descriptionHandler(description)}/>

        
           </div>
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
    if (this.props.keyword !== prevProps.keyword || this.props.sortBy !== prevProps.sortBy || this.props.printType !== prevProps.printType
        || this.props.description !== prevProps.description
      ) {
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