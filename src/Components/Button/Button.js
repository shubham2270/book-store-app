import React from 'react'

import './Button.module.css';

const Button = (props) => {
  return (
    <div>
      <button type="button" onClick={props.bookSearchHandler}>Search</button>
    </div>
  )
}

export default Button;
