// SummaryPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import quizzes from '../data/quizzes';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function SummaryPage() {
    const location = useLocation();
    const { answers } = location.state;
    const quizId = answers.length > 0 ? answers[0].questionId.split('-')[0] : null;
    const quiz = quizId ? quizzes.find((q) => q.id === quizId) : null;
    
    const countCorrectAnswers = () => {
        let correct = 0;
        if (quiz && quiz.questions) {
            answers.forEach((answer) => {
                const question = quiz.questions.find((q) => q.id === answer.questionId);
                if (question && question.correctChoices.includes(answer.answer)) {
                    correct += 1;
                }
            });
        }
        return correct;
    };
    const nb_correct = countCorrectAnswers()
    const nb_incorrect = answers.length - nb_correct

    const data = [
        { name: 'Correct', value: nb_correct },
        { name: 'Wrong', value: nb_incorrect }
    ];

    console.log("====================================")
    console.log(answers)
    console.log("------------------------------------")

    return (
        <div>
            <h2>Summary</h2>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
            {quiz && quiz.questions && (
                <ul>
                    {quiz.questions.map((question) => {
                        const userAnswer = answers.find((a) => a.questionId === question.id);
                        const isCorrect = question.correctChoices.includes(userAnswer?.answer || '');
                        return (
                            <li key={question.id} style={{ color: isCorrect ? 'green' : 'red' }}>
                                {question.text}
                                <ul>
                                    {question.choices.map((choice) => (
                                        <li
                                            key={choice.id}
                                            style={{
                                                fontWeight: question.correctChoices.includes(choice.id) ? 'bold' : 'normal',
                                                color: userAnswer?.answer === choice.id ? 'black' : 'gray',
                                            }}
                                        >
                                            {choice.text}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default SummaryPage;