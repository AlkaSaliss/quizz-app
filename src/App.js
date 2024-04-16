import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import PlayQuizPage from './components/PlayQuizPage'
import SummaryPage from './components/SummaryPage'
import Navbar from './components/Navbar'
import FreeStylePage from './components/FreeStylePage'
import FreeStyleQuizPage from './components/FreeStyleQuizPage'
import FreeStylePage120QA from './components/FreeStylePage120QA'
import FreeStyleQuizPage120QA from './components/FreeStyleQuizPage120QA'
import LoginContextProvider from './contexts/login-context'
import './App.css'


const App = () => {
  return (
    <Router>
      <LoginContextProvider>
        <Navbar />
        <Routes>
          <Route path="/quizz-app" element={<HomePage />} />

          <Route path="/quizz-app/freestyle" element={<FreeStylePage />} />
          <Route path="/quizz-app/freestyle/:quizId" element={<FreeStyleQuizPage />} />
          
          <Route path="/quizz-app/freestyle120" element={<FreeStylePage120QA />} />
          <Route path="/quizz-app/freestyle120/:quizId" element={<FreeStyleQuizPage120QA />} />
          
          <Route path="/quizz-app/quiz/:quizId" element={<PlayQuizPage />} />
          <Route path="/quizz-app/summary" element={<SummaryPage />} />
        </Routes>
      </LoginContextProvider>
    </Router>

  )
}

export default App