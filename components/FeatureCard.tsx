"use client";

import { useState } from "react";
import GlassCard from "./GlassCard";

interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GlassCard className="glass-card-hover group relative overflow-hidden">
        {/* Hover glow orb */}
        <div
          className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full transition-all duration-500"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1.5)" : "scale(0.5)",
          }}
        />

        {/* Icon with animated ring */}
        <div className="relative mb-4 inline-block">
          <div
            className="absolute inset-0 rounded-full transition-all duration-500"
            style={{
              boxShadow: hovered
                ? "0 0 30px rgba(212,175,55,0.3)"
                : "0 0 0px rgba(212,175,55,0)",
            }}
          />
          <span className="relative z-10 inline-block text-2xl transition-transform duration-300 group-hover:scale-110">
            {icon}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-gold-200 transition-colors duration-300 group-hover:text-gold-100">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gold-300/60 transition-colors duration-300 group-hover:text-gold-200/80">
          {desc}
        </p>

        {/* Bottom highlight line */}
        <div
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-gold-400/0 via-gold-400/60 to-gold-400/0 transition-all duration-500"
          style={{
            width: hovered ? "100%" : "0%",
          }}
        />
      </GlassCard>
    </div>
  );
}
