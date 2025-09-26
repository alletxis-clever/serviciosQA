import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Services from './pages/Services';
import TechStack from './pages/TechStack';
import Methodology from './pages/Methodology';
import Benefits from './pages/Benefits';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <a href="#main-content" className="skip-link">
            Saltar al contenido principal
          </a>
          <Navigation />
          <main id="main-content" className="main-content">
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/tech-stack" element={<TechStack />} />
                <Route path="/methodology" element={<Methodology />} />
                <Route path="/benefits" element={<Benefits />} />
              </Routes>
            </ErrorBoundary>
          </main>
          <footer className="footer">
            <p>&copy; 2025 CleverIT - Servicios de QA</p>
          </footer>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
