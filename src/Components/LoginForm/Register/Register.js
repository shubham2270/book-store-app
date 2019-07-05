import React, { Component } from 'react';
import styles from './Register.module.css';

import LoginForm from '../LoginForm';
import InputField from '../InputField/InputField';

class Register extends Component {
    state = {
        email: '',
        password: '',
        name: ''
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitLogin = () => {
        fetch('http://localhost:4000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(res => res.json())
        .then(user => {
            if (user === 'incorrect form submission') {
                console.log(user);
            } else {
                this.props.loadUser(user)
                this.props.onRouteChange('home')

            }
        })
    }

    render() {
        const { onRouteChange } = this.props
        return (
            <div className={styles.register_wrapper}>
                <LoginForm heading='Register'>
                    <InputField
                        type='text'
                        label='FULL NAME'
                        inputChange={this.onNameChange}

                    />
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
                        <button type='button' onClick={this.onSubmitLogin}>SUBMIT</button>
                        {"or"}
                        <b onClick={() => onRouteChange('login')}>Login</b>
                    </div>
                </LoginForm>
            </div>
        )
    }

}

export default Register;