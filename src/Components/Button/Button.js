import React from 'react'

import styles from './Button.module.css';

const Button = (props) => {
  return (
    <div>
      <button 
        type="button" 
        // onClick={props.bookSearchHandler} 
        onClick={props.onClick} 
        className={styles.button} 
        style={props.padding}>{props.btnName}</button>
    </div>
  )
}

export default Button;
