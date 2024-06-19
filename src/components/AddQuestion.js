// // src/components/AddQuestion.js

// import React, { useState } from 'react';
// import { db } from '../firebase';
// import { collection, addDoc } from 'firebase/firestore';
// import './AddQuestion.css'; // Import CSS for styling

// const AddQuestion = () => {
//   const [question, setQuestion] = useState('');
//   const [difficulty, setDifficulty] = useState('');
//   const [topics, setTopics] = useState('');
//   const [revisionStatus, setRevisionStatus] = useState('');
//   const [problemLink, setProblemLink] = useState('');

//   const handleAddQuestion = async (e) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, 'questions'), {
//         question,
//         difficulty,
//         topics,
//         revisionStatus,
//         problemLink,
//       });
//       console.log('Question added');
//       // Reset form fields
//       setQuestion('');
//       setDifficulty('');
//       setTopics('');
//       setRevisionStatus('');
//       setProblemLink('');
//     } catch (error) {
//       console.error('Error adding question:', error);
//     }
//   };

//   const handleTakeNote = () => {
//     // Open a new window or tab with a blank page for taking notes
//     window.open('/take-note', '_blank');
//   };

//   return (
//     <div className="add-question-container">
//       <h2>Add Question</h2>
//       <form className="add-question-form" onSubmit={handleAddQuestion}>
//         <input
//           type="text"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           placeholder="Question"
//           required
//         />
//         <input
//           type="text"
//           value={difficulty}
//           onChange={(e) => setDifficulty(e.target.value)}
//           placeholder="Difficulty"
//           required
//         />
//         <input
//           type="text"
//           value={topics}
//           onChange={(e) => setTopics(e.target.value)}
//           placeholder="Topics"
//           required
//         />
//         <input
//           type="text"
//           value={revisionStatus}
//           onChange={(e) => setRevisionStatus(e.target.value)}
//           placeholder="Revision Status"
//         />
//         <input
//           type="text"
//           value={problemLink}
//           onChange={(e) => setProblemLink(e.target.value)}
//           placeholder="Problem Link"
//         />
//         <button type="button" onClick={handleTakeNote}>Take Note</button>
//         <button type="submit">Add Question</button>
//       </form>
//     </div>
//   );
// };

// export default AddQuestion;

// new
// src/components/AddQuestion.js

import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './AddQuestion.css'; // Import CSS for styling

const AddQuestion = () => {
  const [question, setQuestion] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [topics, setTopics] = useState('');
  const [revisionStatus, setRevisionStatus] = useState('');
  const [problemLink, setProblemLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        await addDoc(collection(db, 'questions'), {
          userId: user.uid, // Store the user ID with the question
          question,
          difficulty,
          topics,
          revisionStatus,
          problemLink,
        });
        // Clear the form fields
        setQuestion('');
        setDifficulty('');
        setTopics('');
        setRevisionStatus('');
        setProblemLink('');
      } catch (error) {
        console.error('Error adding question: ', error);
      }
    } else {
      console.error('No user is signed in');
    }
  };

  return (
    <div className="add-question-container">
      <h2>Add Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Difficulty:</label>
          <input
            type="text"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Topics:</label>
          <input
            type="text"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Revision Status:</label>
          <input
            type="text"
            value={revisionStatus}
            onChange={(e) => setRevisionStatus(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Problem Link:</label>
          <input
            type="url"
            value={problemLink}
            onChange={(e) => setProblemLink(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default AddQuestion;

