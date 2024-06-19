import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'; // Import CSS for styling

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Your Coding Journal</h1>
        <p>Track your coding journey with ease.</p>
        <Link to="/add-question" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
