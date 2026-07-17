import { Laptop, Cpu, MessageSquare, Send, Code, Layers } from "lucide-react"

const SERVICES = [
  { icon: Laptop, title: "Website Development", desc: "Modern, high-performance, responsive sites tailored to your stack." },
  { icon: Cpu, title: "AI Chatbot Integration", desc: "Train GPT-based agents on your own documentation and documents." },
  { icon: MessageSquare, title: "WhatsApp Automation", desc: "Official and unofficial integrations for scale, CRM sync, and notifications." },
  { icon: Send, title: "Messenger Automation", desc: "Build customer flows and response flows directly on Facebook Pages." },
  { icon: Code, title: "Custom Software", desc: "Bespoke internal software architecture engineered for operations." },
  { icon: Layers, title: "Website Templates", desc: "Beautifully styled Tailwind and React dashboard and portfolio presets." }
]

export default function OurServices() {
  return (
    <section className="space-y-6">
      <div className="text-center sm:text-left">
        <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
          Our Services
        </h3>
        <h2 className="text-2xl sm:text-3.5xl font-black text-zinc-900 dark:text-zinc-50 mt-1">
          End-to-End Capabilities
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {SERVICES.map((srv, idx) => {
          const Icon = srv.icon
          return (
            <div
              key={idx}
              className="p-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/50 rounded-2xl space-y-3 hover:border-emerald-500/20 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-zinc-800 dark:text-zinc-100">{srv.title}</h4>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{srv.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}