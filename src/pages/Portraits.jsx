import { useState } from "react";
import leonardCohen from "../assets/imagenes/leonard-cohen.jpg";
import morente from "../assets/imagenes/morente.jpg";
import nina from "../assets/imagenes/nina.jpg";
import dylan from "../assets/imagenes/dylan.jpg";
import yoidiota from "../assets/imagenes/yoidiota.jpg";
import yoSombrero from "../assets/imagenes/yoSombrero.jpg";

// Componente de la galería de retratos

export default function Portraits() {
  const [selected, setSelected] = useState(null);

  const cuadros = [
    { id: 1, src: leonardCohen, position: "object-top" },
    { id: 2, src: morente },
    { id: 3, src: nina },
    { id: 4, src: dylan },
    { id: 5, src: yoidiota },
    { id: 6, src: yoSombrero },
  ];

  return (
    <div className="p-8" >
  <div className="w-[800px] grid grid-cols-3 gap-4 items-end ml-auto">

  {cuadros.map((cuadro) => (
    <div
      key={cuadro.id}
      onClick={() => setSelected(cuadro)}
      className="cursor-pointer"
    >
      <img
        src={cuadro.src}
        alt=""
       className={`w-full h-[300px] object-cover ${cuadro.position || ""}`}
      />
    </div> 
  ))}
</div>



      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.src}
            alt=""
            className="max-w-3xl max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
