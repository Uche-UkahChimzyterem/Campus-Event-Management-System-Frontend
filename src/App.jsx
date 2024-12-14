import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import EventsPage from './pages/EventsPage'
import AboutPage from './pages/AboutPage'
import ContactUsPage from './pages/ContactUsPage'
import FeedbackPage from './pages/FeedbackPage'
import UserDashboardPage from './pages/UserDashboardPage'
import AdminPage from './pages/AdminPage'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="" element={<AuthPage />} >
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Route>

      <Route path="/events" element={<EventsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/dashboard" element={<UserDashboardPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App