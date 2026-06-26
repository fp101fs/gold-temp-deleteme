import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-gold-500/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-xl shadow-lg shadow-gold-500/5 transition-all duration-300 hover:shadow-gold-500/10 ${className}`}
    >
      {children}
    </div>
  );
}
