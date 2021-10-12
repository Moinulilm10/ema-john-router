import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create account</h2>
                <form onSubmit="">
                    <input type="email" id="" name="" placeholder="enter your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="enter your password" />
                    <br />
                    <input type="password" name="" id="" placeholder="re-enter your password" />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>-------------or--------------</div>
                <button className="btn-regular">Google sign in</button>
            </div>
        </div>
    );
};

export default Register;