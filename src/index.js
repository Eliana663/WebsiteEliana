import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter.jsx';
import { PrimeReactProvider } from 'primereact/api';
import { LanguageProvider } from './LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <PrimeReactProvider>
          <AppRouter />
        </PrimeReactProvider>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);

reportWebVitals();
