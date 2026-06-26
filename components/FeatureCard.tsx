import GlassCard from "./GlassCard";

interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <GlassCard className="group">
      <span className="mb-4 inline-block text-2xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <h3 className="mb-2 text-lg font-semibold text-gold-200">{title}</h3>
      <p className="text-sm leading-relaxed text-gold-300/60">{desc}</p>
    </GlassCard>
  );
}
