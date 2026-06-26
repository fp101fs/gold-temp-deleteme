import GlassCard from "./GlassCard";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <GlassCard className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl">✦</span>
          <span className="text-gradient-gold text-lg font-bold tracking-tight">
            Aureum
          </span>
        </div>

        {/* Links — hidden on small screens */}
        <div className="hidden items-center gap-8 text-sm font-medium text-gold-200/70 sm:flex">
          <a href="#features" className="transition-colors hover:text-gold-300">
            Features
          </a>
          <a href="#cta" className="transition-colors hover:text-gold-300">
            Get Started
          </a>
        </div>

        {/* Right side: Sign In + Mobile menu */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="rounded-lg border border-gold-500/20 px-4 py-1.5 text-xs font-medium text-gold-300 transition-colors hover:bg-gold-500/10"
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
