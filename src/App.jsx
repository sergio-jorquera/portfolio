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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      {/* Botón de rayo siempre visible cuando menú está cerrado */}
      {!isMenuOpen && <MenuButton onClick={() => setIsMenuOpen(true)} />}

      {/* Menú lateral */}
      {isMenuOpen && <NavBar onClose={() => setIsMenuOpen(false)} />}

      {/* Opcional: dejar CanvasPen solo en ciertas rutas */}
      <CanvasPen />

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/portraits" element={<Portraits />} />
        <Route path="/projects/paints" element={<Paints />} />
        <Route path="/projects/ilutrations" element={<div>Ilustraciones</div>} />
        <Route path="/projects/branding" element={<div>Branding</div>} />
        <Route path="/projects/webs" element={<div>Webs</div>} />
        <Route path="/about" element={<About isMenuOpen={isMenuOpen} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
