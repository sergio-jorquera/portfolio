// src/layouts/RootLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useState, useMemo } from "react";

import NavBar from "../components/NavBar";
import MenuButton from "../components/MenuButton.jsx";
import ThemeToggleButton from "../components/ThemeToggleButton.jsx";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import MusicButton from "../components/MusicButton.jsx";
import CanvasPen from "../components/CanvasPen.jsx";
// import UiHud from "../components/UiHud.jsx"; // si quieres, colócalo al final

export default function RootLayout() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Rutas que SÍ deben permitir scroll interno (ajusta a tus paths reales)
  const scrollRoots = ["/projects", "/branding", "/ilustrations", "/paginas-web"];
  const isScrollPage = useMemo(
    () => scrollRoots.some((r) => location.pathname.toLowerCase().startsWith(r)),
    [location.pathname]
  );

  return (
    <div className="min-h-dvh flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
      {/* Header común */}
      <header className="sticky top-24 z-50 ">
  {/* FULL WIDTH y pegado a la izquierda */}
  <div className="w-full h-14 px-4 flex items-center gap-3">
          {/* Botón rayo visible cuando menú está cerrado */}
          {!isMenuOpen && (
            <MenuButton onClick={() => setIsMenuOpen(true)} />
          )}

         
            <ThemeToggleButton />
            <MusicButton />
            <LanguageSwitcher />
          
        </div>
      </header>

      {/* Menú lateral + backdrop */}
      {isMenuOpen && (
        <>
        <NavBar onClose={() => setIsMenuOpen(false)} /> 
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        </>
      )}

      {/* Herramienta de dibujo (siempre o solo en algunas rutas, como prefieras) */}
       <CanvasPen /> 

      {/* Contenido de cada página */}
      <main className={`flex-1 min-h-0 ${isScrollPage ? "overflow-y-auto" : "overflow-hidden"}`}>
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <Outlet context={{ isMenuOpen }} />
        </div>
      </main>

      {/* <UiHud />  */}
    </div>
  );
}
