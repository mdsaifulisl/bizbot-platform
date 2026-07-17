import { Zap, Globe, Cpu, Shield, BarChart, Clock } from "lucide-react"

const REASONS = [
  { icon: Zap, title: "Fast Setup", desc: "Integrate and train your custom data models in less than five minutes." },
  { icon: Globe, title: "Multi Platform", desc: "One unified bot engine for Web, WhatsApp, Messenger and more." },
  { icon: Cpu, title: "AI Powered", desc: "Uses specialized LLMs to understand custom contexts flawlessly." },
  { icon: Shield, title: "Enterprise Secure", desc: "We utilize banking-grade data isolation protocols for absolute security." },
  { icon: BarChart, title: "Scalable Build", desc: "Ready to scale from 100 to millions of concurrent customer interactions." },
  { icon: Clock, title: "24/7 Automation", desc: "Instant response system running continuously with zero manual gaps." }
]

export default function WhyChooseUs() {
  return (
    <section className="space-y-6">
      <div className="text-center sm:text-left">
        <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
          Why Choose Us
        </h3>
        <h2 className="text-2xl sm:text-3.5xl font-black text-zinc-900 dark:text-zinc-50 mt-1">
          Engineered for Performance
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {REASONS.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              className="p-5 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/60 rounded-2xl space-y-3 hover:border-emerald-500/20 dark:hover:border-emerald-500/10 transition-all"
            >
              <div className="w-8 h-8 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 flex items-center justify-center">
                <Icon className="w-4 h-4 text-emerald-500" />
              </div>
              <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-100">{item.title}</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}