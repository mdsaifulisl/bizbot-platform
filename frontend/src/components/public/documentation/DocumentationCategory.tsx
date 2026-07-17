import { useState } from "react"
import { Search, ChevronRight, BookOpen, Layers, Terminal, Sparkles, Code2, ShieldAlert, Cpu } from "lucide-react"

export default function DocumentationCategory() {
  const [searchQuery, setSearchQuery] = useState("")

  // 1. Categories Data
  const categories = [
    {
      title: "Getting Started",
      count: "12 Articles",
      icon: Terminal,
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/10",
      desc: "Basic installations, setup guides, and project initialization steps."
    },
    {
      title: "API Reference",
      count: "24 Articles",
      icon: Code2,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/10",
      desc: "Complete details on all endpoints, payload structures, and response schemas."
    },
    {
      title: "Security & Auth",
      count: "8 Articles",
      icon: ShieldAlert,
      color: "text-rose-500 bg-rose-500/10 border-rose-500/10",
      desc: "Implement JWT, session handling, OAuth flow, and role-based access."
    },
    {
      title: "Advanced Integrations",
      count: "15 Articles",
      icon: Cpu,
      color: "text-amber-500 bg-amber-500/10 border-amber-500/10",
      desc: "Setting up webhooks, background tasks with PM2, and multi-tenant DBs."
    }
  ]

  // 2. Popular Guides Data
  const popularGuides = [
    {
      title: "Database Syncing with MongoDB & SQL",
      tag: "Database",
      tagColor: "text-emerald-500 bg-emerald-500/10",
      readTime: "6 min read"
    },
    {
      title: "Custom Middleware Setup in ExpressJS",
      tag: "Backend",
      tagColor: "text-blue-500 bg-blue-500/10",
      readTime: "4 min read"
    },
    {
      title: "Best Practices for JWT Refresh Tokens",
      tag: "Security",
      tagColor: "text-rose-500 bg-rose-500/10",
      readTime: "8 min read"
    },
    {
      title: "Optimizing NextJS Dynamic Routes for SEO",
      tag: "Frontend",
      tagColor: "text-purple-500 bg-purple-500/10",
      readTime: "5 min read"
    }
  ]

  return (
    <div className="bg-light-bg dark:bg-dark-bg">
      
      {/* =========================================================
          1. DocumentationSearch Section
          ========================================================= */}
      {/* <section className="py-12 border-b border-light-border dark:border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation, components, API codes..."
              className="w-full pl-12 pr-4 py-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800 rounded-2xl text-base font-medium text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all duration-200 shadow-sm"
            />
          </div>
        </div>
      </section> */}

      {/* =========================================================
          2. DocumentationCategory Section
          ========================================================= */}
      <section className="py-16 border-b border-light-border dark:border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-500" /> Browse by Topic
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-500 font-semibold mt-1">
              Find structured documentation and step-by-step implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between p-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-2xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl border border-transparent ${cat.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                        {cat.count}
                      </span>
                    </div>
                    <div className="space-y-1.5 text-left">
                      <h3 className="text-sm font-black text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-zinc-400 dark:text-zinc-550 font-semibold leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-bold text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Articles <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. PopularGuides Section
          ========================================================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-500" /> Popular Guides
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-500 font-semibold mt-1">
              Our community's most-read configurations and optimization secrets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularGuides.map((guide, idx) => (
              <div
                key={idx}
                className="group p-5 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-2xl flex items-center justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="hidden sm:flex p-3 bg-zinc-100 dark:bg-zinc-800/60 rounded-xl text-zinc-400 group-hover:text-emerald-500 transition-colors">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${guide.tagColor}`}>
                        {guide.tag}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-bold">
                        {guide.readTime}
                      </span>
                    </div>
                    <h3 className="text-sm font-black text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {guide.title}
                    </h3>
                  </div>
                </div>
                <div className="p-2 text-zinc-400 group-hover:text-emerald-500 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}