import { ArrowUpRight } from "lucide-react"
import { FAQItem } from "@/pages/public/faqs/FAQ"

interface PopularQuestionsProps {
  popularFaqs: FAQItem[]
}

export default function PopularQuestions({ popularFaqs }: PopularQuestionsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
        Popular Questions
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {popularFaqs.map((faq) => (
          <div
            key={faq.id}
            className="group p-5 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-2xl flex items-start justify-between gap-4 hover:border-emerald-500/20 dark:hover:border-emerald-500/10 transition-all"
          >
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                {faq.category}
              </span>
              <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                {faq.q}
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 transition-colors shrink-0 mt-1" />
          </div>
        ))}
      </div>
    </div>
  )
}