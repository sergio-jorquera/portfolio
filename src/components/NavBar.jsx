import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

export default function NavBar({ onClose }) {
  const location = useLocation();

  return (
    <nav
      className="fixed top-0 right-16 h-screen w-48 z-50 transition-transform duration-500 ease-in-out"
    >
      {/* Rotación solo en el contenido, no en el nav */}
      <div
        className="h-full w-full transform -rotate-6 bg-red-600 bg-opacity-80
                   flex flex-col justify-center text-6xl text-white font-kw px-4 py-6 gap-4 animate-balloon"
      >
         
        <button
          onClick={onClose}
          className="absolute top-6 left-6 text-white"
          aria-label="Cerrar menú"
        >
          <X size={32} />
        </button>

        {location.pathname !== '/' && (
          <Link to="/" className="hover:text-blue-400" onClick={onClose}>Inicio</Link>
        )}
        {location.pathname !== '/about' && (
          <Link to="/about" className="hover:text-blue-400" onClick={onClose}>Sobre mí</Link>
        )}
        {location.pathname !== '/projects' && (
          <Link to="/projects" className="hover:text-blue-400" onClick={onClose}>Proyectos</Link>
        )}
        {location.pathname !== '/contact' && (
          <Link to="/contact" className="hover:text-blue-400" onClick={onClose}>Contacto</Link>
        )}
      </div>
      
    </nav>
  );
}
