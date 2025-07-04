import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/Home'
import './App.css'
import NavBar from './components/NavBar'
import CanvasPen from'./components/CanvasPen.jsx'
import MenuButton from './components/MenuButton.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Portraits from './pages/Portraits.jsx'; // Asegúrate de que la ruta sea correcta

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
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/portraits" element={<Portraits/>}/>
        <Route path="/projects/paints" element={<div>Pinturas</div>} />
        <Route path="/projects/ilutrations" element={<div>Ilustraciones</div>} />
        <Route path="/projects/branding" element={<div>Branding</div>} />
        <Route path="/projects/webs" element={<div>Webs</div>} />
        
        {/* Agrega más rutas según sea necesario */}
        <Route path="/about" element={<About isMenuOpen={isMenuOpen} />} />
      </Routes>
    </>
  );
}

export default App;