import { ReactNode } from "react"

// Sequence কম্পোনেন্টের জন্য টাইপ ইন্টারফেস
interface SequenceProps {
  children: ReactNode
}

export function Sequence({ children }: SequenceProps) {
  return (
    <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 pl-6 space-y-8 my-6">
      {children}
    </div>
  )
}

// Step কম্পোনেন্টের জন্য টাইপ ইন্টারফেস
interface StepProps {
  title: string
  subtitle?: string // '?' দেওয়ার মানে হলো এটি অপশনাল (না দিলেও চলবে)
  children: ReactNode
}

export function Step({ title, subtitle, children }: StepProps) {
  return (
    <div className="relative">
      {/* বাম পাশের গোল ডট বা মার্কার */}
      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-zinc-950" />
      
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-50">
            {title}
          </h4>
          {subtitle && (
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-900/50">
              {subtitle}
            </span>
          )}
        </div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
          {children}
        </div>
      </div>
    </div>
  )
}