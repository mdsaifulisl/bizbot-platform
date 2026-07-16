import { BrainCircuit, Zap, BarChart3, Palette, ShieldCheck, Languages, HelpCircle } from "lucide-react"

interface Feature {
  title: string
  desc: string
  icon: React.ComponentType<any>
  highlightColor: string
}

export default function Features() {
  const features: Feature[] = [
    {
      title: "PDF & Document Training",
      desc: "আপনার কোম্পানির PDF, DOCX, বা ওয়েবসাইট লিঙ্ক ইনপুট দিয়ে চ্যাটবটকে নিমিষেই ট্রেইন আপ করুন। এটি আপনার কন্টেন্ট থেকে নিখুঁত তথ্য খুঁজে উত্তর দেবে।",
      icon: BrainCircuit,
      highlightColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:bg-blue-500/10"
    },
    {
      title: "Instant Response (GPT-4 Powered)",
      desc: "লেটেস্ট AI মডেলের সাহায্যে মিলি-সেকেন্ডে রেসপন্স করুন। কোনো কি-ওয়ার্ড বা রুলস ছাড়াই মানুষের মতো সাবলীল ভাষায় রিয়েল-টাইম রিপ্লাই।",
      icon: Zap,
      highlightColor: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:bg-emerald-500/10"
    },
    {
      title: "Advanced Analytics",
      desc: "ইউজাররা কী ধরনের প্রশ্ন করছে এবং বট কতটি কনভারসেশন সলভ করছে তার গ্রাফিকাল ডাটা ও রিপোর্ট দেখুন আমাদের ইন্টারেক্টিভ ড্যাশবোর্ডে।",
      icon: BarChart3,
      highlightColor: "group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:bg-amber-500/10"
    },
    {
      title: "Custom Branding & Widget",
      desc: "বটের নাম, লোগো, থিম কালার এবং ওয়েলকাম মেসেজ পরিবর্তন করে আপনার ব্র্য্যান্ডের লুক অ্যান্ড ফিল অনুযায়ী চ্যাট উইজেট সাজিয়ে নিন।",
      icon: Palette,
      highlightColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400 group-hover:bg-purple-500/10"
    },
    {
      title: "Multilingual Support",
      desc: "বাংলা এবং ইংরেজি সহ বিশ্বের প্রায় ৮০টিরও বেশি ভাষায় চ্যাট করার ক্ষমতা। কাস্টমার যে ভাষায় লিখবে, বট সেই ভাষাতেই নিখুঁত উত্তর দেবে।",
      icon: Languages,
      highlightColor: "group-hover:text-sky-500 dark:group-hover:text-sky-400 group-hover:bg-sky-500/10"
    },
    {
      title: "Data Privacy & Security",
      desc: "আপনার সমস্ত ফাইল এবং কনভারসেশন ডাটা এন্ড-টু-এন্ড এনক্রিপ্ট থাকে। কোনো থার্ড পার্টির কাছে ডাটা লিক হওয়ার কোনো সম্ভাবনা নেই।",
      icon: ShieldCheck,
      highlightColor: "group-hover:text-red-500 dark:group-hover:text-red-400 group-hover:bg-red-500/10"
    }
  ]

  return (
    <section id="features" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 border-b border-light-border dark:border-zinc-800/50 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black uppercase tracking-wider rounded-xl">
            <HelpCircle className="w-3.5 h-3.5" /> Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
            Supercharge Support <br />
            With <span className="text-emerald-500 dark:text-emerald-400">Powerful Features</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-semibold">
            কাস্টমার সাপোর্ট অটোমেট করার জন্য যা যা প্রয়োজন—তার সবই থাকছে আমাদের ক্লাউড-বেজড AI চ্যাটবট সলিউশনে।
          </p>
        </div>

        {/* ফিচার গ্রিড লেআউট */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="group p-4 lg:p-8 rounded-3xl border border-light-border dark:border-zinc-800/80 bg-light-card dark:bg-dark-card transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* আইকন বক্স */}
                  <div className={`w-10 h-10 rounded-2xl border border-light-border dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 dark:text-zinc-400 transition-colors ${feature.highlightColor}`}>
                    <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>

                  {/* টাইটেল ও বর্ণনা */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-100 transition-colors group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}