import React from 'react'

import Login from '../../components/login/login.component';
import SignUp from '../../components/sign-up/sign-up.component'

import './loginpage.styles.scss';

const LoginPage = () => (
    <div className='loginpage'>
        <Login/>
        <SignUp/>
    </div>
);

export default LoginPage;