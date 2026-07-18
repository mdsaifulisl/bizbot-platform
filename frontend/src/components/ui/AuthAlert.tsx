import { X, AlertCircle } from "lucide-react"

interface AuthAlertProps {
  isOpen: boolean
  onClose: () => void
  onLogin: () => void
  onRegister: () => void
}

export default function AuthAlert({ isOpen, onClose, onLogin, onRegister }: AuthAlertProps) {
  if (!isOpen) return null

  return (
    // ফিক্সড পজিশনটি রেসপনসিভ করা হয়েছে: মোবাইলে নিচে পুরো চওড়া, স্মল স্ক্রিনের উপর থেকে ডানদিকের কোণায় থাকবে
    <div className="fixed bottom-4 left-4 right-4 sm:bottom-auto sm:left-auto sm:top-6 sm:right-6 z-50 max-w-sm w-auto sm:w-full bg-light-card dark:bg-zinc-950 border border-emerald-500/30 dark:border-emerald-500/20 rounded-2xl p-4 shadow-2xl shadow-emerald-500/10 flex items-start gap-3 text-left animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* আইকন কন্টেইনার */}
      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex-shrink-0">
        <AlertCircle className="w-4 h-4" />
      </div>
      
      {/* টেক্সট ও বাটন কন্টেন্ট */}
      <div className="flex-1 space-y-1">
        <h4 className="text-xs font-black text-zinc-900 dark:text-zinc-100">Authentication Required</h4>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed">
          প্ল্যানটি কিনতে প্রথমে আপনার অ্যাকাউন্টে লগইন করুন অথবা একটি নতুন অ্যাকাউন্ট তৈরি করুন।
        </p>
        <div className="flex gap-4 pt-1.5">
          <button 
            onClick={onLogin} 
            className="text-[10px] font-black text-emerald-500 hover:underline cursor-pointer bg-transparent border-none p-0"
          >
            Login Now
          </button>
          <button 
            onClick={onRegister} 
            className="text-[10px] font-black text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:underline cursor-pointer bg-transparent border-none p-0"
          >
            Create Account
          </button>
        </div>
      </div>

      {/* ক্লোজ বাটন */}
      <button 
        onClick={onClose} 
        className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors p-0.5 cursor-pointer bg-transparent border-none flex-shrink-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}