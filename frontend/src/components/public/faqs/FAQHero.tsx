export default function FAQHero() {
  return (
    <section className="relative pt-20 pb-12 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-500/[0.03] dark:bg-emerald-500/[0.015] blur-[160px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
          Frequently Asked <span className="text-emerald-500 dark:text-emerald-400">Questions</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
          Find instantaneous answers to complex technical questions about BotSaiful AI Platform infrastructure and features.
        </p>
      </div>
    </section>
  )
}