import { Menu } from 'lucide-react';

export default function MenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 right-6 z-50 p-2 text-red-600 transition duration-300"
      aria-label="Abrir menú"
    >
      <Menu size={32} />
    </button>
  );
}
