import React from 'react';
import { Link } from 'react-router-dom';
import quizzes from '../data/quizzes';

const QuizzesPage = () => {
  return (
    <div className="quizzes-page">
      <h1>Available Quizzes</h1>
      <div className="quizzes-container">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="quiz-card">
            <img src={quiz.imageUrl} alt={quiz.title} className="quiz-image" />
            <div className="quiz-details">
              <h2>{quiz.title}</h2>
              <p>{quiz.description}</p>
              <Link to={`/quiz/${quiz.id}`} className="quiz-button">
                Start Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizzesPage;