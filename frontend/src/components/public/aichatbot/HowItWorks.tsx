import { UserPlus, Briefcase, UploadCloud, Radio, CheckCircle, ArrowRight } from "lucide-react"

interface Step {
  stepNum: string
  title: string
  desc: string
  icon: React.ComponentType<any>
  techBadge: string
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      stepNum: "01",
      title: "Create Account",
      desc: "আপনার ইমেইল বা গুগল আইডি দিয়ে এক ক্লিকে সম্পূর্ণ ফ্রিতে আপনার ডেভেলপার অ্যাকাউন্ট তৈরি করে নিন।",
      icon: UserPlus,
      techBadge: "OAuth 2.0 / JWT Auth"
    },
    {
      stepNum: "02",
      title: "Setup Business Account",
      desc: "আপনার কোম্পানির নাম, ক্যাটাগরি এবং কাস্টমার টোন সিলেক্ট করে বিজনেস প্রোফাইল ও ড্যাশবোর্ড রেডি করুন।",
      icon: Briefcase,
      techBadge: "Workspace Config"
    },
    {
      stepNum: "03",
      title: "Train AI Knowledge Base",
      desc: "আপনার বিজনেস ওয়েবসাইট লিংক বা যেকোনো PDF/DOCX ফাইল আপলোড করুন। AI মুহূর্তের মধ্যে তা অ্যানালাইসিস করবে।",
      icon: UploadCloud,
      techBadge: "Vector DB Embedding"
    },
    {
      stepNum: "04",
      title: "Integrate & Go Live",
      desc: "মাত্র এক লাইনের স্ক্রিপ্ট কোড কপি করে আপনার ওয়েবসাইটে বসিয়ে দিন। আপনার কাস্টমারদের জন্য AI চ্যাটবট রেডি!",
      icon: Radio,
      techBadge: "CDN Integration"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 border-b border-light-border dark:border-zinc-800/50 text-left relative overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/[0.02] dark:bg-emerald-400/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black uppercase tracking-wider rounded-xl">
            <CheckCircle className="w-3.5 h-3.5" /> Integration Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
            How It Works <br />
            <span className="text-emerald-500 dark:text-emerald-400">Simple 4-Step Setup</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-semibold">
            কোনো জটিল ব্যাকএন্ড কোডিং ছাড়াই মাত্র ৪টি সহজ ধাপে আপনার ব্যবসার জন্য একটি সম্পূর্ণ ডেডিকেটেড AI চ্যাটবট চালু করে ফেলুন।
          </p>
        </div>

        {/* ৪টি ধাপের লেআউট গ্রিড (২টি কলামে রেসপনসিভ গ্রিড রাখা হয়েছে যাতে ৪টি কার্ড সুন্দর দেখায়) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* কানেক্টিং লাইন (শুধুমাত্র বড় স্ক্রিনের জন্য) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-zinc-200 via-emerald-500/30 to-zinc-200 dark:from-zinc-800 dark:via-emerald-500/20 dark:to-zinc-800 -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div 
                key={idx}
                className="group flex flex-col justify-between p-6 rounded-3xl border border-light-border dark:border-zinc-800/80 bg-light-card dark:bg-dark-card transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-xl relative"
              >
                {/* স্টেপ নাম্বার ও আইকন */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl border border-light-border dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-black text-zinc-200 dark:text-zinc-800/80 group-hover:text-emerald-500/20 transition-colors">
                    {step.stepNum}
                  </span>
                </div>

                {/* টেক্সট কন্টেন্ট */}
                <div className="space-y-3">
                  <span className="inline-block text-[9px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                    {step.techBadge}
                  </span>
                  <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* কুইক অ্যাকশন অ্যারো ইন্ডিকেটর (ধাপ ১, ২ এবং ৩ এর ডানপাশে) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3.5 top-[38px] z-20">
                    <div className="p-1 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-light-border dark:border-zinc-800 text-zinc-400">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}