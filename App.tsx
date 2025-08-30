import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageCode } from './types';
import AgeCalculatorPage from './pages/AgeCalculatorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <div className="font-sans">
       <HashRouter>
        <Routes>
          <Route path="/:lang" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="calculator" element={<AgeCalculatorPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<Navigate to={`/${LanguageCode.EN}`} replace />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;