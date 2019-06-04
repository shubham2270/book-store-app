import React from 'react'
import Module from '../Module/Module';

import styles from './Backdrop.module.css';

const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} style={{display:props.modelToggle}} onClick={props.hideModel}>
             <Module description={props.description}/>
        </div>
    )
}

export default Backdrop;
