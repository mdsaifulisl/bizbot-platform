const TESTIMONIALS = [
  { name: "John Doe", role: "CEO, TechFlow", quote: "BotSaiful has drastically reduced our support response time to zero seconds." },
  { name: "Adnan Rahman", role: "Product Manager, E-Shop", quote: "Connecting the AI to our Shopify inventory took exactly 3 minutes. Highly recommended!" }
]

export default function Testimonials() {
  return (
    <section className="space-y-6">
      <div className="text-center sm:text-left">
        <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
          Testimonials
        </h3>
        <h2 className="text-2xl sm:text-3.5xl font-black text-zinc-900 dark:text-zinc-50 mt-1">
          Loved by Scaleups
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {TESTIMONIALS.map((t, idx) => (
          <div
            key={idx}
            className="p-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-2xl space-y-3"
          >
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 italic leading-relaxed">
              "{t.quote}"
            </p>
            <div>
              <p className="text-sm font-bold text-zinc-800 dark:text-zinc-100">{t.name}</p>
              <p className="text-[10px] uppercase font-black tracking-wider text-zinc-400 dark:text-zinc-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}