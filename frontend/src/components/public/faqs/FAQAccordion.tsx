import { useState } from "react"
import FAQItemRow from "./FAQItem"
import { FAQItem } from "@/pages/public/faqs/FAQ"

interface FAQAccordionProps {
  faqs: FAQItem[]
  categoryTitle: string
}

export default function FAQAccordion({ faqs, categoryTitle }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center justify-between border-b border-light-border dark:border-zinc-800/80 pb-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          {categoryTitle === "All" ? "All General Questions" : categoryTitle}
        </h3>
        <span className="text-xs text-zinc-400">{faqs.length} answers</span>
      </div>

      {faqs.length === 0 ? (
        <div className="text-center py-12 bg-light-card dark:bg-dark-card rounded-2xl border border-light-border dark:border-zinc-800/50">
          <p className="text-sm text-zinc-400">No matching questions found. Try different keywords.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItemRow
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggleAccordion(faq.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}