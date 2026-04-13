import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Workshops from './pages/Workshops.jsx';
import Statistics from './pages/Statistics.jsx';
import Dashboard from './pages/Dashboard.jsx';
import './styles.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home darkMode={darkMode} onToggleDarkMode={() => setDarkMode((prev) => !prev)} />} />
        <Route path="/workshops" element={<Workshops darkMode={darkMode} onToggleDarkMode={() => setDarkMode((prev) => !prev)} />} />
        <Route path="/statistics" element={<Statistics darkMode={darkMode} onToggleDarkMode={() => setDarkMode((prev) => !prev)} />} />
        <Route path="/dashboard" element={<Dashboard darkMode={darkMode} onToggleDarkMode={() => setDarkMode((prev) => !prev)} />} />
      </Routes>
    </Router>
  );
}
