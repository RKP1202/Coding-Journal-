// src/components/FeaturesSection.js

import React from 'react';
import './FeaturesSection.css'; // Import the CSS file for styling

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="feature">
        <h2>Add Questions</h2>
        <p>Record coding questions you're working on.</p>
      </div>
      <div className="feature">
        <h2>View Questions</h2>
        <p>Review and manage your saved questions.</p>
      </div>
      <div className="feature">
        <h2>Track Progress</h2>
        <p>Monitor your learning journey with ease.</p>
      </div>
    </section>
  );
};

export default FeaturesSection;
