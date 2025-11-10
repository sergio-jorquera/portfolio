// src/components/BackButton.jsx
import { Link } from "react-router-dom";
import { useI18n } from "./../i18n/LanguageProvider";   // 👈 MISMO HOOK QUE EL SWITCHER
import VolverLogo from "./VolverLogo";
import BackLogo from "./BackLogo";

const BackButton = () => {
  const { lang } = useI18n();                 // 👈 leemos lang del contexto
  const isEnglish = lang === "en";            // en/en-GB/en-US -> ajusta si hace falta

  return (
    <Link
      to="/projects"
      className="
        fixed
        left-1/2 -translate-x-1/2
        bottom-[80px]
        md:left-[140px] md:translate-x-0
        z-[9999] cursor-pointer
      "
    >
      {isEnglish ? (
        <BackLogo
          className="
            block
        h-9 w-auto
        -translate-y-4
        text-black dark:text-red-500
        hover:scale-110
        transition-transform duration-300
          "
        />
      ) : (
        <VolverLogo
      className="
        block
        h-10 w-auto
        -translate-y-4
        text-black dark:text-red-500
        hover:scale-110
        transition-transform duration-300
      "
    />
      )}
    </Link>
  );
};

export default BackButton;
