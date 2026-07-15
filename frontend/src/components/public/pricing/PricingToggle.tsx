import { Sparkles } from "lucide-react"

interface PricingToggleProps {
  billingPeriod: "monthly" | "yearly"
  setBillingPeriod: (period: "monthly" | "yearly") => void
}

export default function PricingToggle({ billingPeriod, setBillingPeriod }: PricingToggleProps) {
  return (
    <div 
      id="pricing-toggle-section" 
      className="py-0 pb-20 bg-light-bg dark:bg-dark-bg text-center transition-colors duration-300 relative z-20"
    >
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-800/80 p-2 rounded-2xl shadow-sm">
        
        {/* টগল বাটন কন্টেইনার */}
        <div className="flex items-center bg-zinc-100 dark:bg-zinc-950/60 p-1 rounded-xl border border-zinc-200/40 dark:border-zinc-800/30">
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-black tracking-tight transition-all duration-200 cursor-pointer focus:outline-none ${
              billingPeriod === "monthly"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-sm border border-zinc-200/50 dark:border-zinc-700/30"
                : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300"
            }`}
          >
            Monthly Billing
          </button>
          
          <button
            onClick={() => setBillingPeriod("yearly")}
            className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-black tracking-tight transition-all duration-200 cursor-pointer focus:outline-none ${
              billingPeriod === "yearly"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-sm border border-zinc-200/50 dark:border-zinc-700/30"
                : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300"
            }`}
          >
            Yearly Billing
          </button>
        </div>

        {/* ডিসকাউন্ট ব্যাজ */}
        <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/[0.06] border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-black uppercase tracking-wider animate-pulse sm:mr-2">
          <Sparkles className="w-3.5 h-3.5 fill-emerald-500/10" />
          Save 20% on Yearly
        </div>

      </div>
    </div>
  )
}