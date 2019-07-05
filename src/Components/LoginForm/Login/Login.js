import React, { Component } from 'react';
import styles from './Login.module.css';

import LoginForm from '../LoginForm';
import InputField from '../InputField/InputField';

class Login extends Component {
    state = {
        LoginEmail: '',
        LoginPassword: ''
    }

    onEmailChange = (event) => {
        this.setState({ LoginEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ LoginPassword: event.target.value })
    }

    onSubmitLogin = () => {
        fetch('http://localhost:4000/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.LoginEmail,
                password: this.state.LoginPassword
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data === 'Login Success') {
                this.props.onRouteChange('home');
            }
        })
    } 

    render() {
        const { onRouteChange } = this.props;
        return (
            <div className={styles.login_wrapper}>
                <LoginForm heading='Login'>
                    <InputField
                        type='email'
                        label='EMAIL ID'
                        inputChange={this.onEmailChange}
                    />
                    <InputField
                        type='password'
                        label='PASSWORD'
                        inputChange={this.onPasswordChange}
                    />
                    <div className={styles.button_wrapper}>
                        <button type='button' onClick={this.onSubmitLogin}>LOGIN</button>
                        {"or"}
                        <b onClick={() => onRouteChange('register')}>Register</b>
                    </div>
                </LoginForm>
            </div>
        )
    }
}

export default Login;