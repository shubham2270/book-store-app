import React from 'react';

import styles from './PaginationButton.module.css';

const PaginationButton = (props) => {
    return (
        <div>
        <button 
            className={styles.pageButton} 
            onClick={() => props.paginationHandler(props.pageBtnName)}
            style={{backgroundColor: props.activeButton}}
            >{props.pageBtnName}</button> 
        </div>
    )
}

export default PaginationButton;
