import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/'
    console.log('came form', location.state?.from)

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" id="" name="" placeholder="enter your email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>new to ema-john? <Link to="/register">Create Account</Link></p>
                <div>-------or---------</div>
                <button
                    className="btn-regular"
                    onClick={handleGoogleLogin}
                >
                    Google sign in</button>
            </div>
        </div>
    );
};

export default Login;