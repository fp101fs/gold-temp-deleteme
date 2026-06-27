"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function GlassCard({
  children,
  className = "",
  style,
}: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 transition-all duration-300 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
