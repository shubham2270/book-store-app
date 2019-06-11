import React from 'react';

import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.main_wrapper}>
            <h1 className={styles.logo}>Book Store</h1>
            <button className={styles.login}>Login</button>
        </div>
    )
}

export default NavBar;