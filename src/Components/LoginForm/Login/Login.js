import React from 'react';
import styles from './Login.module.css';

import LoginForm from '../LoginForm';
import InputField from '../InputField/InputField';

const Login = ({ onRouteChange }) => {
    return (
        <div className={styles.login_wrapper}>
             <LoginForm heading='Login'>
                <InputField type='email' label='EMAIL ID' />
                <InputField type='password' label='PASSWORD' />
                <div className={styles.button_wrapper}>
                    <button type='button' onClick={onRouteChange}>LOGIN</button>
                    {"or"}
                    <b onClick={() => onRouteChange('register')}>Register</b>
                </div>
              </LoginForm>
        </div>
    )
}

export default Login;