// Importing React, CSS and the created components
import React from 'react';
import './App.css';
import Navigation from './Navigation';
import LoginForm from './LoginForm';

// Define the App component
function App() {
    return (
        <div className="App">
            <Navigation />
            <div className="main-content">
                <LoginForm />
            </div>
        </div>
    );
}

// Export the App component
export default App;
