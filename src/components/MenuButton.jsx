import { useState } from 'react';
import RayoIcon from './RayoIcon';

export default function MenuButton({ onClick }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onClick(); // abre el menú después de la animación
    }, 800); // debe coincidir con la duración de growShake
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-9 right-14 z-[999] p-2"
    >
      <div
        className={`
          w-[100px] h-[100px] transition-transform 
          hover:rotate-[360deg] hover:duration-500 
          ${isAnimating ? 'animate-growShake' : ''}
        `}
      >
        <RayoIcon className="w-full h-full" />
      </div>
    </button>
  );
}
