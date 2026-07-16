import { useState } from "react"
import { ShoppingBag, Utensils, Home, Briefcase, Building2, User, ArrowRight } from "lucide-react"
import Button from "@/components/ui/Button"

export default function TemplatesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const templates = [
    { title: "E-commerce", icon: ShoppingBag, desc: "Modern storefronts with quick checkout & regional logistics.", tag: "Popular" },
    { title: "Restaurant", icon: Utensils, desc: "Interactive menus and online reservation capabilities.", tag: "Fresh" },
    { title: "Real Estate", icon: Home, desc: "Property listing management with advanced search filters.", tag: "New" },
    { title: "Agency", icon: Briefcase, desc: "High-converting layouts for dynamic creative studios.", tag: "Trending" },
    { title: "Company", icon: Building2, desc: "Professional corporate identities to establish solid trust.", tag: "Classic" },
    { title: "Portfolio", icon: User, desc: "Minimalist and clean spaces for developers & designers.", tag: "Hot" },
  ]

  return (
    <section className="py-24 pt-0 lg:pt-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড রেডিয়াল ডেকোরেশন */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 text-left">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              Pre-built <span className="text-emerald-500 dark:text-emerald-400">Website Templates</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-xl">
              Production-ready, ultra-premium configurations optimized for maximum performance and lightning-fast deployment.
            </p>
          </div>
          
          {/* টপ ভিউ অল বাটন (ডেস্কটপ) */}
          <div className="hidden md:block">
            <Button variant="outline" className="gap-2 group">
              View All Templates
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* ৬টি প্রিমিয়াম কার্ডের গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {templates.map((template, idx) => {
            const Icon = template.icon
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative p-6 sm:p-8 rounded-2xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:border-emerald-500/30 dark:hover:border-emerald-500/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* কার্ড টপ (আইকন ও ব্যাজ) */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-light-bg dark:bg-zinc-900 border border-light-border dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl group-hover:text-emerald-500 group-hover:border-emerald-500/20 transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
                      {template.tag}
                    </span>
                  </div>

                  {/* টাইটেল ও বর্ণনা */}
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">
                    {template.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                    {template.desc}
                  </p>
                </div>

                {/* ইন্টারেক্টিভ কুইক অ্যাকশন লিঙ্ক */}
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Preview Layout</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            )
          })}
        </div>

        {/* বটম ভিউ অল বাটন (মোবাইল স্ক্রিনের জন্য রেসপনসিভ) */}
        <div className="mt-10 text-center md:hidden">
          <Button variant="outline" className="w-full gap-2 justify-center">
            View All Templates
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </section>
  )
}