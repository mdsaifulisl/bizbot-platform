import { Search } from "lucide-react"

interface FAQSearchProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function FAQSearch({ searchQuery, setSearchQuery }: FAQSearchProps) {
  const tags = ["WhatsApp", "Pricing", "Website", "Messenger", "AI"]

  return (
    <div className="max-w-2xl mx-auto space-y-3">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 dark:text-zinc-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Can't find the answer? Search questions here..."
          className="w-full pl-12 pr-4 py-3.5 text-sm rounded-2xl border border-light-border dark:border-zinc-800 bg-light-card dark:bg-dark-card text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500/50 dark:focus:border-emerald-500/30 transition-all shadow-sm"
        />
      </div>
      <div className="flex flex-wrap items-center gap-2 justify-center pt-1">
        <span className="text-xs text-zinc-400 dark:text-zinc-500">Popular:</span>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSearchQuery(tag)}
            className="text-xs px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900/60 hover:bg-emerald-500/10 hover:text-emerald-500 dark:hover:text-emerald-400 rounded-lg text-zinc-600 dark:text-zinc-400 transition-all cursor-pointer border border-transparent hover:border-emerald-500/20"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}