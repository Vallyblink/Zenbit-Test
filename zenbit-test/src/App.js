import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Імпортуйте BrowserRouter та Routes
import HomePage from './pages/homePage';
import AuthPage from './pages/authPage';

function App() {
  return (
    <div>
      <Router basename="/">
        <Routes> {/* Використовуйте компонент Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<AuthPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;