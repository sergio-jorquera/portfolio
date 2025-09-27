import { Outlet } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function ProjectsLayouts() {
  return (
    <div className="relative min-h-screen">
      <BackButton />   {/* 👈 botón Volver en todas las páginas hijas */}
      <Outlet />       {/* aquí se renderizan Projects, Paints, Portraits, etc. */}
    </div>
  );
}