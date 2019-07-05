import React from 'react';
import Filter from './Filter/Filter';
import RadioButton from './Filter/RadioButton/RadioButton';

import styles from './SideMenu.module.css';

const SideMenu = (props) => {
    return ( 
            <div className={styles.side_wrapper}>
               <Filter filterType='SORT BY:'/>
               <RadioButton
                    disabledStatus={props.disabledStatus}
                    htmlFor='relevance'
                    filter='Relevance'
                    radioButtonHandler={props.sortRadioButtonHandler}
                    name='sort' 
                    id='relevance'
                    value='relevance' 
                    checked={props.sortChecked}
                />
                <RadioButton 
                    disabledStatus={props.disabledStatus}
                    htmlFor='newest'
                    filter='Newest'
                    radioButtonHandler={props.sortRadioButtonHandler}
                    name='sort' 
                    id='newest'
                    value='newest' 
                />
               <Filter filterType='PRINT TYPE:'/>
               <RadioButton 
                    disabledStatus={props.disabledStatus}
                    htmlFor='all'
                    filter='All'
                    radioButtonHandler={props.printRadioButtonHandler}
                    name='print' 
                    id='all'
                    value='all' 
                    checked={props.printChecked}
                />
               <RadioButton
                    disabledStatus={props.disabledStatus} 
                    htmlFor='books'
                    filter='Books'
                   radioButtonHandler={props.printRadioButtonHandler}
                    name='print' 
                    id='books'
                    value='books' 
                />
               <RadioButton
                    disabledStatus={props.disabledStatus} 
                    htmlFor='magazines'
                    filter='Magazines'
                    radioButtonHandler={props.printRadioButtonHandler}
                    name='print' 
                    id='magazines'
                    value='magazines' 
                />
                {/* <button
                    disabled={props.disabledStatus} 
                    className={styles.resetButton} 
                    onClick={props.resetFilters}>Reset Filters</button> */}
            </div>
    )
}

export default SideMenu;
