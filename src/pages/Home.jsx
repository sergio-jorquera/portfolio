import { useI18n } from "../i18n/LanguageProvider.jsx";

export default function Home() {
  const { t } = useI18n();

  return (
    <section
      className="font-ko flex flex-col justify-center h-screen gap-4 text-left text-red-500 text-2xl animate animate-balloon px-4"
    >
      <span className="inline-block pointer-events-none">
        <h2 className="text-2xl">
          {t("home.hero_h2")}
        </h2>

        <p className="max-w-xl whitespace-pre-line">
          {t("home.hero_p", { name: "Sergio Jorquera" })}
        </p>
      </span>
    </section>
  );
}



