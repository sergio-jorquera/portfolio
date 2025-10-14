
import { useI18n } from "./../i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const toggle = () => setLang(lang === "es" ? "en" : "es");

  return (
    <button
      onClick={toggle}
      className="rounded-full border px-3 py-1 text-sm hover:opacity-80"
      aria-label="Toggle language"
      title="Cambiar idioma"
    >
      {lang.toUpperCase()}
    </button>
  );
}
