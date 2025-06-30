import { useEffect, useRef } from 'react';

export default function CanvasPen() {
  const canvasRef = useRef(null);
  const trail = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Escalar para pantallas retina
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 0.5;

    let currentColor = '#e11d48'; // color por defecto (rojo)

    const draw = (e) => {
      // Detección real: ¿el puntero está sobre el nav rotado?
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      const isOverNav = hoveredElement?.closest('nav');

      currentColor = isOverNav ? '#39ff14' : '#e11d48'; // verde si está sobre el nav

      trail.current.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now(),
        color: currentColor,
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      const points = trail.current;

      ctx.beginPath();

      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1];
        const b = points[i];
        const age = now - b.time;

        if (age > 150) {
          points.splice(i - 1, 1);
          i--;
          continue;
        }

        ctx.globalAlpha = Math.pow(1 - age / 150, 0.5);
        ctx.strokeStyle = b.color || '#e11d48';

        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // Cabeza del trazo (punto actual)
      if (points.length > 0) {
        const head = points[points.length - 1];
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.fillStyle = head.color || '#e11d48';
        ctx.arc(head.x, head.y, 1.5, 0, 2 * Math.PI);
        ctx.fill();
      }

      requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', draw);
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', draw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[999] pointer-events-none"
      style={{ backgroundColor: 'transparent' }}
    />
  );
}
