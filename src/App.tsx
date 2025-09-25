import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Services from './pages/Services';
import TechStack from './pages/TechStack';
import Methodology from './pages/Methodology';
import Benefits from './pages/Benefits';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/benefits" element={<Benefits />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2025 CleverIT - Servicios de QA</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;