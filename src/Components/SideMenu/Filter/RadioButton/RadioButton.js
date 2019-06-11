import React from 'react';

import styles from './RadioButton.module.css';

const RadioButton = (props) => {
    return (
        <>
             <label htmlFor={props.htmlFor} className={styles.container}>{props.filter}
            <input 
                disabled={props.disabledStatus}
                onChange={props.radioButtonHandler}
                type='radio'
                name={props.name} 
                id={props.id}
                value={props.value} 
                checked={props.checked}/>
                <span className={styles.checkmark}></span>
            </label>
        </>
    )
}

export default RadioButton;
