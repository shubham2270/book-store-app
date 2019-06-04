import React from 'react'

import styles from './Button.module.css';

const Button = (props) => {
  return (
    <div>
      <button type="button" onClick={props.bookSearchHandler} className={styles.button}>Search</button>
    </div>
  )
}

export default Button;
