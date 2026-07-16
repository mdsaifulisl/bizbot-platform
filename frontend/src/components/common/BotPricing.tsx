import { useState } from "react"
import { Check, Sparkles, HelpCircle, X, AlertCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "@/components/ui/Button" 

interface Tier {
  id: string
  name: string
  price: string
  desc: string
  features: string[]
  isPopular: boolean
  badge?: string
}

export default function BotPricing() {
  const navigate = useNavigate()
  const [showAuthAlert, setShowAuthAlert] = useState(false)
  
  const tiers: Tier[] = [
    {
      id: "1",
      name: "Starter",
      price: "৳৪,৯৯৯",
      desc: "ছোট ব্যবসা বা পার্সোনাল পোর্টফোলিও সাইটের জন্য পারফেক্ট স্টার্টার প্যাকেজ।",
      features: [
        "১টি অ্যাক্টিভ AI চ্যাটবট",
        "১০টি পর্যন্ত PDF/ডকুমেন্ট ট্রেইনিং",
        "মাসে সর্বোচ্চ ২,০০০টি মেসেজ রেসপন্স",
        "স্ট্যান্ডার্ড ওয়েব উইজেট ইন্টিগ্রেশন",
        "ইমেইল সাপোর্ট (২৪ ঘণ্টার মধ্যে)"
      ],
      isPopular: false
    },
    {
      id: "2",
      name: "Professional",
      price: "৳১২,৯৯৯",
      desc: "গ্রোয়েস্ট ব্যবসা বা বিজিং ই-কমার্স এবং ট্রাভেল এজেন্সির কাস্টমার সাপোর্ট অটোমেট করার জন্য বেস্ট সলিউশন।",
      features: [
        "৩টি পর্যন্ত অ্যাক্টিভ AI চ্যাটবট",
        "আনলিমিটেড ওয়েবসাইট লিঙ্ক ও PDF ট্রেইনিং",
        "মাসে সর্বোচ্চ ১৫,০০০টি মেসেজ রেসপন্স",
        "কাস্টম ব্র্যান্ডিং ও কালার স্কিম",
        "Messenger ও WhatsApp ইন্টিগ্রেশন",
        "অ্যাডভান্সড ড্যাশবোর্ড অ্যানালিটিক্স",
        "প্রায়োরিটি সাপোর্ট (১২ ঘণ্টার মধ্যে)"
      ],
      isPopular: true,
      badge: "Most Popular"
    },
    {
      id: "3",
      name: "Enterprise",
      price: "৳২৯,৯৯৯",
      desc: "লার্জ স্কেল কাস্টমাইজেশন, ডেডিকেটেড এপিআই এবং স্পেশাল রিকোয়ারমেন্টের জন্য।",
      features: [
        "আনলিমিটেড AI চ্যাটবট",
        "কাস্টম ফাইন-টিউনড ও ডেডিকেটেড AI মডেল",
        "আনলিমিটেড মেসেজ ও মেমোরি স্টোরেজ",
        "Slack & Discord কাস্টম বটস",
        "ডেডিকেটেড ভেক্টর ডাটাবেস হোস্টিং",
        "SLA গ্যারান্টি ও ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার",
        "২৪/৭ ফোন ও ডিরেক্ট চ্যাট সাপোর্ট"
      ],
      isPopular: false
    }
  ]

  const isLoading = false

  const handleStarted = (tier: Tier) => {
    if (isLoading) {
      navigate(`/get-started/${tier.name}/${tier.id}`)
    } else {
      setShowAuthAlert(true)
      setTimeout(() => setShowAuthAlert(false), 5000)
    }
  }

  return (
    <section id="pricing" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 border-b border-light-border dark:border-zinc-800/50 text-left relative overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black uppercase tracking-wider rounded-xl">
            <HelpCircle className="w-3.5 h-3.5" /> Budget Friendly
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
            Transparent Pricing <br />
            <span className="text-emerald-500 dark:text-emerald-400">Choose Your Best Plan</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-semibold">
            কোনো হিডেন চার্জ নেই। আপনার ব্যবসার পরিধি অনুযায়ী মানানসই প্যাকেজটি বেছে নিন। যেকোনো সময় প্ল্যান আপগ্রেড বা ডাউনগ্রেড করতে পারবেন।
          </p>
        </div>

        {/* প্রাইসিং কার্ড গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`group relative p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                tier.isPopular
                  ? "border-emerald-500 bg-light-card dark:bg-zinc-950 shadow-xl shadow-emerald-500/[0.03] lg:scale-[1.03] z-20"
                  : "border-light-border dark:border-zinc-800/80 bg-light-card dark:bg-dark-card hover:border-zinc-400 dark:hover:border-zinc-700"
              }`}
            >
              {/* পপুলার ব্যাজ */}
              {tier.isPopular && tier.badge && (
                <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1 px-3 py-1 bg-emerald-500 text-white dark:text-zinc-950 text-[10px] font-black uppercase tracking-wider rounded-full shadow-md">
                  <Sparkles className="w-3 h-3" /> {tier.badge}
                </span>
              )}

              {/* কার্ড টপ */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-black text-zinc-400 dark:text-zinc-50 tracking-wider uppercase">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-4xl font-black text-zinc-800 dark:text-zinc-50 tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-xs text-zinc-400 font-bold">/মাস</span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <hr className="border-light-border dark:border-zinc-900" />

                {/* ফিচার লিস্ট */}
                <ul className="space-y-3.5">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs text-zinc-600 dark:text-zinc-300 font-medium">
                      <div className="p-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* অ্যাকশন বাটন */}
              <div className="pt-8">
                <Button
                  variant={tier.isPopular ? "primary" : "outline"}
                  className="w-full text-xs"
                  size="md"
                  onClick={() => handleStarted(tier)}
                >
                  Get Started Free
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 🔔 প্রোফেশনাল অ্যালার্ট কার্ড নোটিফিকেশন */}
      {showAuthAlert && (
        <div className="fixed top-6 right-6 z-50 max-w-sm w-full bg-light-card dark:bg-zinc-950 border border-emerald-500/30 dark:border-emerald-500/20 rounded-2xl p-4 shadow-2xl shadow-emerald-500/10 flex items-start gap-3 text-left animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex-shrink-0">
            <AlertCircle className="w-4 h-4" />
          </div>
          
          <div className="flex-1 space-y-1">
            <h4 className="text-xs font-black text-zinc-900 dark:text-zinc-100">Authentication Required</h4>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed">
              প্ল্যানটি কিনতে প্রথমে আপনার অ্যাকাউন্টে লগইন করুন অথবা একটি নতুন অ্যাকাউন্ট তৈরি করুন।
            </p>
            <div className="flex gap-4 pt-1.5">
              <button onClick={() => navigate("/customer/login")} className="text-[10px] font-black text-emerald-500 hover:underline cursor-pointer">Login Now</button>
              <button onClick={() => navigate("/register")} className="text-[10px] font-black text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:underline cursor-pointer">Create Account</button>
            </div>
          </div>

          <button onClick={() => setShowAuthAlert(false)} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors p-0.5 cursor-pointer">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

    </section>
  ) 
}