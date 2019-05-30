import React from 'react';

import styles from './Filter.module.css';

const Filter = (props) => {
    return (
        <div className={styles.filter_wrapper}>
            <h3>{props.filterType}</h3>
            <label htmlFor="relevance" className={styles.container}>{props.filter1}
            <input 
                onChange={props.sortRadioButtonHandler}
                type='radio'
                name={props.name} 
                id={props.id}
                value={props.value} 
                checked={props.checked}/>
                <span className={styles.checkmark}></span>
            </label>

            <label htmlFor="newest" className={styles.container}>{props.filter2}
            <input 
                onChange={props.sortRadioButtonHandler}
                type='radio'
                name={props.name} 
                value={props.value} 
                id={props.id}/>
                 <span className={styles.checkmark}></span>
            </label>
        </div>
    )
}

export default Filter;
