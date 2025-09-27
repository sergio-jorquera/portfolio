// src/components/BackButton.jsx
import { Link } from "react-router-dom";
import VolverLogo from "./VolverLogo";

const BackButton = () => (
  <Link to="/projects" className="fixed bottom-5 left-[19rem] z-50 cursor-pointer">
    <VolverLogo className="w-[150px] h-auto hover:scale-110 transition-transform duration-300" />
  </Link>
);

export default BackButton;