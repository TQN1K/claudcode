"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  baseOpacity: number;
  opacity: number;
  speed: number;
  phase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  len: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
  timer: number;
  ttl: number;
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: Star[] = [];
    const shooters: ShootingStar[] = [];
    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Regenerate stars on resize
      stars.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 4000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.1,
          baseOpacity: Math.random() * 0.6 + 0.1,
          opacity: 0,
          speed: Math.random() * 0.8 + 0.2,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    // Init shooting stars
    for (let i = 0; i < 4; i++) {
      shooters.push({
        x: 0, y: 0, len: 0, speed: 0, angle: 0,
        opacity: 0, active: false, timer: Math.random() * 8000,
        ttl: 0,
      });
    }

    const activateShooter = (s: ShootingStar) => {
      s.x = Math.random() * canvas.width * 0.7;
      s.y = Math.random() * canvas.height * 0.4;
      s.len = Math.random() * 120 + 60;
      s.speed = Math.random() * 6 + 4;
      s.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
      s.opacity = 1;
      s.active = true;
      s.ttl = (s.len / s.speed) * 16;
      s.timer = 0;
    };

    const draw = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      for (const star of stars) {
        star.opacity =
          star.baseOpacity * (0.5 + 0.5 * Math.sin(t * 0.01 * star.speed + star.phase));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        // Slightly blue-white stars
        const hue = 210 + Math.random() * 20;
        ctx.fillStyle = `hsla(${hue}, 60%, 95%, ${star.opacity})`;
        ctx.fill();
      }

      // Draw nebula clusters (a few large soft circles)
      const nebulae = [
        { x: canvas.width * 0.1, y: canvas.height * 0.2, r: 280, color: "75, 0, 180" },
        { x: canvas.width * 0.85, y: canvas.height * 0.15, r: 220, color: "0, 80, 200" },
        { x: canvas.width * 0.5, y: canvas.height * 0.8, r: 320, color: "100, 0, 200" },
        { x: canvas.width * 0.75, y: canvas.height * 0.65, r: 180, color: "0, 150, 200" },
      ];
      for (const nb of nebulae) {
        const grd = ctx.createRadialGradient(nb.x, nb.y, 0, nb.x, nb.y, nb.r);
        grd.addColorStop(0, `rgba(${nb.color}, 0.055)`);
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(nb.x, nb.y, nb.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw shooting stars
      for (const s of shooters) {
        s.timer++;
        if (!s.active) {
          if (s.timer > s.ttl + Math.random() * 300 + 200) {
            activateShooter(s);
          }
        } else {
          s.x += Math.cos(s.angle) * s.speed;
          s.y += Math.sin(s.angle) * s.speed;
          s.opacity = Math.max(0, 1 - s.timer / s.ttl);

          if (s.opacity <= 0 || s.timer > s.ttl) {
            s.active = false;
            s.timer = 0;
            s.ttl = Math.random() * 500 + 300;
            continue;
          }

          const tx = s.x - Math.cos(s.angle) * s.len;
          const ty = s.y - Math.sin(s.angle) * s.len;
          const grd = ctx.createLinearGradient(tx, ty, s.x, s.y);
          grd.addColorStop(0, `rgba(255,255,255,0)`);
          grd.addColorStop(1, `rgba(200,240,255,${s.opacity * 0.9})`);
          ctx.strokeStyle = grd;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(s.x, s.y);
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
