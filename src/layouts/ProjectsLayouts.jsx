import { Outlet, useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function ProjectsLayouts() {
  const { pathname } = useLocation();
  const showBack = pathname !== "/projects";

  return (
    <div className="relative min-h-screen">
      {showBack && (
        <div className="sticky top-4 left-4 z-50">
          <BackButton />
        </div>
      )}
      <Outlet />
    </div>
  );
}
