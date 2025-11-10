import React from 'react'

function CardPaint({ imagen, titulo, descripcion }) {
  return (
    <div className="bg-white dark:bg-neutral-950  overflow-hidden w-200 text-center transition-transform hover:scale-105">
      <img src={imagen} alt={titulo} className="w-[470px] h-[470px] object-contain"  />
      <h2 className="font-ko text-lg font-semibold mt-2">{titulo}</h2>
      <p className="font-ko text-sm text-neutral-600 dark:text-neutral-300 px-2 mb-3">
        {descripcion}
      </p>
    </div>
  );
}

export default CardPaint;
