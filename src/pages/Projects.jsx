import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import rayo from './../assets/imagenes/rayo.jpg'
import labios from './../assets/imagenes/labios2.jpg'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projectImages = {
    ilustrations: rayo,
    paints: labios,
    // puedes seguir añadiendo: portraits, branding, webs, etc.
  }

  return (
    <div className="relative h-screen w-full flex items-center justify-start px-4 py-6 font-kw text-red-500 text-6xl bg-opacity-80 ml-[-6rem]">
      {/* Menú lateral */}
      <div className="flex flex-col items-start gap-4 text-left z-10">
        <h1 className="font-ko text-2xl font-bold">Mis Proyectos</h1>
        <ul className="space-y-2">
          <li><Link to="/projects/portraits" className="hover:text-5xl">Retratos</Link></li>
          <li
            onMouseEnter={() => setHoveredProject('paints')}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <Link to="/projects/paints" className="hover:text-5xl">Pinturas</Link>
          </li>
          <li
            onMouseEnter={() => setHoveredProject('ilustrations')}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <Link to="/projects/ilustrations" className="hover:text-5xl">Ilustraciones</Link>
          </li>
          <li><Link to="/projects/branding" className="hover:text-5xl">Branding</Link></li>
          <li><Link to="/projects/webs" className="hover:text-5xl">Webs</Link></li>
        </ul>
      </div>

      {/* Imagen que aparece a la derecha */}
      {hoveredProject && projectImages[hoveredProject] && (
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 pointer-events-none opacity-100">
          <img
            src={projectImages[hoveredProject]}
            alt={hoveredProject}
            className="w-[550px] h-auto drop-shadow-[0_8px_12px_rgba(0,0,0,0.6)]"
          />
        </div>
      )}
    </div>
  )
}

export default Projects
