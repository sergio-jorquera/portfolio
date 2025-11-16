// RootLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./../components/NavBar";
import LanguageSwitcher from "./../components/LanguageSwitcher";

export default function RootLayout() {
  const location = useLocation();

  // Rutas que SÍ deben tener scroll
  const scrollRoutes = ["/branding", "/ilustrations", "/paginas-web"]; // ajusta nombres reales
  const isScrollPage = scrollRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-4 py-3 shrink-0">
        <NavBar />
        <LanguageSwitcher />
      </header>

      {/* Contenedor de página: solo estas rutas scrollean */}
      <div className={`flex-1 min-h-0 ${isScrollPage ? "overflow-y-auto" : "overflow-hidden"}`}>
        <Outlet />
      </div>
    </div>
  );
}