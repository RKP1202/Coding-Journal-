// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling
import { auth } from '../firebase'; // Assuming auth is imported from firebase

const Navbar = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/add-question" className="nav-link">Add Question</Link>
        </li>
        <li className="nav-item">
          <Link to="/view-questions" className="nav-link">View Questions</Link>
        </li>
        <li className="nav-item">
          <Link to="/sign-up" className="nav-link">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
