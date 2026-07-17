import { useState } from "react"
import { 
  ChevronRight, 
  Terminal, 
  FileText, 
  Settings, 
  Layers, 
  ShieldCheck, 
  Copy, 
  Check, 
  BookOpen,
  Menu,
  X
} from "lucide-react"

// ==========================================
// Types & Interfaces
// ==========================================
interface SidebarItem {
  title: string
  slug: string
  icon?: React.ComponentType<{ className?: string }>
}

interface SidebarSection {
  sectionTitle: string
  items: SidebarItem[]
}

export default function DocumentationContent() {
  const [activeArticle, setActiveArticle] = useState("quick-start")
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  // ১. Sidebar Navigation Data
  const sidebarData: SidebarSection[] = [
    {
      sectionTitle: "Getting Started",
      items: [
        { title: "Introduction", slug: "introduction", icon: BookOpen },
        { title: "Quick Start", slug: "quick-start", icon: Terminal },
        { title: "Installation", slug: "installation", icon: Settings },
      ],
    },
    {
      sectionTitle: "Architecture",
      items: [
        { title: "Folder Structure", slug: "folder-structure", icon: Layers },
        { title: "Database Syncing", slug: "database-sync", icon: Layers },
      ],
    },
    {
      sectionTitle: "Security",
      items: [
        { title: "JWT & Auth Flow", slug: "jwt-auth", icon: ShieldCheck },
        { title: "Route Protection", slug: "route-protection", icon: ShieldCheck },
      ],
    },
  ]

  // ২. Code Copy Handler
  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCodeId(id)
    setTimeout(() => setCopiedCodeId(null), 2000)
  }

  // ৩. Sample Code Snippet to Render
  const installCode = `npm install @expert-coder/core-api
# or using yarn
yarn add @expert-coder/core-api`

  const usageCode = `import { initializeApp } from '@expert-coder/core-api';

const app = initializeApp({
  apiKey: process.env.EXPERT_API_KEY,
  environment: 'production'
});

console.log("System Status:", app.status());`

  return (
    <section className="bg-light-bg dark:bg-dark-bg min-h-screen py-10 border-b border-light-border dark:border-zinc-800/80 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Sidebar Toggle Button */}
        <div className="lg:hidden flex items-center justify-between pb-4 mb-6 border-b border-light-border dark:border-zinc-800">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-300 px-3 py-2 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800 rounded-xl cursor-pointer"
          >
            <Menu className="w-4 h-4 text-emerald-500" /> Menu
          </button>
          <span className="text-xs font-bold text-zinc-400">Quick Start Guide</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* =========================================================
              Sidebar Navigation (Left Column) - 3 Columns Span
             ========================================================= */}
          <aside className={`lg:col-span-3 lg:block fixed inset-0 z-50 lg:relative lg:z-auto bg-light-bg dark:bg-dark-bg lg:bg-transparent p-6 lg:p-0 transition-transform duration-300 lg:translate-x-0 ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
            <div className="flex items-center justify-between lg:hidden mb-6">
              <span className="text-sm font-black text-zinc-800 dark:text-zinc-200">Documentation Menu</span>
              <button 
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-8 sticky top-10">
              {sidebarData.map((section, sIdx) => (
                <div key={sIdx} className="space-y-2.5">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    {section.sectionTitle}
                  </h4>
                  <ul className="space-y-1">
                    {section.items.map((item) => {
                      const Icon = item.icon || FileText
                      const isActive = activeArticle === item.slug

                      return (
                        <li key={item.slug}>
                          <button
                            onClick={() => {
                              setActiveArticle(item.slug)
                              setMobileSidebarOpen(false)
                            }}
                            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                              isActive
                                ? "bg-emerald-500/10 text-emerald-500 border-l-2 border-emerald-500 pl-4"
                                : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isActive ? "text-emerald-500" : "text-zinc-400"}`} />
                            {item.title}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Backdrop for Mobile Sidebar */}
          {mobileSidebarOpen && (
            <div 
              onClick={() => setMobileSidebarOpen(false)} 
              className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs" 
            />
          )}

          {/* =========================================================
              Main Content Reader (Center Column) - 7 Columns Span
             ========================================================= */}
          <main className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-zinc-400">
                <span>Docs</span>
                <ChevronRight className="w-3 h-3" />
                <span>Getting Started</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-emerald-500">Quick Start</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
                Quick Start Guide
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed">
                Welcome to the Quick Start guide. In this tutorial, you will learn how to integrate our core package into your modern React or Next.js layout in just under five minutes.
              </p>
            </div>

            {/* Steps Section */}
            <div className="space-y-8 pt-4 border-t border-light-border dark:border-zinc-800/80">
              
              {/* Step 1 */}
              <div className="space-y-3">
                <h3 className="text-base font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-black">1</span>
                  Install the package
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium pl-9">
                  First, run the installation command in your terminal. We support npm, yarn, and pnpm packages.
                </p>

                {/* Code Block */}
                <div className="relative group ml-9 rounded-2xl overflow-hidden border border-light-border dark:border-zinc-800/80 bg-zinc-950">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-900 bg-zinc-900/40">
                    <span className="text-[10px] font-bold text-zinc-500 font-mono">Bash</span>
                    <button
                      onClick={() => handleCopy(installCode, "install")}
                      className="p-1 text-zinc-400 hover:text-emerald-500 transition-colors"
                    >
                      {copiedCodeId === "install" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                    {installCode}
                  </pre>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <h3 className="text-base font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-black">2</span>
                  Initialize Core App
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium pl-9">
                  Import the initializer and trigger the instance with your private environment variables.
                </p>

                {/* Code Block */}
                <div className="relative group ml-9 rounded-2xl overflow-hidden border border-light-border dark:border-zinc-800/80 bg-zinc-950">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-900 bg-zinc-900/40">
                    <span className="text-[10px] font-bold text-zinc-500 font-mono">typescript</span>
                    <button
                      onClick={() => handleCopy(usageCode, "usage")}
                      className="p-1 text-zinc-400 hover:text-emerald-500 transition-colors"
                    >
                      {copiedCodeId === "usage" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                    {usageCode}
                  </pre>
                </div>
              </div>

            </div>
          </main>

          {/* =========================================================
              On This Page / Outline (Right Column) - 2 Columns Span
             ========================================================= */}
          <aside className="hidden lg:block lg:col-span-2 space-y-4 sticky top-10 border-l border-light-border dark:border-zinc-800/50 pl-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              On This Page
            </h4>
            <ul className="space-y-3 text-xs font-bold text-zinc-400 dark:text-zinc-500">
              <li>
                <a href="#install" className="hover:text-emerald-500 transition-colors">
                  1. Installation
                </a>
              </li>
              <li>
                <a href="#usage" className="hover:text-emerald-500 transition-colors">
                  2. Initialization
                </a>
              </li>
              <li>
                <a href="#troubleshooting" className="hover:text-zinc-400 transition-colors">
                  3. Troubleshooting
                </a>
              </li>
            </ul>
          </aside>

        </div>
      </div>
    </section>
  )
}