// src/components/NotePage.js

import React from 'react';

const NotePage = ({ noteContent }) => {
  return (
    <div className="note-page">
      <h2>Take Note</h2>
      <p>Problem: {noteContent}</p>
      <textarea className="note-input" placeholder="Write your note here..." />
      {/* Add a button or link to save the note */}
      {/* Optionally, you can use a form for better submission handling */}
    </div>
  );
};

export default NotePage;
