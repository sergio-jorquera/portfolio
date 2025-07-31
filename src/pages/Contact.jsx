// ContactForm.jsx
import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/contacto/", form);
      alert("Mensaje enviado correctamente");
      setForm({ nombre: "", email: "", mensaje: "" });
    } catch (error) {
      alert("Hubo un error al enviar el mensaje");
    }
  };

  return (
   <form 
  onSubmit={handleSubmit} 
  className="max-w-lg mx-auto pt-20 p-6 bg-white rounded-2xl flex flex-col gap-5 min-h-screen"
>
  <h2 className="text-2xl font-light relative font-ko text-center text-red-500">Contáctame</h2>

  <input
    type="text"
    name="nombre"
    placeholder="Tu nombre"
    value={form.nombre}
    onChange={handleChange}
    required
    className="relative font-ko border border-red-500 rounded-lg focus:outline-none focus:ring-red-600 text-red-500 transition placeholder-red-300 pl-4 pr-4 py-3"
  />

  <input
    type="email"
    name="email"
    placeholder="Tu email"
    value={form.email}
    onChange={handleChange}
    required
    className="relative font-ko border border-red-500 rounded-lg focus:outline-none focus:ring-red-600 text-red-500  transition placeholder-red-300 pl-4 pr-4 py-3"
  />

  <textarea
    name="mensaje"
    placeholder="Tu mensaje"
    value={form.mensaje}
    onChange={handleChange}
    required
    className="relative font-ko border border-red-500 rounded-lg min-h-[120px] resize-none focus:outline-none focus:ring-red-600 text-red-500  transition placeholder-red-300 pl-4 pr-4 py-3"
  />

  <button
    type="submit"
    className="bg-red-500 relative font-ko text-white font-bold py-3 rounded-lg hover:bg-red-500 transition"
  >
    Enviar
  </button>
</form>

  );
}

export default ContactForm;
