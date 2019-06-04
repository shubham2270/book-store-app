import React from 'react'

import styles from './Module.module.css';

const Module = (props) => {
    return (
        <div className={styles.module}>
            <p>{props.description}</p>
        </div>
    )
}

export default Module;
