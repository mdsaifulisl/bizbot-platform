import { HelpCircle, Globe, MessageSquare, Send, Cpu, CreditCard, ShieldAlert } from "lucide-react"

interface FAQCategoriesProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

const CATEGORIES = [
  { name: "All", icon: HelpCircle },
  { name: "Getting Started", icon: HelpCircle },
  { name: "Website Integration", icon: Globe },
  { name: "WhatsApp Business", icon: MessageSquare },
  { name: "Messenger", icon: Send },
  { name: "AI Chatbot", icon: Cpu },
  { name: "Pricing", icon: CreditCard },
  { name: "Security", icon: ShieldAlert }
]

export default function FAQCategories({ selectedCategory, setSelectedCategory }: FAQCategoriesProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 text-center sm:text-left">
        Browse by Category
      </h3>
      
      {/* মোবাইল স্ক্রলিং রিমুভার এবং ডেসকটপ রেস্পন্সিভ রিলিজ */}
      <div className="flex overflow-x-auto pb-3 sm:pb-0 sm:grid sm:grid-cols-2 md:grid-cols-4 gap-3 no-scrollbar snap-x touch-pan-x">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon
          const isActive = selectedCategory === cat.name
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer shrink-0 snap-center ${
                isActive
                  ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-500 dark:text-emerald-400"
                  : "bg-light-card dark:bg-dark-card border-light-border dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-emerald-500" : "text-zinc-400"}`} />
              <span className="whitespace-nowrap">{cat.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}