import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import _ from 'lodash'
import quizzes from '../data/all_quizzes'


const PlayQuizPage = () => {
  const { quizId } = useParams()
  const quiz = quizzes.find((q) => q.id === quizId)
  quiz.questions = _.shuffle(quiz.questions)
  const totalQuestions = quiz.questions.length
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showSummary, setShowSummary] = useState(false)
  const navigate = useNavigate()

  const handleAnswer = (answer) => {
    setAnswers(prev => [...prev, { questionId: quiz.questions[currentQuestion].id, answer }])
    if (currentQuestion === quiz.questions.length - 1) {
      setShowSummary(prev => !prev)
    } else {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  if (!quiz) {

    return (
      <div className="mx-auto mt-10 w-1/5 shadow-xl rounded-xl bg-slate-600 font-bold text-red-500">
        <p className="text-center">⚠️⚠️Quiz not found⚠️⚠️</p>
      </div>
    )

  }
  
  const question = quiz.questions[currentQuestion]

  return (
    <div className="flex flex-col gap-4 items-center mt-20">
      {showSummary ? (
        <button
          onClick={() => navigate('/summary', { state: { answers, quizId } })}
          className="btn w-40 mt-40 bg-emerald-900"
        >
          Afficher le résultat
        </button>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center">{quiz.title}</h2>
          <p className="text-slate-300 mb-4">
            Question {currentQuestion + 1} / {totalQuestions} - {question.text}
          </p>
          {question.imageUrl && (
            <img
              src={question.imageUrl}
              alt={question.text}
              className="w-full rounded-lg mb-4"
            />
          )}
          <ul className="list-none p-0">
            {_.shuffle(question.choices).map((choice) => (
              <li key={choice.id} className="mb-2">
                <button
                  onClick={() => handleAnswer(choice.id)}
                  className="text-left w-full py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {choice.text}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );

}

export default PlayQuizPage