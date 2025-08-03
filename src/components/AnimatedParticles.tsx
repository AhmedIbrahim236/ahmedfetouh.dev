"use client";

import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const AnimatedParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const createParticles = () => {
      particles.length = 0;
      const particleCount = Math.min(Math.floor((width * height) / 20000), 80);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const isDarkMode = document.documentElement.classList.contains("dark");

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > width || p.x < 0) p.speedX *= -1;
        if (p.y > height || p.y < 0) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode
          ? `rgba(255, 255, 255, ${p.opacity})`
          : `rgba(60, 60, 90, ${p.opacity * 1.5})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 100 * 100) {
            const opacity = 0.1 * (1 - Math.sqrt(distSq) / 100);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDarkMode
              ? `rgba(255, 255, 255, ${opacity})`
              : `rgba(60, 60, 90, ${opacity * 1.5})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const resize = () => {
      setCanvasSize();
      createParticles();
    };

    setCanvasSize();
    createParticles();
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 opacity-30 select-none"
      aria-hidden
    />
  );
};

export default AnimatedParticles;
