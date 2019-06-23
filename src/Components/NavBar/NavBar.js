import React from 'react';

import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = ({ loginStatus, onRouteChange }) => {
    return (
        <div className={styles.main_wrapper}>
            <Link to='/'>
            <h1 className={styles.logo}>Book Store</h1>
            </Link>
            <Link to='/login'>
             <button className={styles.login} onClick={onRouteChange}>{loginStatus}</button>
            </Link> 
        </div>
    )
}

export default NavBar;