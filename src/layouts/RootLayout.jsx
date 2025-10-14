import { Outlet } from "react-router-dom";
import NavBar from "./../components/NavBar";
import LanguageSwitcher from "./../components/LanguageSwitcher";

export default function RootLayout() {
  return (
    <div className="min-h-dvh">
      <header className="flex items-center justify-between px-4 py-3">
        <NavBar />
        <LanguageSwitcher /> {/* ← visible en TODAS las páginas */}
      </header>

      <main className="px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
