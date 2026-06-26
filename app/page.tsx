import GlassCard from "@/components/GlassCard";
import NavBar from "@/components/NavBar";
import FeatureCard from "@/components/FeatureCard";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        {/* ── Hero ── */}
        <section className="flex flex-col items-center text-center">
          <span className="glass mb-6 inline-block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-300">
            ✦  Now in Public Beta
          </span>

          <h1 className="text-gradient-gold text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Build on the
            <br />
            Gold Standard
          </h1>

          <p className="mt-6 max-w-2xl text-base text-gold-200/70 sm:text-lg">
            Crafted for teams who refuse to compromise. Aureum delivers
            premium performance, elegant design, and the richness of gold
            — right out of the box.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#features"
              className="glass-strong rounded-xl px-8 py-3.5 text-sm font-semibold text-gold-100 transition-all duration-300 hover:bg-gold-500/20 hover:shadow-gold-500/30"
            >
              Explore Features
            </a>
            <a
              href="#cta"
              className="rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-3.5 text-sm font-semibold text-[#0f0b05] shadow-lg shadow-gold-500/30 transition-all duration-300 hover:shadow-gold-400/50 hover:brightness-110"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="mt-24 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["99.9%", "Uptime"],
            ["12M+", "Requests/D"],
            ["< 45ms", "Latency"],
            ["4.9★", "Rating"],
          ].map(([val, label]) => (
            <GlassCard key={label} className="text-center">
              <div className="text-gradient-gold text-2xl font-bold sm:text-3xl">
                {val}
              </div>
              <div className="mt-1 text-xs text-gold-300/60 sm:text-sm">
                {label}
              </div>
            </GlassCard>
          ))}
        </section>

        {/* ── Features ── */}
        <section id="features" className="mt-32">
          <h2 className="text-gradient-gold mb-4 text-center text-3xl font-bold sm:text-4xl">
            Everything you need
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-gold-200/60">
            No fluff. Just powerful primitives wrapped in an obsessively
            crafted experience.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="⚡"
              title="Blazing Speed"
              desc="Edge-first architecture with sub-50 ms response times globally."
            />
            <FeatureCard
              icon="🔒"
              title="Bank-Grade Security"
              desc="End-to-end encryption, SOC 2 compliance, and zero-trust defaults."
            />
            <FeatureCard
              icon="🎨"
              title="Golden Design"
              desc="A polished glassmorphic UI that feels luxurious at every pixel."
            />
            <FeatureCard
              icon="📊"
              title="Real-Time Analytics"
              desc="Live dashboards with every metric you care about, updated in real time."
            />
            <FeatureCard
              icon="🔌"
              title="API-First"
              desc="REST & GraphQL endpoints with automatic SDK generation."
            />
            <FeatureCard
              icon="🌍"
              title="Global by Default"
              desc="Deploy to 50+ regions with a single click. Your users, everywhere."
            />
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section className="mt-32">
          <GlassCard className="glass-glow mx-auto max-w-3xl p-8 text-center sm:p-12">
            <blockquote className="text-lg font-medium leading-relaxed text-gold-100 sm:text-xl">
              &ldquo;Aureum completely changed how we think about our stack.
              The performance is unreal, and the gold theme? Our team
              actually looks forward to opening the dashboard.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600" />
              <div className="text-left">
                <div className="text-sm font-semibold text-gold-200">
                  Sarah Chen
                </div>
                <div className="text-xs text-gold-400/60">
                  CTO, Luminary Labs
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* ── CTA ── */}
        <CtaSection />

        {/* ── Footer ── */}
        <footer className="mt-32 border-t border-gold-500/10 pt-8 text-center text-xs text-gold-400/40">
          &copy; {new Date().getFullYear()} Aureum, Inc. All rights reserved.
        </footer>
      </main>
    </>
  );
}
