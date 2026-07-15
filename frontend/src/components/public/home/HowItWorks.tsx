import { ArrowDown, Layout, CreditCard, Key, Sparkles, UserPlus, Link2, MessageSquare, Bot } from "lucide-react"

export default function HowItWorks() {
  const websiteSteps = [
    { title: "Choose Template", icon: Layout, desc: "আপনার ব্যবসার ক্যাটাগরি অনুযায়ী আমাদের প্রিমিয়াম লাইব্রেরি থেকে টেমপ্লেট পছন্দ করুন।" },
    { title: "Purchase", icon: CreditCard, desc: "নিরাপদ পেমেন্ট গেটওয়ের মাধ্যমে ক্যাশ অন ডেলিভারি (COD) বা অনলাইন পেমেন্টে অর্ডার সম্পন্ন করুন।" },
    { title: "Send Hosting Details", icon: Key, desc: "আপনার এক্সিস্টিং হোস্টিং/ডোমেইন ডিটেইলস অথবা রিকোয়ারমেন্টস ড্যাশবোর্ডে সাবমিট করুন।" },
    { title: "Website Delivered", icon: Sparkles, desc: "মাত্র ২৪ থেকে ৪৮ ঘণ্টার মধ্যে আপনার ব্র্যান্ড নিউ লাইভ ওয়েবসাইট সম্পূর্ণ রেডি ও রানিং।" },
  ]

  const aiSteps = [
    { title: "Create Account", icon: UserPlus, desc: "আমাদের প্ল্যাটফর্মে জাস্ট এক ক্লিকে একটি কাস্টমার অ্যাকাউন্ট তৈরি করুন।" },
    { title: "Connect Website", icon: Link2, desc: "আপনার নতুন বা বর্তমান ওয়েবসাইটের সাথে আমাদের এআই স্ক্রিপ্ট বা উইজেট যুক্ত করুন।" },
    { title: "Connect WhatsApp", icon: MessageSquare, desc: "হোয়াটসঅ্যাপ অফিসিয়াল API অথবা মেসেঞ্জার ইনবক্সের সাথে বট ওয়ান-ক্লিক কানেক্ট করুন।" },
    { title: "AI Ready", icon: Bot, desc: "আপনার কাস্টম এআই এজেন্ট এখন সম্পূর্ণ প্রস্তুত গ্রাহকদের স্বয়ংক্রিয়ভাবে সার্ভিস দেওয়ার জন্য।" },
  ]

  return (
    <section className="py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            How It <span className="text-emerald-500 dark:text-emerald-400">Works</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
            সহজ এবং দ্রুত কয়েকটি ধাপে আপনার অনলাইন বিজনেস সেটআপ এবং এআই অটোমেশন চালু করুন।
          </p>
        </div>

        {/* মেইন গ্রিড কন্টেইনার (২টি কলাম) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative">
          
          {/* মাঝখানের সেপারেটর লাইন (ডেস্কটপ স্ক্রিনের জন্য) */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-[1px] bg-light-border dark:bg-zinc-800 -translate-x-1/2"></div>

          {/* ================= clm 01 - Website Setup ================= */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-light-border dark:border-zinc-800">
              <span className="text-sm font-extrabold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-md">
                Process 01
              </span>
              <h3 className="text-xl font-black text-zinc-800 dark:text-zinc-100">Website Setup Flow</h3>
            </div>

            <div className="space-y-6 relative">
              {websiteSteps.map((step, idx) => {
                const StepIcon = step.icon
                const isLast = idx === websiteSteps.length - 1
                return (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="w-full flex items-start gap-4 p-5 rounded-2xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-3 bg-light-bg dark:bg-zinc-900 border border-light-border dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl">
                        <StepIcon className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div className="space-y-1 text-left">
                        <h4 className="text-base font-bold text-zinc-800 dark:text-zinc-100">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    
                    {!isLast && (
                      <div className="w-full flex justify-center py-2 text-zinc-400 dark:text-zinc-600 animate-bounce">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* ================= clm 2: ai bot ================= */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-light-border dark:border-zinc-800">
              <span className="text-sm font-extrabold uppercase tracking-widest text-teal-500 bg-teal-500/10 px-3 py-1 rounded-md">
                Process 02
              </span>
              <h3 className="text-xl font-black text-zinc-800 dark:text-zinc-100">AI Bot Automation Flow</h3>
            </div>

            <div className="space-y-6 relative">
              {aiSteps.map((step, idx) => {
                const StepIcon = step.icon
                const isLast = idx === aiSteps.length - 1
                return (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="w-full flex items-start gap-4 p-5 rounded-2xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-3 bg-light-bg dark:bg-zinc-900 border border-light-border dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl">
                        <StepIcon className="w-5 h-5 text-teal-500" />
                      </div>
                      <div className="space-y-1 text-left">
                        <h4 className="text-base font-bold text-zinc-800 dark:text-zinc-100">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    
                    {!isLast && (
                      <div className="w-full flex justify-center py-2 text-zinc-400 dark:text-zinc-600 animate-bounce">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}