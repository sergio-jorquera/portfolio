import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/Home'
import './App.css'
import NavBar from './components/NavBar'
import CanvasPen from'./components/CanvasPen.jsx'
import MenuButton from './components/MenuButton.jsx';
import About from './pages/About.jsx';

// Componente principal de la aplicación

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  

  return (
    <>
      {/* Solo mostrar botón hamburguesa en Home */}
      {!isMenuOpen && (
        <MenuButton onClick={() => setIsMenuOpen(true)} />
      )}
       {isMenuOpen && <NavBar onClose={() => setIsMenuOpen(false)} />}
      

      {/* Navbar solo se monta si está abierto */}
      {isMenuOpen && <NavBar onClose={() => setIsMenuOpen(false)} />}
       <CanvasPen />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/about" element={<About isMenuOpen={isMenuOpen} />} />
      </Routes>
    </>
  );
}

export default App;