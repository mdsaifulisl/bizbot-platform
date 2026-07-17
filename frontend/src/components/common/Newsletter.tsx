import { Mail, ArrowRight } from "lucide-react"

export default function NewsletterSection() {
  return (
    <section className="py-16 rounded-2xl bg-light-card dark:bg-dark-card border-y border-light-border dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-light-bg dark:bg-zinc-900/50 p-8 sm:p-12 rounded-3xl border border-light-border dark:border-zinc-800 shadow-sm">
          
          {/* Text Content */}
          <div className="text-center md:text-left space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">
              Newsletter
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
              Stay Updated
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              Get the latest AI & Website tips.
            </p>
          </div>

          {/* Form */}
          <form className="w-full md:w-auto flex items-center gap-2">
            <div className="relative flex-1 md:w-72">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border border-light-border dark:border-zinc-700 rounded-xl text-sm font-semibold text-zinc-900 dark:text-zinc-100 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-all duration-300 shadow-sm"
              />
            </div>
            
            <button
              type="submit"
              className="px-6 py-3 bg-zinc-900 dark:bg-emerald-500 hover:bg-emerald-600 text-white dark:text-zinc-950 text-sm font-black uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/10"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}