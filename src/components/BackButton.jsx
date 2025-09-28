// src/components/BackButton.jsx
import { Link } from "react-router-dom";
import VolverLogo from "./VolverLogo";

const BackButton = () => (
  <Link to="/projects" className="
        fixed bottom-3 left-1/2 -translate-x-1/2
        md:left-16 md:translate-x-0
        z-50 cursor-pointer
      ">
    <VolverLogo className="w-[150px] h-auto hover:scale-110 transition-transform duration-300" />
  </Link>
);

export default BackButton;