import React from 'react';

import styles from './CardButton.module.css';

const CardButton = (props) => {
    return (
        <div>
            <a 
                index={props.index}
                href={props.infoLink} 
                onClick={() => props.showModel(props.index)} 
                className={styles.button} 
                target='_blank' rel="noopener noreferrer">{props.buttonName}</a>
        </div>
    )
}

export default CardButton;
