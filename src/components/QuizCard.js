"use client"

import { Link } from 'react-router-dom'
import React from 'react'

const QuizCard = ({ quizData }) => {

    return (
        <div className="card shadow-xl m-10 border-stone-200 border-2" style={{ backgroundColor: "#001a33" }}>
            <figure className="px-10 py-10">
                <img src={quizData.imageUrl} alt="Quiz illustration" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{quizData.title}</h2>
                <p>{quizData.description}</p>
                <Link to={`/quiz/${quizData.id}`}>
                    <div className="card-actions">
                        <button className="btn btn-primary">Start Quiz</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default QuizCard