import { Link } from "react-router-dom";
import PazCover from "../assets/imagenes/PazOctavio.jpg";
import OaxacaCover from "../assets/imagenes/Oaxaca_hand.svg";


export default function Branding() {
  const card = "group block overflow-hidden  lg transition";
  const img ="w-full max-w-[450px] mx-auto object-contain transition group-hover:scale-[1.02] transition";
  const title = "font-ko p-3 text-lg font-medium";

  return (
    <main className="px-4 py-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link to="paz" className={card}>
          <img src={PazCover} alt="Branding Paz" className={img} />
          <div className={title}>Cerveza PAZ</div>
        </Link>

        <Link to="oaxaca" className={card}>
          <img src={OaxacaCover} alt="Branding Oaxaca" className={img} />
          <div className={title}>oaxaca</div>
        </Link>
      </section>
    </main>
  );
}