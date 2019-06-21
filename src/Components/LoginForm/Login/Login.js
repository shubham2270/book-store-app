import React from 'react';
import styles from './Login.module.css';

import LoginForm from '../LoginForm';
import InputField from '../InputField/InputField';

const Login = () => {
    return (
        <div className={styles.login_wrapper}>
             <LoginForm heading='Login'>
                <InputField type='email' label='EMAIL ID' />
                <InputField type='password' label='PASSWORD' />
              </LoginForm>
        </div>
    )
}

export default Login;