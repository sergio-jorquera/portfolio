import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from './i18n/LanguageProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <BrowserRouter>
  <StrictMode>
     <LanguageProvider defaultLang="es">
    <App />
    </LanguageProvider>
  </StrictMode>
  </BrowserRouter>
  </ThemeProvider>
)

