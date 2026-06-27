"use client";

import { useEffect, useState } from "react";
import GlassCard from "./GlassCard";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 transition-all duration-500"
      style={{
        transform: scrolled ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      <GlassCard
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500"
        style={{
          backdropFilter: scrolled
            ? "blur(24px)"
            : "blur(12px)",
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0.04)",
          boxShadow: scrolled
            ? "0 8px 40px rgba(212,175,55,0.08)"
            : "none",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl transition-transform duration-300 hover:rotate-12">
            ✦
          </span>
          <span className="text-gradient-gold text-lg font-bold tracking-tight">
            Aureum
          </span>
        </div>

        {/* Links — hidden on small screens */}
        <div className="hidden items-center gap-8 text-sm font-medium text-gold-200/70 sm:flex">
          <a
            href="#features"
            className="relative transition-colors hover:text-gold-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Features
          </a>
          <a
            href="#cta"
            className="relative transition-colors hover:text-gold-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Get Started
          </a>
        </div>

        {/* Right side: Sign In + Mobile menu */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="rounded-lg border border-gold-500/20 px-4 py-1.5 text-xs font-medium text-gold-300 transition-all duration-300 hover:bg-gold-500/10 hover:border-gold-400/40"
          >
            Sign In
          </a>
          <button
            type="button"
            className="rounded-lg border border-gold-500/20 px-3 py-1.5 text-xs font-medium text-gold-400 transition-colors hover:bg-gold-500/10 sm:hidden"
          >
            Menu
          </button>
        </div>
      </GlassCard>
    </nav>
  );
}
