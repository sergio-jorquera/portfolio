import { useState } from "react";
import mundo from "../assets/imagenes/bolaMundo.jpg";
import trump from "../assets/imagenes/trump.jpg";
import lgtbi from "../assets/imagenes/lgtbi.jpg";
import tetas from "../assets/imagenes/tetas.jpg";
import dientes from "../assets/imagenes/dientes.jpg";
import toro from "../assets/imagenes/toro.jpg";

export default function Paints() {
  const [selected, setSelected] = useState(null);

  const cuadros = [
    { src: lgtbi, title: "LGTBI" },
    { src: trump, title: "Trump" },
    { src: mundo, title: "Mundo" },
    { src: toro, title: "Toro" },
    { src: dientes, title: "Dientes" },
    { src: tetas, title: "Tetas" },
  ];

  return (
   <div className="min-h-screen  px-30 py-10 flex items-start justify-end mr-12 mt-14">
      <div className="grid grid-cols-3 gap-x-1 gap-y-10">
        {cuadros.map((pintura, i) => (
          <div
            key={i}
            className="h-[225px] flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelected(pintura.src)}
          >
            <img
              src={pintura.src}
              alt={pintura.title}
              className="h-full w-auto object-contain rounded-md"
            />
          </div>
        ))}
        </div>
      

      {selected && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Ampliada"
            className="max-w-3xl max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
