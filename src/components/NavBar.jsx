import { Link, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'

export default function NavBar({ onClose }) {
  const location = useLocation()

  return (
    <nav
      className="
        fixed inset-0 z-[9999]
        md:top-0 md:right-16 md:inset-y-0 md:left-auto md:w-48
        transition-transform duration-500 ease-in-out
      "
    >
      {/* MÓVIL: full screen grid */}
      <div className="
        h-full w-full bg-red-500 text-white relative
        flex flex-col
        md:hidden
      ">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-3"
          aria-label="Cerrar menú"
        >
          <X size={32} />
        </button>

        {/* Grid con 4 filas para las páginas */}
        <div className="flex flex-col items-center justify-start mt-36 gap-16">
          {[
            { to: '/', label: 'INICIO' },
            { to: '/about', label: 'SOBRE MÍ' },
            { to: '/projects', label: 'PROYECTOS' },
            { to: '/contact', label: 'CONTACTO' },
          ].map(({ to, label }) => (
            location.pathname !== to && (
              <Link
                key={to}
                to={to}
                onClick={onClose}
                className="
                  w-full h-full flex items-center justify-center
                  text-8xl font-kw
                  active:scale-95 transition-transform
                "
              >
                {label}
              </Link>
            )
          ))}
        </div>
      </div>

      {/* DESKTOP: tu versión anterior */}
      <div
        className="
          hidden md:flex
          h-full w-full transform -rotate-6
          bg-red-500 bg-opacity-100
          flex-col justify-center text-6xl text-white font-kw px-4 py-6 gap-4
          animate-balloon1
        "
      >
        <button
          onClick={onClose}
          className="absolute top-6 left-6 text-white"
          aria-label="Cerrar menú"
        >
          <X size={32} />
        </button>

        {location.pathname !== '/' && (
          <Link to="/" className="hover:text-5xl" onClick={onClose}>Inicio</Link>
        )}
        {location.pathname !== '/about' && (
          <Link to="/about" className="hover:text-5xl" onClick={onClose}>Sobre mí</Link>
        )}
        {location.pathname !== '/projects' && (
          <Link to="/projects" className="hover:text-5xl" onClick={onClose}>Proyectos</Link>
        )}
        {location.pathname !== '/contact' && (
          <Link to="/contact" className="hover:text-5xl" onClick={onClose}>Contacto</Link>
        )}
      </div>
    </nav>
  )
}
