import { useState, useEffect } from "react";
import { X } from "lucide-react";
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

  const [selected, setSelected] = useState(null); // { src, title } | null

  const openViewer = (item) => setSelected(item);
  const closeViewer = () => setSelected(null);

  // Esc para cerrar + bloquear scroll de fondo mientras está abierto
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && closeViewer();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected]);

  return (
    <div className="min-h-screen">
      {/* Desktop / Tablet (tu layout) */}
      <div className="hidden md:flex min-h-screen px-30 py-10 items-start justify-end mr-12 mt-14">
        <div className="grid grid-cols-3 gap-x-1 gap-y-10">
          {cuadros.map((p, i) => (
            <button
              key={i}
              className="h-[225px] flex items-center justify-center transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:outline-none focus:ring-0"
              onClick={() => openViewer(p)}
              aria-label={`Ver ${p.title}`}
            >
              <img src={p.src} alt={p.title} className="h-full w-auto object-contain rounded-md" />
            </button>
          ))}
        </div>
      </div>

      {/* Móvil: 1 cuadro por pantalla con snap (si lo usas) */}
      <div className="md:hidden h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
        {cuadros.map((p, i) => (
          <section key={i} className="snap-start h-screen flex items-center justify-center p-4">
            <button onClick={() => openViewer(p)} aria-label={`Ver ${p.title}`}>
              <img src={p.src} alt={p.title} className="max-h-[85vh] w-auto object-contain rounded-md shadow-xl" />
            </button>
          </section>
        ))}
      </div>

      {/* Visor simple a pantalla completa */}
      {selected && (
        <div
          role="dialog" aria-modal="true"
          className="fixed inset-0 z-[100000] bg-black/95 flex items-center justify-center"
          
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeViewer(); }}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white"
            aria-label="Cerrar"
          >
            <X />
          </button>

          <div className="p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selected.src}
              alt={selected.title}
              className="max-w-[100vw] max-h-[100vh] w-auto h-auto object-contain select-none cursor-default outline-none"
              draggable={false}
              style={{ cursor: "default" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
