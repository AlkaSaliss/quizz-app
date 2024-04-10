import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Update this line
import HomePage from './components/HomePage'
import PlayQuizPage from './components/PlayQuizPage'
import SummaryPage from './components/SummaryPage'
import Navbar from './components/Navbar'
import './App.css'
import LoginContextProvider from './contexts/login-context'

function App() {
  return (
    <Router>
      <LoginContextProvider>
        <Navbar />
        <Routes>
          <Route path="/quiz/:quizId" element={<PlayQuizPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </LoginContextProvider>
    </Router>

  )
}

export default App
