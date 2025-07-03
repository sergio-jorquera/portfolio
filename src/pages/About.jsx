import React from 'react';
import yocolor2 from '../assets/imagenes/yocolor2.png';

const About = ({ isMenuOpen }) => {
  return (
    <>
      <div className="relative font-ko flex flex-col justify-center h-screen gap-4 text-left text-red-500 text-xl animate-balloon p-4 ml-[-2rem]">
        <div className="w-3/4 flex flex-col justify-center gap-4 z-10">
          <h1>SOBRE MI</h1>
          <p>
            Me llamo Sergio Jorquera. Estoy dando mis primeros pasos<br/> en el mundo del desarrollo web,
            tanto en front como en back.<br/>Anteriormente, he cursado formación como diseñador.<br/>  
            Soy un apasionado de la música y me encanta la pintura.<br/>  En
            este portfolio podrás ver parte de mi trabajo más reciente,<br/>  también encontrarás proyectos anteriores de diseño,<br/> 
            y algunos de otras disciplinas artísticas.
          </p>
        </div>
      </div>

      {/* Imagen en fondo absoluto */}
     <img
  src={yocolor2}
  alt="Yo"
  className={`fixed bottom-0 right-0 z-0 transition-all duration-700 ease-in-out opacity-90 ${
    isMenuOpen ? 'translate-x-[-200px]' : ''
  } object-cover`}
  style={{ height: '100vh', width: 'auto', maxWidth: '30vw' }}
/>

    </>
  );
};

export default About;
