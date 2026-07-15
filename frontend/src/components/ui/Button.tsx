import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'md' | 'lg';
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        // বেস স্টাইল (কমন স্টাইল)
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none", 
        
        // ভ্যারিয়েন্ট কন্ডিশনস
        variant === 'primary' && "bg-emerald-500 text-zinc-950 hover:bg-emerald-600 shadow-lg shadow-emerald-500/10",
        variant === 'secondary' && "bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
        variant === 'outline' && "bg-light-card border border-light-border dark:bg-dark-card dark:border-dark-border text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow-sm",
        
        // সাইজ কন্ডিশনস
        size === 'md' && "px-4 py-2 text-sm",
        size === 'lg' && "px-7 py-4 text-base",
        
        className // বাইরে থেকে পাঠানো যেকোনো ওভাররাইড বা কাস্টম ক্লাস
      )}
      {...props}
    />
  )
}