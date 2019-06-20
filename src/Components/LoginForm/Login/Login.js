import React from 'react';

import LoginForm from '../LoginForm';
import InputField from '../InputField/InputField';

const Login = () => {
    return (
        <div>
             <LoginForm heading='Login'>
                <InputField type='email' label='EMAIL ID' />
                <InputField type='password' label='PASSWORD' />
              </LoginForm>
        </div>
    )
}

export default Login;