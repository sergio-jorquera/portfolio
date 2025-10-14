// src/components/ThemeToggleButton.jsx
import { useTheme } from "./../context/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl px-3 py-1.5 border border-neutral-300 dark:border-neutral-700
                 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
    >
    
      {theme === "dark" ? "OSCURO" : "CLARO"}
    </button>
  );
}
