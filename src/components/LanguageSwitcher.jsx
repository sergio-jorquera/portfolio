// src/components/LanguageSwitcher.jsx
import { useI18n } from "./../i18n/LanguageProvider";
import FlagEs from "./EsLogo";
import FlagEn from "./EnLogo"; // crea este igual que el español

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const toggle = () => setLang(lang === "es" ? "en" : "es");

  const isSpanish = lang === "es";

  return (
    <button
      onClick={toggle}
      className="
        fixed top-9 right-48 z-[999]
        p-4 hover:opacity-80 transition
        text-black dark:text-red-500
      "
      aria-label="Toggle language"
      title={isSpanish ? "Switch to English" : "Cambiar a español"}
    >
      {isSpanish ? (
        <FlagEs className="w-7 h-7" />
      ) : (
        <FlagEn className="w-7 h-7" />
      )}
    </button>
  );
}
