import React from 'react';
import Filter from './Filter/Filter';
import RadioButton from './Filter/RadioButton/RadioButton';

import styles from './SideMenu.module.css';

const SideMenu = (props) => {
    return (
        <div className={styles.side_wrapper}>
           <Filter filterType='SORT BY:'/>
           <RadioButton
                htmlFor='relevance'
                filter='Relevance'
                radioButtonHandler={props.sortRadioButtonHandler}
                name='sort' 
                id='relevance'
                value='relevance' 
                checked={props.sortChecked}
            />
            <RadioButton 
                htmlFor='newest'
                filter='Newest'
                radioButtonHandler={props.sortRadioButtonHandler}
                name='sort' 
                id='newest'
                value='newest' 
            />
           <Filter filterType='PRINT TYPE:'/>
           <RadioButton 
                htmlFor='all'
                filter='All'
                radioButtonHandler={props.printRadioButtonHandler}
                name='print' 
                id='all'
                value='all' 
                checked={props.printChecked}
            />
           <RadioButton 
                htmlFor='books'
                filter='Books'
               radioButtonHandler={props.printRadioButtonHandler}
                name='print' 
                id='books'
                value='books' 
            />
           <RadioButton 
                htmlFor='magazines'
                filter='Magazines'
                radioButtonHandler={props.printRadioButtonHandler}
                name='print' 
                id='magazines'
                value='magazines' 
            />
        </div>
    )
}

export default SideMenu;
