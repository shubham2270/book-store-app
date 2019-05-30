import React from 'react';
import Filter from './Filter/Filter';

import styles from './SideMenu.module.css';

const SideMenu = (props) => {
    return (
        <div className={styles.side_wrapper}>
           <Filter 
                filterType='SORT BY:'
                filter1='Relevance'
                filter2='Newest'
                name="sort" 
                id="relevance" 
                value="relevance" 
               checked={props.checked}
               sortRadioButtonHandler={props.sortRadioButtonHandler}
           />
           <Filter 
                filterType='PRINT TYPE:'
                filter1='All'
                filter2='Books'
                name="printType" 
                id="all" 
                value="all" 
               checked={props.checked}
               sortRadioButtonHandler={props.sortRadioButtonHandler}
           />
           <Filter 
                filterType='SORT BY:'
                filter1='Relevance'
                filter2='Newest'
                name="sort" 
                id="relevance" 
                value="relevance" 
               checked={props.checked}
               sortRadioButtonHandler={props.sortRadioButtonHandler}
           />
        </div>
    )
}

export default SideMenu;
