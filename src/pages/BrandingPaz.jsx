import React from "react";
import PazOctavio from "./../assets/imagenes/PazOctavio.jpg";

export default function Branding() {
  return (
    <main className="flex flex-col items-center p-6">
      <img
        src={PazOctavio}
        alt="Paz"
        className="
          w-[85%] mx-auto object-contain
          -mt-4 cursor-zoom-in
          transition-transform duration-200
        "
      />

      <div className="w-[85%] mt-10">
        <h3 className="font-ko text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-50 text-left mb-6">
          Álbum Digipack
        </h3>

        <p className="font-ko text-base sm:text-lg text-neutral-700 dark:text-neutral-300 text-justify leading-relaxed">
            {/* texto largo para forzar scroll */}
            Diseño del digipack para el lanzamiento musical. Combinación de estética
            minimalista con una composición equilibrada, destacando la expresión visual
            del proyecto. Diseño del digipack para el lanzamiento musical. Combinación
            de estética minimalista con una composición equilibrada, destacando la
            expresión visual del proyecto. Diseño del digipack para el lanzamiento
            musical. Combinación de estética minimalista con una composición equilibrada,
            destacando la expresión visual del proyecto. Diseño del digipack para el
            lanzamiento musical. Combinación de estética minimalista con una composición
            equilibrada, destacando la expresión visual del proyecto. Diseño del
            digipack para el lanzamiento musical. Combinación de estética minimalista con
            una composición equilibrada, destacando la expresión visual del proyecto.
            Diseño del digipack para el lanzamiento musical. Combinación de estética
            minimalista con una composición equilibrada, destacando la expresión visual
            del proyecto. Diseño del digipack para el lanzamiento musical. Combinación de
            estética minimalista con una composición equilibrada, destacando la
            expresión visual del proyecto. Diseño del digipack para el lanzamiento
            musical. Combinación de estética minimalista con una composición equilibrada,
            destacando la expresión visual del proyecto.
          </p>
        </div>
      </main>
  );
}