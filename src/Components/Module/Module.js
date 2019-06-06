import React from 'react'

import styles from './Module.module.css';
import CardButton from '../BookCard/CardButton/CardButton';




const Module = (props) => {
        return (
            <div className={styles.module}>
                <h3 className={styles.bookTitle}>{props.bookTitle}</h3>
                <hr/>
                <p>{props.description[0] === undefined ? 'No Information provided by author, Please Visit Google Books by clicking below button for further information' : props.description}</p>
                <CardButton 
                    showModel={()=>{}} //Does nothing, just to overwrite function
                    buttonName='View on Google Books'
                    infoLink={props.infoLink}
                />
            </div>
        )
}

export default Module;
