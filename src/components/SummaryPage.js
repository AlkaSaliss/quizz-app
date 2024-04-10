import React from 'react'
import { useLocation } from 'react-router-dom'
import quizzes from '../data/all_quizzes'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const SummaryPage = () => {
    const location = useLocation()
    const { answers, quizId } = location.state
    const quiz = quizId ? quizzes.find((q) => q.id === quizId) : null

    const countCorrectAnswers = () => {
        let correct = 0
        if (quiz && quiz.questions) {
            answers.forEach((answer) => {
                const question = quiz.questions.find((q) => q.id === answer.questionId)
                if (question && question.correctChoice.includes(answer.answer)) {
                    correct += 1
                }
            })
        }
        return correct
    }

    const nb_correct = countCorrectAnswers()
    const nb_incorrect = answers.length - nb_correct

    const data = [
        { name: 'Corrects', value: nb_correct },
        { name: 'Incorrects', value: nb_incorrect },
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-4">Résultats</h2>
            <div className="flex justify-center">
                <BarChart
                    width={600}
                    height={300}
                    data={data}
                    className="shadow-md rounded-lg"
                >
                    <XAxis dataKey="name" stroke="#333" />
                    <YAxis stroke="#333" />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="value" fill="#4285F4" />
                </BarChart>
            </div>
            {quiz && quiz.questions && (
                <ul className="list-disc pl-4 mt-8">
                    {quiz.questions.map((question) => {
                        const userAnswer = answers.find((a) => a.questionId === question.id)
                        const isCorrect = question.correctChoice === (userAnswer?.answer || '')
                        return (
                            <li key={question.id} className='font-bold mb-2' style={{ color: isCorrect ? 'green' : 'red' }}>
                                {question.text}
                                <ul className="list-none pl-4 mb-10">
                                    {
                                        question.choices.map((choice) => {
                                            const isCorrectChoice = question.correctChoice === choice.id
                                            const style = isCorrectChoice ? "font-semibold text-green-200 italic underline underline-offset-4" : "font-normal text-gray-300"
                                            return (
                                                <li key={choice.id} className={style}>
                                                    {choice.text}
                                                </li>
                                            )
                                        }
                                        )
                                    }
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default SummaryPage
