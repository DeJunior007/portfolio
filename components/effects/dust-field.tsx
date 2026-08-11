"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 46;
const INFLUENCE_RADIUS = 140;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  colorKey: "primary" | "secondary";
  baseAlpha: number;
};

export function DustField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let mouseX = -1000;
    let mouseY = -1000;
    let raf = 0;
    let visible = true;

    const colors = { primary: "266 85% 64%", secondary: "195 95% 50%" };
    const readColors = () => {
      const styles = getComputedStyle(document.documentElement);
      colors.primary = styles.getPropertyValue("--primary").trim() || colors.primary;
      colors.secondary = styles.getPropertyValue("--secondary").trim() || colors.secondary;
    };
    readColors();

    const themeObserver = new MutationObserver(readColors);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const particles: Particle[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: Math.random() * 1.6 + 0.6,
          colorKey: Math.random() > 0.5 ? "primary" : "secondary",
          baseAlpha: Math.random() * 0.35 + 0.15,
        });
      }
    };

    resize();
    init();

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };
    const onResize = () => {
      resize();
      init();
    };
    const onVisibility = () => {
      visible = document.visibilityState === "visible";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    const draw = () => {
      if (!visible) {
        raf = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / INFLUENCE_RADIUS);

        if (influence > 0) {
          const dist2 = dist || 1;
          p.vx += (dx / dist2) * influence * 0.02;
          p.vy += (dy / dist2) * influence * 0.02;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const alpha = Math.min(p.baseAlpha + influence * 0.4, 0.85);
        ctx.beginPath();
        ctx.fillStyle = `hsl(${colors[p.colorKey]} / ${alpha})`;
        ctx.arc(p.x, p.y, p.r + influence * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      themeObserver.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0" />;
}
