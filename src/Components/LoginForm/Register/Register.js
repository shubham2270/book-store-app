import React from 'react';

import LoginForm from '../LoginForm';
import InputField from '../InputField/InputField';

const Register = () => {
    return (
        <div>
             <LoginForm heading='Register'>
                <InputField type='text' label='FULL NAME' />
                <InputField type='email' label='EMAIL ID' />
                <InputField type='password' label='PASSWORD' />
              </LoginForm>
        </div>
    )
}

export default Register;