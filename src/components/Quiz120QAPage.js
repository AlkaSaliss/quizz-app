import React, { useState } from 'react'
import quiz120Data from '../data/question_nat_120_qa'


const Quiz120QAPage = () => {
    const [selectedTheme, setSelectedTheme] = useState('')

    const handleThemeChange = (event) => {
        setSelectedTheme(event.target.value)
    }

    const renderQuestions = () => {
        if (!selectedTheme) return null
        const currentTheme = quiz120Data[selectedTheme]
        return (
            <div className="mt-8">
                {currentTheme.map((question, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-xl font-medium text-gray-300">{question.question}</h3>
                        <details className="group">
                            <summary className="cursor-pointer py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700">
                                Révéler la réponse
                            </summary>
                            <p className="px-4 text-gray-200 group-open:block">{question.answer}</p>
                        </details>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-300 mb-4">120 Questions pour la naturalisation</h2>
            <select
                value={selectedTheme}
                onChange={handleThemeChange}
                className="text-gray-300 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <option value="">Sélectionner une thématique</option>
                {Object.keys(quiz120Data).map((theme) => (
                    <option key={theme} value={theme}>
                        {theme}
                    </option>
                ))}
            </select>
            {renderQuestions()}
        </div>
    )
}

export default Quiz120QAPage
