import React, { useState } from 'react'
import { shuffle } from 'lodash'
import quizzes from '../data/all_quizzes'


const allQuestions = []
quizzes.forEach(quiz => {
    quiz.questions.forEach(question => {
        const correctChoiceObject = question.choices.find(
            (choice) => choice.id === question.correctChoice
        )

        const filteredQuestion = {
            id: question.id,
            text: question.text,
            choices: question.choices.map((choice) => choice.text),
            correctAnswer: correctChoiceObject?.text,
        }
        allQuestions.push(filteredQuestion)
    })
})
const shuffledQuestions = shuffle(allQuestions)


const FreeStylePage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => {
            const nextIndex = prevIndex + 1
            return nextIndex < shuffledQuestions.length ? nextIndex : 0
        })
    }

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => {
            const nextIndex = prevIndex - 1
            return nextIndex >= 0 ? nextIndex : shuffledQuestions.length - 1
        })
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex]

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-5 text-center ">Quiz FreeStyle ⏳</h1>
            <p className="text-gray-400 text-center mb-4">
                Question {currentQuestionIndex + 1} / {shuffledQuestions.length}
            </p>
            {currentQuestion && (
                <div className="card bg-base-100 shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-2 text-white">{currentQuestion.text}</h2>
                    <ul className="list-none pl-4">
                        {currentQuestion.choices.map((choice, index) => (
                            <li key={index} className="mb-2 text-white">
                                {choice}
                            </li>
                        ))}
                    </ul>
                    <details className="mt-4">
                        <summary className="cursor-pointer font-bold text-white">Révéler la réponse</summary>
                        <p className="text-gray-400">{currentQuestion.correctAnswer}</p>
                    </details>
                    <div className="flex justify-between mt-4">
                        <button
                            className="btn btn-sm btn-ghost disabled:btn-disabled"
                            disabled={currentQuestionIndex === 0}
                            onClick={handlePreviousQuestion}
                        >
                            Précédent
                        </button>
                        <button
                            className="btn btn-sm btn-primary disabled:btn-disabled"
                            disabled={currentQuestionIndex === shuffledQuestions.length - 1}
                            onClick={handleNextQuestion}
                        >
                            Suivant
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FreeStylePage
