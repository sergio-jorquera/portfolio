import React from "react";
import { useOutletContext } from "react-router-dom";
import yocolor2 from "../assets/imagenes/yocolor2.png";

export default function About(props) {
  // 1) Recoger isMenuOpen del Outlet (si existe) y/o de props (fallback)
  const ctx = useOutletContext?.() || {};
  const isMenuOpen = props.isMenuOpen ?? ctx.isMenuOpen ?? false;

  return (
    <>
      <div className="relative font-ko flex flex-col justify-center min-h-dvh gap-4 text-left text-red-500 text-xl animate-balloon p-4 ml-[-2rem]">
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

      {/* Imagen fija en esquina inferior derecha */}
      <img
        src={yocolor2}
        alt="Yo"
        className={[
          "fixed bottom-0 right-0 z-0 opacity-90 object-cover",
          "pointer-events-none",
          "transition-transform duration-300 ease-in-out will-change-transform",
          // 👇 mueve SOLO cuando el menú está abierto
          isMenuOpen ? "md:-translate-x-[230px]" : "translate-x-0",
        ].join(" ")}
        style={{ height: "100vh", width: "auto", maxWidth: "30vw" }}
      />
    </>
  );
}
