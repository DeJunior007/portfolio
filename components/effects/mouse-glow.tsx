"use client";

import { useEffect, useRef } from "react";

const BASE_SIZE = 220;
const MAX_SCALE = 2.4;
const REFERENCE_SPEED = 38;

export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion || !ref.current) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let scale = 1;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      const prevX = x;
      const prevY = y;
      x += (targetX - x) * 0.16;
      y += (targetY - y) * 0.16;

      const speed = Math.hypot(x - prevX, y - prevY);
      const targetScale = 1 + Math.min(speed / REFERENCE_SPEED, 1) * (MAX_SCALE - 1);
      scale += (targetScale - scale) * 0.12;

      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - BASE_SIZE / 2}px, ${y - BASE_SIZE / 2}px, 0) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 hidden will-change-transform [@media(hover:hover)_and_(pointer:fine)]:block"
      style={{
        width: BASE_SIZE,
        height: BASE_SIZE,
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, hsl(var(--secondary) / 0.2) 45%, transparent 72%)",
        filter: "blur(24px)",
      }}
    />
  );
}
