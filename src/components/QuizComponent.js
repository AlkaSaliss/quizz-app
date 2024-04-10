import React from 'react'
import quizzes from '../data/all_quizzes'
import QuizCard from './QuizCard'


const QuizComponent = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold my-10 text-center">Choisir une thématique</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {quizzes.map((quiz) => (
                    <QuizCard key={quiz.id} quizData={quiz} />
                ))}
            </div>
        </div>
    )
}

export default QuizComponent