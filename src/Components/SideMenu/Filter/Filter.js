import React from 'react';

import styles from './Filter.module.css';

const Filter = (props) => {
    return (
        <div className={styles.filter_wrapper}>
            <h3>{props.filterType}</h3>
            
    
        </div>
    )
}

export default Filter;
