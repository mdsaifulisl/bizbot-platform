export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-500/[0.03] dark:bg-emerald-500/[0.015] blur-[160px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-6">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
          About BotSaiful
        </span>
        <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          Building Smarter <span className="text-emerald-500 dark:text-emerald-400">AI Solutions</span> for Modern Businesses
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Helping businesses automate customer conversations through AI, WhatsApp, Messenger, and intelligent website integrations.
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <button className="px-6 py-3 text-xs font-black uppercase tracking-wider bg-emerald-500 text-white dark:text-zinc-950 rounded-xl hover:bg-emerald-600 transition-all cursor-pointer">
            Get Started
          </button>
          <button className="px-6 py-3 text-xs font-black uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all cursor-pointer border border-light-border dark:border-zinc-800">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  )
}