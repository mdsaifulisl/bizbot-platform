import { Check, Sparkles } from "lucide-react"

export interface PlanData {
  name: string
  desc: string
  price: string
  period: string
  features: string[]
  buttonText: string
  popular: boolean
}

interface PricingCardProps {
  plan: PlanData
  badgeText?: string // "Best Value" বা "Most Popular" ডাইনামিক করার জন্য
}

export default function PricingCard({ plan, badgeText = "Best Value" }: PricingCardProps) {
  const isPopular = plan.popular

  return (
    <div
      className={`relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 bg-light-card dark:bg-dark-card transition-all duration-300 ${
        isPopular
          ? "border-emerald-500 shadow-xl shadow-emerald-500/[0.03] scale-100 md:scale-[1.03] z-10"
          : "border-light-border dark:border-dark-border hover:shadow-lg"
      }`}
    >
      {/* মোস্ট পপুলার বা বেস্ট ভ্যালু ব্যাজ */}
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-emerald-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">
          <Sparkles className="w-3 h-3 fill-zinc-950" /> {badgeText}
        </span>
      )}

      <div className="space-y-6 text-left">
        {/* প্ল্যান হেডার */}
        <div className="space-y-2">
          <h3 className="text-xl font-black text-zinc-800 dark:text-zinc-50">{plan.name}</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 min-h-[32px] leading-relaxed">{plan.desc}</p>
        </div>

        {/* প্রাইস ডিসপ্লে */}
        <div className="pt-2">
          <span className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50">{plan.price}</span>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold block mt-1">
            {plan.period.startsWith("One") ? plan.period : `/${plan.period}`}
          </span>
        </div>

        <hr className="border-light-border dark:border-zinc-800/60" />

        {/* ফিচার লিস্ট */}
        <ul className="space-y-3.5">
          {plan.features.map((feature, fIdx) => (
            <li key={fIdx} className="flex items-start gap-3">
              <div className="p-0.5 bg-emerald-500/10 text-emerald-500 rounded-md shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* সাবমিট অ্যাকশন বাটন */}
      <div className="pt-8">
        <button
          className={`w-full justify-center text-center font-bold text-xs sm:text-sm py-3 rounded-xl transition-all cursor-pointer focus:outline-none ${
            isPopular
              ? "bg-emerald-500 hover:bg-emerald-600 text-zinc-950 shadow-md shadow-emerald-500/10"
              : "border border-light-border dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900"
          }`}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  )
}