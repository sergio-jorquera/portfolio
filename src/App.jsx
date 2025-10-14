import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/Home'
import './App.css'
import NavBar from './components/NavBar'
import CanvasPen from './components/CanvasPen.jsx'
import MenuButton from './components/MenuButton.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Portraits from './pages/Portraits.jsx'
import Paints from './pages/Paints.jsx'
import Contact from './pages/Contact.jsx'
import ProjectsLayouts from './layouts/ProjectsLayouts.jsx'
import ThemeToggleButton from "./components/ThemeToggleButton.jsx"; // ← botón de tema
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
      {/* Botón de rayo siempre visible cuando menú está cerrado */}
      {!isMenuOpen && <MenuButton onClick={() => setIsMenuOpen(true)} />}

      {/* Menú lateral */}
      {isMenuOpen && <NavBar onClose={() => setIsMenuOpen(false)} />}
         {/* Header fijo con el botón de tema (puedes moverlo a tu NavBar si prefieres) */}
      <header className="fixed right-4 top-4 z-50">
         <LanguageSwitcher />  
        <ThemeToggleButton />
      </header>

      {/* Opcional: dejar CanvasPen solo en ciertas rutas */}
      <CanvasPen />

      {/* Rutas */}
     <Routes>
  <Route path="/" element={<Home />} />

  {/* Rutas dentro de /projects */}
  <Route path="/projects" element={<ProjectsLayouts />}>
    <Route index element={<Projects />} />
    <Route path="portraits" element={<Portraits />} />
    <Route path="paints" element={<Paints />} />
    <Route path="ilutrations" element={<div>Ilustraciones</div>} />
    <Route path="branding" element={<div>Branding</div>} />
    <Route path="webs" element={<div>Webs</div>} />
  </Route>

  <Route path="/about" element={<About isMenuOpen={isMenuOpen} />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
    </div>
  )
}

export default App
