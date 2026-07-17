import { Mail } from "lucide-react"

export default function ContactHero() {
  const scrollToForm = () => {
    document.getElementById("contact-form-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 border-b border-light-border dark:border-zinc-800/50 bg-light-card/30 dark:bg-dark-card/10">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-wider rounded-xl">
          Contact Us
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-none">
          Let's build your AI chatbot together.
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-xl mx-auto">
          Need help? Have questions? We'd love to hear from you. We usually reply within a few hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button 
            onClick={scrollToForm}
            className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 text-white dark:text-zinc-950 text-xs font-black uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-[0.98] transition-all cursor-pointer"
          >
            Contact Form
          </button>
          <span className="text-xs font-bold text-zinc-400">or</span>
          <a 
            href="mailto:support@botsaiful.com" 
            className="flex items-center gap-2 text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:text-emerald-500 transition-colors"
          >
            <Mail className="w-4 h-4 text-emerald-500" /> support@botsaiful.com
          </a>
        </div>
      </div>
    </section>
  )
}