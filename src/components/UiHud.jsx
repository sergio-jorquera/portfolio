import BackButton from "./BackButton";

export default function UiHud() {
  return (
    <div className="fixed inset-0 z-[1000] pointer-events-none">
      {/* Back abajo-izquierda, tamaño fijo */}
      <div className="pointer-events-auto fixed left-[16px] bottom-[16px]">
        <BackButton variant="fixed" />
      </div>
    </div>
  );
}