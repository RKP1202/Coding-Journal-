// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HeroSection.css'; // Import CSS for styling

// const HeroSection = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1>Welcome to Your Coding Journal</h1>
//         <p>Track your coding journey with ease.</p>
//         <Link to="/add-question" className="btn btn-primary">
//           Get Started
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// src/components/Home.js

import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to your Coding Journal</h1>
        <p>Track your coding progress and manage your questions easily.</p>
      </section>
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
    </div>
  );
};

export default Home;
