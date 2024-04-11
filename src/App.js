import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import PlayQuizPage from './components/PlayQuizPage'
import SummaryPage from './components/SummaryPage'
import Navbar from './components/Navbar'
import FreeStylePage from './components/FreeStylePage'
import LoginContextProvider from './contexts/login-context'
import './App.css'


const App = () => {
  return (
    <Router>
      <LoginContextProvider>
        <Navbar />
        <Routes>
          <Route path="/quizz-app" element={<HomePage />} />
          <Route path="/freestyle" element={<FreeStylePage />} />
          <Route path="/quiz/:quizId" element={<PlayQuizPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </LoginContextProvider>
    </Router>

  )
}

export default App