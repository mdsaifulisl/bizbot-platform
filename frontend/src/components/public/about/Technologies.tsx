const TECH_STACK = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Runtime" },
  { name: "Express", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "OpenAI API", category: "AI Logic" },
  { name: "WhatsApp API", category: "Integration" },
  { name: "Meta Developers", category: "Integration" },
  { name: "Stripe", category: "Billing" },
  { name: "Cloudflare", category: "Security" }
]

export default function Technologies() {
  return (
    <section className="space-y-6">
      <div className="text-center sm:text-left">
        <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
          Technology Stack
        </h3>
        <h2 className="text-2xl sm:text-3.5xl font-black text-zinc-900 dark:text-zinc-50 mt-1">
          Robust Modern Stack
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {TECH_STACK.map((tech, idx) => (
          <div
            key={idx}
            className="p-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-xl flex items-center justify-between hover:border-emerald-500/10 transition-all"
          >
            <div>
              <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{tech.name}</p>
              <p className="text-[10px] font-black uppercase text-zinc-400 dark:text-zinc-500 tracking-wider">
                {tech.category}
              </p>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </div>
        ))}
      </div>
    </section>
  )
}