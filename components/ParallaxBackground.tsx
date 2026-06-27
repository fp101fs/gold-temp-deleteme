"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const layers =
        containerRef.current.querySelectorAll<HTMLDivElement>(
          "[data-parallax]"
        );
      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.parallax || "0.1");
        layer.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Deepest orbs — slowest parallax */}
      <div
        data-parallax="0.02"
        className="absolute -left-[10%] top-[-20%] h-[60vw] w-[60vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        data-parallax="0.04"
        className="absolute right-[-15%] top-[40%] h-[50vw] w-[50vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(231,207,102,0.05) 0%, transparent 65%)",
        }}
      />
      <div
        data-parallax="0.07"
        className="absolute bottom-[-10%] left-[30%] h-[40vw] w-[40vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(223,191,51,0.07) 0%, transparent 60%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        data-parallax="0.03"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating gold particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="animate-float absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(212,175,55,${0.1 + Math.random() * 0.25})`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
