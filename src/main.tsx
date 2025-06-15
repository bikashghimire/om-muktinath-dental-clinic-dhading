import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'
import i18n from './i18n' // Import i18n configuration

// Force Nepali as the default language on initial load
if (!localStorage.getItem('i18nextLng')) {
  i18n.changeLanguage('np');
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
