import React from 'react';

import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={styles.main_wrapper}>
            <h1 className={styles.logo}>Book Store</h1>
            <Link to='/login'>
             <button className={styles.login}>Login</button>
            </Link> 
        </div>
    )
}

export default NavBar;