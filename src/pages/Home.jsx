// src/pages/Home.jsx
export default function Home() {
  return (
    
    <section className="font-ko flex flex-col justify-center h-screen gap-4 text-left  text-red-500 text-2xl animate animate-balloon" style={{ padding: '1rem' }}>
      <span className="inline-block pointer-events-none">
     
        <h2>Bienvenido a mi portafolio</h2>
        <p className="max-w-xl">
          Mi nombre es
          Sergio Jorquera, soy desarrollador full stack, en este portfolio podrás saber más sobre mí,
          y te enseñaré algunos de los trabajos que he hecho hasta ahora.
        </p>
      </span>
      
    </section>
  );
}
