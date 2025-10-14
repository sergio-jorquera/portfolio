import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";


const LanguageContext = createContext(null);

export function LanguageProvider({ children, defaultLang = "es" }) {
  // lee el idioma guardado o usa el predeterminado
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || defaultLang);

  // persiste y actualiza <html lang="...">
  useEffect(() => {
    localStorage.setItem("lang", lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  // t("section.key", { name: "Sergio", count: 3 })
  const t = useCallback(
    (key, vars) => {
      const dict = translations[lang];
      const value = key.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), dict);
      if (typeof value !== "string") {
        if (import.meta.env?.DEV) console.warn(`[i18n] Missing key "${key}" for "${lang}"`);
        return key; // fallback visible para detectar faltantes
      }
      return value.replace(/\{\{(\w+)\}\}/g, (_, k) => (vars?.[k] ?? ""));
    },
    [lang]
  );

  const ctx = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={ctx}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within <LanguageProvider>");
  return ctx;
}
