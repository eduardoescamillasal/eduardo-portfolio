"use client";

import { useEffect, useRef, useState } from "react";

type Particle = { u: number; depth: number; jitter: number; size: number; dx: number; dy: number };

export function ParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const time = useRef(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = canvas?.closest<HTMLElement>(".hero-stage");
    if (!canvas || !stage) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = matchMedia("(pointer: fine)");
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let pointer: { x: number; y: number } | null = null;
    let frame = 0;
    let last = 0;
    let visible = false;
    let color = "#6d7d49";

    function draw() {
      if (!context || !canvas) return;
      context.clearRect(0, 0, width, height);
      context.fillStyle = color;
      const phase = time.current;
      for (const particle of particles) {
        const { u, depth, jitter } = particle;
        const x = u * width + jitter * 3;
        const y = height * (.53 + Math.sin(u * Math.PI * 2.4 + phase + depth * .9) * .18
          + Math.cos(u * Math.PI * 5.2 - phase * .6 - depth) * .065 + (depth - .5) * .61) + jitter * 2;
        let targetX = 0;
        let targetY = 0;
        if (pointer && !motion.matches && !paused) {
          const vx = x - pointer.x;
          const vy = y - pointer.y;
          const distance = Math.hypot(vx, vy);
          const radius = 135;
          if (distance < radius) {
            const strength = (1 - distance / radius) ** 2 * 48;
            targetX = vx / Math.max(distance, 1) * strength;
            targetY = vy / Math.max(distance, 1) * strength;
          }
        }
        particle.dx += (targetX - particle.dx) * .13;
        particle.dy += (targetY - particle.dy) * .13;
        context.globalAlpha = .16 + depth * .55;
        context.fillRect(x + particle.dx, y + particle.dy, particle.size, particle.size);
      }
      context.globalAlpha = 1;
    }

    function tick(now: number) {
      frame = requestAnimationFrame(tick);
      if (now - last < 1000 / 30) return;
      // Bound elapsed time after returning to a background tab.
      time.current += Math.min((now - (last || now)) / 1000, .06) * .22;
      last = now;
      draw();
    }

    function syncAnimation() {
      cancelAnimationFrame(frame);
      frame = 0;
      if (visible && !document.hidden && !motion.matches && !paused) {
        last = 0;
        frame = requestAnimationFrame(tick);
      } else draw();
    }

    function readColor() {
      color = getComputedStyle(canvas!).getPropertyValue("--particle-color").trim() || "#6d7d49";
      draw();
    }

    function resize() {
      if (!canvas || !context) return;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (!width || !height) return;
      const ratio = Math.min(devicePixelRatio || 1, 1.5, 2400 / width);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const columns = width < 600 ? 64 : 128;
      const rows = width < 600 ? 22 : 38;
      particles = [];
      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const seed = Math.sin((row * columns + column + 1) * 127.1) * 43758.5453;
          const jitter = seed - Math.floor(seed);
          particles.push({ u: (column + jitter * .7) / (columns - 1), depth: row / (rows - 1), jitter: jitter - .5, size: .9 + jitter * .9, dx: 0, dy: 0 });
        }
      }
      readColor();
    }

    function move(event: PointerEvent) {
      if (!finePointer.matches || event.pointerType === "touch" || paused || motion.matches) return;
      const rect = canvas!.getBoundingClientRect();
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }
    function leave() { pointer = null; }

    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncAnimation(); });
    const resizeObserver = new ResizeObserver(resize);
    const themeObserver = new MutationObserver(readColor);
    observer.observe(stage);
    resizeObserver.observe(canvas);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    stage.addEventListener("pointermove", move, { passive: true });
    stage.addEventListener("pointerleave", leave);
    motion.addEventListener("change", syncAnimation);
    document.addEventListener("visibilitychange", syncAnimation);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect(); resizeObserver.disconnect(); themeObserver.disconnect();
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", leave);
      motion.removeEventListener("change", syncAnimation);
      document.removeEventListener("visibilitychange", syncAnimation);
    };
  }, [paused]);

  return <div className="particle-wave">
    <canvas ref={canvasRef} aria-hidden="true" />
    <button className="particle-toggle" type="button" aria-label={paused ? "Resume background animation" : "Pause background animation"}
      aria-pressed={paused} onClick={() => setPaused(value => !value)}>
      {paused ? "Resume motion" : "Pause motion"}
    </button>
  </div>;
}
