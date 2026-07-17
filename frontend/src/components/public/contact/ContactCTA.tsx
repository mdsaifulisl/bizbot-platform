import { useNavigate } from "react-router-dom"
export default function ContactCTA() {
  const navigate = useNavigate();
  const isLoggedIn = false

  return (
    <section className="py-20 bg-light-card/40 dark:bg-zinc-950/20 text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
          Ready to automate your business?
        </h2>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
          Deploy smart agents, streamline user touchpoints, and scaling operational responses effortlessly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button onClick={() => navigate(isLoggedIn ? '/ai-features' : '/register') } className="px-6 py-3 bg-emerald-500 text-white dark:text-zinc-950 text-xs font-black uppercase tracking-wider rounded-xl shadow-lg cursor-pointer">
            Start Free Trial
          </button>
          <button onClick={() => navigate(isLoggedIn ? '/ai-features' : '/register') } className="px-6 py-3 border border-light-border dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-black uppercase tracking-wider rounded-xl bg-light-card dark:bg-dark-card cursor-pointer">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  )
}