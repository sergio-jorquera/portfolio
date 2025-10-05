import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import rayo from './../assets/imagenes/rayo.jpg'
import labios from './../assets/imagenes/labios2.jpg'
import idiota from './../assets/imagenes/yoidiota.jpg'  
import toquendom from './../assets/imagenes/toquendom.png'
import paz from './../assets/imagenes/paz.png'


const Projects = () => {

  
  const [hoveredProject, setHoveredProject] = useState(null)

  const projectImages = {
    ilustrations: rayo,
    paints: labios,
    portraits: idiota,
    webs: toquendom,
    branding: paz
    // puedes seguir añadiendo: portraits, branding, webs, etc.
  }
   useEffect(() => {
    Object.values(projectImages).forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [projectImages]) 

return (
  <div className="
    relative h-screen w-full
    flex items-center justify-center  xl:justify-start         /* centrado hasta xl */
    px-4 py-6 font-kw text-red-500
    text-5xl xl:text-6xl
    ml-0 xl:ml-[-6rem]
  ">
    <div className="w-full max-w-[520px] flex flex-col items-center xl:items-start gap-8 text-center xl:text-left z-10 mx-auto  xl:mx-0">
      <h1 className="font-ko text-3xl font-bold hidden xl:block">Mis Proyectos</h1>

      <ul className="space-y-4">
        <li onMouseEnter={() => setHoveredProject('webs')}
            onMouseLeave={() => setHoveredProject(null)}>
          <Link to="/projects/webs" className="xl:hover:text-5xl">Webs</Link>
        </li>
        <li onMouseEnter={() => setHoveredProject('branding')}
            onMouseLeave={() => setHoveredProject(null)}>
          <Link to="/projects/branding" className="xl:hover:text-5xl">Branding</Link>
        </li>
        <li onMouseEnter={() => setHoveredProject('ilustrations')}
            onMouseLeave={() => setHoveredProject(null)}>
          <Link to="/projects/ilustrations" className="xl:hover:text-5xl">Ilustraciones</Link>
        </li>
        <li onMouseEnter={() => setHoveredProject('paints')}
            onMouseLeave={() => setHoveredProject(null)}>
          <Link to="/projects/paints" className="xl:hover:text-5xl">Pinturas</Link>
        </li>
        <li onMouseEnter={() => setHoveredProject('portraits')}
            onMouseLeave={() => setHoveredProject(null)}>
          <Link to="/projects/portraits" className="xl:hover:text-5xl">Retratos</Link>
        </li>
      </ul>
    </div>

    {/* preview solo en escritorio */}
    {hoveredProject && projectImages[hoveredProject] && (
      <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 transition-opacity duration-500 pointer-events-none">
        <img
          src={projectImages[hoveredProject]}
          alt={hoveredProject}
          className={`h-auto drop-shadow-[0_8px_12px_rgba(0,0,0,0.6)]
            ${hoveredProject === 'portraits' ? 'w-[450px]'
              : hoveredProject === 'webs' ? 'w-[450px]'
              : 'w-[550px]'}`}
        />
      </div>
    )}
  </div>
);



}

export default Projects
