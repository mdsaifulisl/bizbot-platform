import { Target, Eye } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="grid gap-6 sm:grid-cols-2">
      <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-emerald-500/20 transition-all">
        <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
          <Target className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-50">Our Mission</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          To build clean, intuitive, and high-performance AI integration systems that eliminate manual response delays, allowing businesses to operate 24/7 autonomously.
        </p>
      </div>

      <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-emerald-500/20 transition-all">
        <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
          <Eye className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-50">Our Vision</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          To establish BotSaiful as the most efficient, developer-friendly, and reliable AI chatbot partner for companies scaling in local and international markets.
        </p>
      </div>
    </section>
  )
}