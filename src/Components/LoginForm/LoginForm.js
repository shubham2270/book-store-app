import React from 'react';
// import Button from '../Button/Button';
// import InputField from './InputField/InputField';
// import {Link} from 'react-router-dom';

import styles from './LoginForm.module.css';

const LoginForm = (props) => {
    return (
        <div className={styles.login_wrapper}>
           <h1>{props.heading}</h1> 
           <div className={styles.input_wrapper}>
                {props.children}
           </div>
         
           {/* <div className={styles.btnWrapper}>
                <Button btnName='LOGIN' onClick={props.onRouteChange}/>
                <Link to='/register'>
                    <Button btnName='REGISTER' onClick={() => props.onRouteChange('register')}/>
                </Link>
           </div> */}
        </div>
    )
}
 
export default LoginForm;
