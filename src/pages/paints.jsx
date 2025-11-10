import PaintsCarrusel from "./PaintsCarrusel";

export default function Paints() {   // ✅ con mayúscula
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="font-ko text-2xl font-bold mb-6">Pinturas</h1>
      <p className="font-ko  mb-6 text-neutral-700 dark:text-neutral-300">
        Una selección de obras propias, mostradas una a una en un carrusel interactivo.
      </p>

      {/* Aquí insertas tu carrusel */}
      <PaintsCarrusel />
    </section>
  );
}