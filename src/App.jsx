// src/App.jsx
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import ProjectsLayouts from "./layouts/ProjectsLayouts.jsx";

import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Portraits from "./pages/Portraits.jsx";
import Paints from "./pages/paints.jsx";
import Contact from "./pages/Contact.jsx";
import Ilustrations from "./pages/Ilustrations.jsx";
import Branding from "./pages/Branding";
import BrandingPaz from "./pages/BrandingPaz.jsx";
import BrandingOaxaca from "./pages/BrandingOaxaca.jsx";

export default function App() {
  return (
    <Routes>
      {/* Todo el sitio usa RootLayout */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Subárbol /projects con su propio layout (BackButton) */}
        <Route path="/projects" element={<ProjectsLayouts />}>
          <Route index element={<Projects />} />
          <Route path="portraits" element={<Portraits />} />
          <Route path="paints" element={<Paints />} />
          <Route path="ilustrations" element={<Ilustrations />} />
          <Route path="branding" element={<Branding />} />
          <Route path="branding/paz" element={<BrandingPaz />} />
          <Route path="branding/oaxaca" element={<BrandingOaxaca />} />
          <Route path="webs" element={<div>Webs</div>} />
        </Route>
      </Route>
    </Routes>
  );
}
