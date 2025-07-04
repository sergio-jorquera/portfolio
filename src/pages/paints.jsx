import { useState } from "react";
import labio from "../assets/labio.jpg";
import playeros from "../assets/playeros.jpg";
import trump from "../assets/trump.jpg";
// Agrega más imágenes si tienes

export default function Paints() {
  const [selected, setSelected] = useState(null);

  const cuadros = [
    { id: 1, src: labio, title: "Labio" },
    { id: 2, src: playeros, title: "Playeros" },
    { id: 3, src: trump, title: "Trump" },
    // Puedes añadir más objetos así
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Galería de Pinturas</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {cuadros.map((cuadro) => (
          <div
            key={cuadro.id}
            className="transition-transform duration-300 hover:scale-110 cursor-pointer"
            onClick={() => setSelected(cuadro)}
          >
            <img
              src={cuadro.src}
              alt={cuadro.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-center mt-2">{cuadro.title}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.src}
            alt={selected.title}
            className="max-w-3xl max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
