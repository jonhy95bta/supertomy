import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Importa HelmetProvider
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <HelmetProvider> {/* Envuelve tu aplicación con HelmetProvider */}
        <App />
      </HelmetProvider>
    </StrictMode>
  </BrowserRouter>
);