import { useEffect, useRef } from 'react';

export default function CanvasPen() {
  const canvasRef = useRef(null);
  const trail = useRef([]);

  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');

  // Tamaño 1:1 sin escala retina ni DPR
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 0.5;

  let currentColor = '#e11d48';

  const draw = (e) => {
    const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
    const isOverNav = hoveredElement?.closest('nav');
    currentColor = isOverNav ? '#39ff14' : '#e11d48';

    // No escalado, usamos coords directas del viewport
    const x = e.clientX;
    const y = e.clientY;

    trail.current.push({
      x,
      y,
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
    window.removeEventListener('resize', resizeCanvas);
  };
}, []);

  return (
   <canvas
  ref={canvasRef}
  className="fixed top-0 left-0 w-screen h-screen z-[200000] pointer-events-none"
  style={{ backgroundColor: 'transparent' }}
/>

  );
}
