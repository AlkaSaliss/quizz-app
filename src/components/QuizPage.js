// QuizPage.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import quizzes from '../data/quizzes';

function QuizPage() {
    const { quizId } = useParams();
    const quiz = quizzes.find((q) => q.id === quizId);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showSummary, setShowSummary] = useState(false);
    const navigate = useNavigate();


    const handleAnswer = (answer) => {
        setAnswers(prev => [...prev, { questionId: quiz.questions[currentQuestion].id, answer }]);
        if (currentQuestion === quiz.questions.length - 1) {
            setShowSummary(prev => !prev);
        } else {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    if (!quiz) {
        return <div>Quiz not found</div>;
    }

    const question = quiz.questions[currentQuestion];

    return (
        <div>
            {
                showSummary ?
                    <button onClick={() => navigate('/summary', { state: { answers } })}>Show Summary</button>
                    :
                    <>
                        <h2>{quiz.title}</h2>
                        <p>{question.text}</p>
                        {question.imageUrl && <img src={question.imageUrl} alt={question.text} />}
                        <ul>
                            {question.choices.map((choice) => (
                                <li key={choice.id}>
                                    <button onClick={() => handleAnswer(choice.id)}>{choice.text}</button>
                                </li>
                            ))}
                        </ul>
                    </>
            }
        </div>
    );
}

export default QuizPage;