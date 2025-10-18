// src/components/ThemeToggleButton.jsx
import { useTheme } from "../context/ThemeContext";
import lightSwitch from "../assets/imagenes/lightSwitch.svg";
import darkSwitch  from "../assets/imagenes/darkSwitch.svg";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="fixed top-8 left-20 z-[9999] w-44 h-44 transition-transform duration-300 hover:scale-110"
    >
     <img
  src={theme === "dark" ? darkSwitch : lightSwitch}
  alt="Interruptor"
  className={`w-full h-full object-contain transition-transform duration-700 ${
    theme === "dark" ? "translate-y-[-5px]" : "translate-y-[5px]"
  }`}
/>

    </button>
  );
}
