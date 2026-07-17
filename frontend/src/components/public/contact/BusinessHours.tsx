import { Calendar } from "lucide-react"

export default function BusinessHours() {
  const schedule = [
    { days: "Saturday - Thursday", hours: "09:00 AM - 06:00 PM", status: "Open" },
    { days: "Friday", hours: "Closed", status: "Closed" }
  ]

  return (
    <section className="py-12 border-y border-light-border dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-xl">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-50 tracking-tight">Business Hours</h3>
          </div>
          <div className="divide-y divide-light-border dark:divide-zinc-800/60">
            {schedule.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
                <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">{item.days}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{item.hours}</span>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${item.status === "Open" ? "bg-emerald-500/10 text-emerald-500" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400"}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}