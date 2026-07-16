import { MessageSquare, Globe, MessageCircle, Send, Sparkles, Briefcase, Bot, Code } from "lucide-react"

export default function SupportedPlatforms() {
  const platforms = [
    {
      name: "Custom Website",
      desc: "যেকোনো React, Next.js, HTML বা WordPress সাইটে ১ লাইনের স্ক্রিপ্ট দিয়ে অ্যাড করুন।",
      icon: Globe,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
    {
      name: "Messenger",
      desc: "ফেসবুক পেজের মেসেঞ্জারে অটোমেটিক রিপ্লাই এবং কাস্টমার হ্যান্ডেল করুন।",
      icon: MessageSquare,
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      name: "WhatsApp",
      desc: "অফিসিয়াল WhatsApp Business API এর সাথে কানেক্ট করে কাস্টমারদের সাপোর্ট দিন।",
      icon: MessageCircle,
      color: "text-green-500 bg-green-500/10 border-green-500/20",
    },
    {
      name: "Telegram",
      desc: "টেলিগ্রাম চ্যানেলে বা গ্রুপে কাস্টমার কুয়েরি সলভ করার জন্য বট রেডি করুন।",
      icon: Send,
      color: "text-sky-500 bg-sky-500/10 border-sky-500/20",
    },
    {
      name: "Slack",
      desc: "আপনার ইন্টারনাল টিম বা কমিউনিটি ম্যানেজ করার জন্য স্ল্যাক ইন্টিগ্রেশন।",
      icon: Sparkles,
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    },
    {
      name: "Discord",
      desc: "গেমিং বা আইটি কমিউনিটি সার্ভারে অটোমেটেড মডারেশন এবং মেম্বার গাইডেন্স।",
      icon: Bot,
      color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    },
  ]

  return (
    <section className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 border-b border-light-border dark:border-zinc-800/50 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black uppercase tracking-wider rounded-xl">
            <Code className="w-3.5 h-3.5" /> Integrations
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
            Connect Everywhere <br />
            <span className="text-emerald-500 dark:text-emerald-400">Supported Platforms</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-semibold">
            আপনার কাস্টমাররা যেখানেই থাকুক না কেন, আমাদের চ্যাটবট এপিআই এবং এসডিকে ব্যবহার করে সব জনপ্রিয় চ্যাটিং প্ল্যাটফর্মে অনায়াসে কানেক্ট করুন।
          </p>
        </div>

        {/* প্ল্যাটফর্ম গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, idx) => {
            const Icon = platform.icon
            return (
              <div 
                key={idx}
                className="group p-6 rounded-3xl border border-light-border dark:border-zinc-800/80 bg-light-card dark:bg-dark-card hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/[0.02]"
              >
                <div className="flex items-start gap-4">
                  {/* আইকন হোল্ডার */}
                  <div className={`p-3 rounded-2xl border ${platform.color} transition-colors flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* কন্টেন্ট */}
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {platform.desc}
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