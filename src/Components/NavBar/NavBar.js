import React from 'react';

import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = ({ isSignedIn, onRouteChange }) => {

        if (isSignedIn) {
        return (
            <div className={styles.main_wrapper}>
                <Link to='/'>
                    <h1 className={styles.logo}>Book Store</h1>
                </Link>
                <Link to='/login'>
                    <button className={styles.login} onClick={() => onRouteChange('login')}>Sign Out</button>
                </Link>
            </div>
        )
    } else {
        return (
            <div className={styles.main_wrapper}>
                <Link to='/'>
                    <h1 className={styles.logo}>Book Store</h1>
                </Link>
                <Link to='/login'>
                    <button className={styles.login} onClick={() => onRouteChange('login')}>Login</button>
                </Link>
            </div>
        )
    }
}

export default NavBar;