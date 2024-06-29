// Importing necessary React and CSS
import React from 'react';
import './LoginForm.css'; // We'll create this CSS file for styling

// Define the LoginForm component
const LoginForm = () => {
    return (
        <div className="login-container">
            <h3 className="login-title">Log In</h3>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

// Export the LoginForm component
export default LoginForm;