import React from 'react';

import styles from './InputField.module.css';

const InputField = (props) => {
    return (
        <div className={styles.wrapper}>
            <h5>{props.label}</h5>
            <input
                className={styles.input}
                type={props.type}
                onChange={props.inputChange}
            />
        </div>
    )
}


export default InputField;