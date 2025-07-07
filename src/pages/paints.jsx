import { useState } from "react";
import mundo from "../assets/imagenes/bolaMundo.jpg";
import trump from "../assets/imagenes/trump.jpg";
import lgtbi from "../assets/imagenes/lgtbi.jpg";

export default function Paints() {
  const [selected, setSelected] = useState(null);

  const pinturas = [
    { id: 1, src: mundo, title: "Mundo" },
    { id: 2, src: trump, title: "Trump" },
    { id: 3, src: lgtbi, title: "LGTBI" },
  ];

  return (
    <div className="min-h-screen bg-white px-10 py-20 flex justify-end">
      <div className="flex gap-10 items-start">
        {pinturas.map((pintura) => (
          <div
            key={pintura.id}
            className="transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelected(pintura)}
          >
            <img
              src={pintura.src}
              alt={pintura.title}
              className="h-[600px] object-contain rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Modal para imagen ampliada */}
      {selected && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.src}
            alt={selected.title}
            className="max-w-3xl max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
