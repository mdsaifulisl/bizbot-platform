import { ChevronDown } from "lucide-react"
import { FAQItem } from "@/pages/public/faqs/FAQ"

interface FAQItemProps {
  faq: FAQItem
  isOpen: boolean
  onToggle: () => void
}

export default function FAQItemRow({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="rounded-2xl border border-light-border dark:border-zinc-800/60 bg-light-card dark:bg-dark-card overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left font-bold text-zinc-800 dark:text-zinc-100 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer focus:outline-none"
      >
        <span className="text-sm sm:text-base pr-4">{faq.q}</span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-400 dark:text-zinc-500 transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-180 text-emerald-500" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[300px] border-t border-light-border dark:border-zinc-800/60" : "max-h-0"
        }`}
      >
        <div className="p-5 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed bg-zinc-50/40 dark:bg-zinc-900/10">
          {faq.a}
        </div>
      </div>
    </div>
  )
}