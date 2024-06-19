// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddQuestion from './components/AddQuestion';
import ViewQuestions from './components/ViewQuestions';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-question" element={<AddQuestion />} />
          <Route path="/view-questions" element={<ViewQuestions />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
