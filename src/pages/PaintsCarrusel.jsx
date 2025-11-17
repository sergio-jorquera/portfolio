import { useState } from "react";
import CardPaint from "../components/CardPaint";

// Imágenes de ejemplo
import lgtbi from "../assets/imagenes/8_8.jpg";
import black from "../assets/imagenes/2_2.png";
import shoes from "../assets/imagenes/5_5.jpg";
import toro from "../assets/imagenes/6_6.jpg";
import trump from "../assets/imagenes/4_4.jpg";
import bolaMundo from "../assets/imagenes/10_10.jpg";
import diente from "../assets/imagenes/7_7.jpg";
import vacuna from "../assets/imagenes/3_3.jpg";
import labios from "../assets/imagenes/1_1.jpg";


function PaintsCarrusel() {
  const ilustraciones = [
    { imagen: lgtbi, titulo: "Diversidad", descripcion: "Inclusión y orgullo." },
    { imagen: black, titulo: "Arte", descripcion: "Creatividad y color." },
    { imagen: shoes, titulo: "Naturaleza", descripcion: "Paseo entre árboles." },
    { imagen: toro, titulo: "Naturaleza", descripcion: "Paseo entre árboles." },
    { imagen: trump, titulo: "Naturaleza", descripcion: "Paseo entre árboles." },
    { imagen: bolaMundo, titulo: "Naturaleza", descripcion: "Paseo entre árboles." },
    { imagen: diente, titulo: "Naturaleza", descripcion: "Paseo entre árboles." },
    { imagen: vacuna, titulo: "Naturaleza", descripcion: "Paseo entre árboles." },
    { imagen: labios, titulo: "Naturaleza", descripcion: "Paseo entre árboles." },
  ];

  // índice actual (cuál card se muestra)
  const [indice, setIndice] = useState(0);
  // estado para abrir imagen ampliada
  const [zoom, setZoom] = useState(false);

  // Funciones para moverse
  const siguiente = () => {
    setIndice((prev) => (prev + 1) % ilustraciones.length);
  };

  const anterior = () => {
    setIndice((prev) =>
      prev === 0 ? ilustraciones.length - 1 : prev - 1
    );
  };

  const { imagen, titulo, descripcion } = ilustraciones[indice];

  return (
    <div className="flex flex-col items-center gap-4 relative">
      {/* Card visible */}
      <CardPaint
        imagen={imagen}
        titulo={titulo}
        descripcion={descripcion}
        onClick={() => setZoom(true)} // clic para ampliar
      />

      {/* Botones de navegación */}
      <div className="flex gap-4 mt-2">
        <button
          onClick={anterior}
          className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 rounded hover:bg-neutral-300"
        >
          ←
        </button>
        <button
          onClick={siguiente}
          className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 rounded hover:bg-neutral-300"
        >
          →
        </button>
      </div>

      {/* Imagen ampliada (modal) */}
      {zoom && (
        <div
          onClick={() => setZoom(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
        >
          <img
            src={imagen}
            alt={titulo}
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

export default PaintsCarrusel;
