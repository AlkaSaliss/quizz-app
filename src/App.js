import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update this line
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import QuizzesPage from './components/QuizzesPage';
import SummaryPage from './components/SummaryPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/quizzes" element={<QuizzesPage />} /> 
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;