import React from 'react';

import styles from './PaginationButton.module.css';

const PaginationButton = (props) => {
    return (
        <div>
        <button 
            value={props.pageBtnName}
            className={props.activeButton === props.pageBtnName ? [styles.pageButton, styles.activeButton].join(' ') : styles.pageButton}
            onClick={(e) => props.paginationHandler(e, props.pageBtnName)}
            style={{backgroundColor: props.activeButton}}
            >{props.pageBtnName}</button> 
        </div>
    )
}

export default PaginationButton;
