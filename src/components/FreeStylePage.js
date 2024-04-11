import React, { useState } from 'react'
import freestyleQuizData from '../data/freestyle_quiz'


const allQuestions = [
    ...freestyleQuizData.vie_privee,
    ...freestyleQuizData.histoire,
    ...freestyleQuizData.geographie,
    ...freestyleQuizData.politique,
    ...freestyleQuizData.europe,
]

const themesMapping = {
    'vie_privee': 'Vie Privée',
    'histoire': 'Histoire',
    'geographie': 'Géographie',
    'politique': 'Politique',
    'europe': 'Europe',
}


const FreeStylePage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => {
            const nextIndex = prevIndex + 1
            return nextIndex < allQuestions.length ? nextIndex : 0
        })
    }

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => {
            const nextIndex = prevIndex - 1
            return nextIndex >= 0 ? nextIndex : allQuestions.length - 1
        })
    }

    const currentQuestion = allQuestions[currentQuestionIndex]

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-5 text-center ">Quiz FreeStyle ⏳</h1>
            <p className="text-gray-400 text-center mb-4">
                Question {currentQuestionIndex + 1} / {allQuestions.length} - Theme: {themesMapping[currentQuestion.id.split('__')[0]]}
            </p>
            {currentQuestion && (
                <div className="card bg-base-100 shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-2 text-white">{currentQuestion.question}</h2>
                    <details className="mt-4">
                        <summary className="cursor-pointer font-bold text-white">Révéler la réponse</summary>
                        <p className="text-gray-400">{currentQuestion.answer}</p>
                    </details>
                    <div className="flex justify-between mt-4">
                        <button
                            className="btn btn-sm btn-secondary disabled:btn-disabled"
                            disabled={currentQuestionIndex === 0}
                            onClick={handlePreviousQuestion}
                        >
                            Précédent
                        </button>
                        <button
                            className="btn btn-sm btn-primary disabled:btn-disabled"
                            disabled={currentQuestionIndex === allQuestions.length - 1}
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
