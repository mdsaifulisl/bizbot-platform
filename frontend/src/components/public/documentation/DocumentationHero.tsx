import { BookOpen, Terminal, Cpu, Flame } from "lucide-react"

export default function DocumentationHero() {
  // Quick stats/links for developers
  const quickLinks = [
    {
      title: "Quick Start",
      desc: "Get running in 5 minutes",
      icon: Terminal,
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "API Reference",
      desc: "Endpoints & Schemas",
      icon: CodeIcon, // Fallback safe icon locally mapped or imported
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Core Concepts",
      desc: "How our system architecture works",
      icon: Cpu,
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-light-bg dark:bg-dark-bg py-20 lg:py-28 border-b border-light-border dark:border-zinc-800/80 text-left">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/5" />
        <div className="absolute bottom-[-10%] right-[10%] w-[250px] h-[250px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5 animate-pulse" /> Version 2.0 Docs Live
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.1]">
              How can we <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                help you build?
              </span>
            </h1>
            
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-semibold max-w-xl leading-relaxed">
              Explore our structured guides, production-ready code snippets, and deep-dive API documentation to integrate faster and scale effortlessly.
            </p>
          </div>

          {/* Right: Quick Action Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {quickLinks.map((link, idx) => {
              const Icon = link.icon
              return (
                <div
                  key={idx}
                  className="group flex items-start gap-4 p-5 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-2xl hover:border-zinc-400 dark:hover:border-zinc-750 hover:shadow-lg hover:shadow-emerald-500/[0.01] transition-all duration-300 cursor-pointer"
                >
                  <div className={`p-3 rounded-xl border ${link.color} transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-black text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 font-bold">
                      {link.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

// Fallback Icon Helper
function CodeIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  )
}