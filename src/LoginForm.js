// src/LoginForm.js
import React from 'react';
import './LoginForm.css';

function LoginForm() {
    return (
        <div className="login-form">
            <h3>Log In</h3>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;
