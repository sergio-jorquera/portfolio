import { useState } from "react";
import mundo from "../assets/imagenes/bolaMundo.jpg";
import trump from "../assets/imagenes/trump.jpg";
import lgtbi from "../assets/imagenes/lgtbi.jpg";
import tetas from "../assets/imagenes/tetas.jpg";
import dientes from "../assets/imagenes/dientes.jpg";
import toro from "../assets/imagenes/toro.jpg";
export default function Paints() {
  const cuadros = [
    { src: lgtbi, title: "LGTBI" },
    { src: trump, title: "Trump" },
    { src: mundo, title: "Mundo" },
    { src: toro, title: "Toro" },
    { src: dientes, title: "Dientes" },
    { src: tetas, title: "Tetas" },
  ];

  return (
    <div className="min-h-screen">

      {/* === Desktop/Tablet: tu layout original, tal cual === */}
      <div className="hidden md:flex min-h-screen px-30 py-10 items-start justify-end mr-12 mt-14">
        <div className="grid grid-cols-3 gap-x-1 gap-y-10">
          {cuadros.map((p, i) => (
            <div
              key={i}
              className="h-[225px] flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img src={p.src} alt={p.title} className="h-full w-auto object-contain rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* === Móvil: 1 cuadro por pantalla con scroll snap === */}
      <div className="md:hidden h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
        {cuadros.map((p, i) => (
          <section key={i} className="snap-start h-screen flex items-center justify-center p-4">
            <img src={p.src} alt={p.title} className="max-h-[85vh] w-auto object-contain rounded-md shadow-xl" />
          </section>
        ))}
      </div>

    </div>
  );
}
