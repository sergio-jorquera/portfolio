import React from "react";
import Digipack from "./../assets/imagenes/Digipack.png";

export default function Ilustrations() {
  return (
    <main className="min-h-screen  flex flex-col items-center justify-center p-6">
      
      {/* Imagen principal */}
      <img
        src={Digipack}
        alt="Digipack"
        className="
          max-w-full sm:max-w-[800px] 
          w-auto object-contain
          bg-white p-2
         
          mb-8
        "
      />

      {/* Título */}
      <h3 className="font-ko text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
        Álbum Digipack
      </h3>

      {/* Descripción */}
      <p className="font-ko text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-prose text-center leading-relaxed">
        Diseño del digipack para el lanzamiento musical. Combinación de estética
        minimalista con una composición equilibrada, destacando la expresión visual
        del proyecto.
      </p>
    </main>
  );
}
