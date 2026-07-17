import { Mail, MessageCircle } from "lucide-react"

export default function ContactSupport() {
  return (
    <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="space-y-1 text-center md:text-left">
        <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-50">Still Need Help?</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          If you can't find your answers here, our human support engineers are active 24/7.
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
        <a
          href="mailto:support@botsaiful.com"
          className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-light-border dark:border-zinc-800/60 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
        >
          <Mail className="w-4 h-4 text-zinc-400" />
          support@botsaiful.com
        </a>
        <button className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-all cursor-pointer shadow-sm shadow-emerald-500/10">
          <MessageCircle className="w-4 h-4" />
          Live Chat
        </button>
      </div>
    </div>
  )
}