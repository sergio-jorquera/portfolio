import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/Home'
import './App.css'
import NavBar from './components/NavBar'
import CanvasPen from'./components/CanvasPen.jsx'
import MenuButton from './components/MenuButton.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <>
      {/* Solo mostrar botón hamburguesa en Home */}
      {isHome && !isMenuOpen && (
        <MenuButton onClick={() => setIsMenuOpen(true)} />
      )}

      {/* Navbar solo se monta si está abierto */}
      {isMenuOpen && <NavBar onClose={() => setIsMenuOpen(false)} />}
       <CanvasPen />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;