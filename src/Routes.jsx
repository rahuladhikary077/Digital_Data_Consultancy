import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page components
import HomePage from './pages/HomePage.jsx';
// import AboutPage from './pages/AboutPage.jsx';
// import ContactPage from './pages/ContactPage.jsx';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        { /* Example additional routes */ }
        { /* <Route path="/about" element={<AboutPage />} /> */ }
        { /* <Route path="/contact" element={<ContactPage />} /> */ }
      </Routes>
    </Router>
  );
}
