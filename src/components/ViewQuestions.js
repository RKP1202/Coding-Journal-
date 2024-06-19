// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import './ViewQuestions.css'; // Import CSS for styling

// const ViewQuestions = () => {
//   const [questions, setQuestions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       const querySnapshot = await getDocs(collection(db, 'questions'));
//       const questionsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setQuestions(questionsList);
//     };
//     fetchQuestions();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const filteredQuestions = questions.filter((question) => {
//     return (
//       question.question.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (filter ? question.difficulty === filter : true)
//     );
//   });

//   const handleTakeNote = (note) => {
//     window.open(`/take-note/${note}`, '_blank');
//   };

//   return (
//     <div className="view-questions-container">
//       <h2>View Questions</h2>
//       <input
//         type="text"
//         placeholder="Search questions"
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       <select value={filter} onChange={handleFilterChange}>
//         <option value="">All</option>
//         <option value="Easy">Easy</option>
//         <option value="Medium">Medium</option>
//         <option value="Hard">Hard</option>
//       </select>
//       <table className="questions-table">
//         <thead>
//           <tr>
//             <th>Question</th>
//             <th>Difficulty</th>
//             <th>Topics</th>
//             <th>Revision Status</th>
//             <th>Problem Link</th>
//             <th>Note</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredQuestions.map((question, index) => (
//             <tr key={index}>
//               <td>{question.question}</td>
//               <td>{question.difficulty}</td>
//               <td>{question.topics}</td>
//               <td>{question.revisionStatus}</td>
//               <td><a href={question.problemLink}>{question.problemLink}</a></td>
//               <td><button onClick={() => handleTakeNote(question.note)}>Take Note</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewQuestions;

// new

// src/components/ViewQuestions.js

import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import './ViewQuestions.css'; // Import CSS for styling

const ViewQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const q = query(collection(db, 'questions'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const questionsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setQuestions(questionsList);
      }
    };
    fetchQuestions();
  }, []);

  const handleTakeNote = (note) => {
    // Open a new window or tab with a blank page for taking notes
    window.open(`/take-note/${note}`, '_blank');
  };

  return (
    <div className="view-questions-container">
      <h2>View Questions</h2>
      <table className="questions-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Difficulty</th>
            <th>Topics</th>
            <th>Revision Status</th>
            <th>Problem Link</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td>{question.question}</td>
              <td>{question.difficulty}</td>
              <td>{question.topics}</td>
              <td>{question.revisionStatus}</td>
              <td><a href={question.problemLink}>{question.problemLink}</a></td>
              <td><button onClick={() => handleTakeNote(question.note)}>Take Note</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewQuestions;
