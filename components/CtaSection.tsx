export default function CtaSection() {
  return (
    <section
      id="cta"
      className="glass-glow relative mt-32 overflow-hidden rounded-3xl p-10 text-center sm:p-16"
    >
      {/* Decorative rings */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full border border-gold-500/10" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-gold-400/10" />

      <h2 className="text-gradient-gold text-3xl font-bold sm:text-4xl">
        Ready for the Midas touch?
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-gold-200/60">
        Join thousands of teams already building on Aureum. Start free,
        scale as you grow.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#"
          className="rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 px-10 py-4 text-sm font-semibold text-[#0f0b05] shadow-lg shadow-gold-500/30 transition-all duration-300 hover:shadow-gold-400/50 hover:brightness-110"
        >
          Start Free Trial
        </a>
        <a
          href="#"
          className="rounded-xl border border-gold-500/20 px-10 py-4 text-sm font-semibold text-gold-200 transition-all duration-300 hover:bg-gold-500/10"
        >
          Talk to Sales
        </a>
      </div>
    </section>
  );
}
