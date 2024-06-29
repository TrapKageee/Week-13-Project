// Importing necessary React and CSS
import React from 'react';
import './Navigation.css'; // We'll create this CSS file for styling

// Define the Navigation component
const Navigation = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#">Home</a></li>
                <li className="navbar-item"><a href="#">About</a></li>
                <li className="navbar-item"><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

// Export the Navigation component
export default Navigation;
