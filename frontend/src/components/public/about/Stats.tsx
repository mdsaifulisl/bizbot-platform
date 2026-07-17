const STATS = [
  { val: "10+", label: "Completed Projects" },
  { val: "99.9%", label: "System Uptime" },
  { val: "24/7", label: "Client Support" },
  { val: "100%", label: "Secure Database Protocols" }
]

export default function Stats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {STATS.map((stat, idx) => (
        <div
          key={idx}
          className="p-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-2xl text-center space-y-1 hover:border-emerald-500/10 transition-all"
        >
          <p className="text-2xl sm:text-4xl font-black text-emerald-500 dark:text-emerald-400">
            {stat.val}
          </p>
          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  )
}