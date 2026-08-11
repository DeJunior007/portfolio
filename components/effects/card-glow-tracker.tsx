"use client";

import { useEffect } from "react";

export function CardGlowTracker() {
  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    let raf = 0;
    let pending = false;
    let clientX = 0;
    let clientY = 0;

    const update = () => {
      pending = false;
      const cards = document.querySelectorAll<HTMLElement>(".glow-card");
      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        if (clientY < r.top - 400 || clientY > r.bottom + 400) return;
        card.style.setProperty("--glow-x", `${clientX - r.left}px`);
        card.style.setProperty("--glow-y", `${clientY - r.top}px`);
      });
    };

    const onMove = (e: PointerEvent) => {
      clientX = e.clientX;
      clientY = e.clientY;
      if (!pending) {
        pending = true;
        raf = requestAnimationFrame(update);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
