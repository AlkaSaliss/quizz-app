import React from 'react'
import { Link } from 'react-router-dom'
import quizzes from '../data/all_quizzes'
import QuizCard from './QuizCard'


const QuizComponent = () => {
    return (
        <div >
            <Link to="/freestyle">
                <h1 className="hover:bg-slate-800 mx-auto rounded-md shadow shadow-stone-600 text-3xl font-bold my-10 text-center w-1/4">Jouer en mode freestyle</h1>
            </Link>
            <p className="text-xl font-bold my-10 text-center">Ou</p>
            <h1 className="text-3xl font-bold my-10 text-center"> Choisir une des thématiques ci-dessous</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {quizzes.map((quiz) => (
                    <QuizCard key={quiz.id} quizData={quiz} />
                ))}
            </div>
        </div>
    )
}

export default QuizComponent