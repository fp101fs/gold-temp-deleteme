"use client";

import { useEffect, useRef, useState } from "react";

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="glass-glow relative mt-32 overflow-hidden rounded-3xl p-10 text-center sm:p-16"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Animated decorative rings */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full border border-gold-500/10"
        style={{
          animation: inView ? "spin 30s linear infinite" : "none",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-gold-400/10"
        style={{
          animation: inView ? "spin 25s linear infinite reverse" : "none",
        }}
      />

      <h2 className="text-gradient-gold text-3xl font-bold sm:text-4xl">
        Ready for the Midas touch?
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-gold-200/60">
        Join thousands of teams already building on Aureum. Start free, scale
        as you grow.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#"
          className="rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 px-10 py-4 text-sm font-semibold text-[#0f0b05] shadow-lg shadow-gold-500/30 transition-all duration-300 hover:shadow-gold-400/50 hover:brightness-110 hover:scale-105"
        >
          Start Free Trial
        </a>
        <a
          href="#"
          className="rounded-xl border border-gold-500/20 px-10 py-4 text-sm font-semibold text-gold-200 transition-all duration-300 hover:bg-gold-500/10 hover:border-gold-400/40 hover:scale-105"
        >
          Talk to Sales
        </a>
      </div>
    </section>
  );
}
