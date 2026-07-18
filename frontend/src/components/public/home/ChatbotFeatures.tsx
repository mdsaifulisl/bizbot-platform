// import { useState } from "react"
import { Globe, MessageSquare, Send, History, BarChart3, Clock, Sparkles } from "lucide-react"

export default function ChatbotFeatures() {
  const features = [
    {
      title: "Website Integration",
      icon: Globe,
      desc: "একদম লাইভ চ্যাট উইজেট হিসেবে যেকোনো ওয়েবসাইটে সহজে সেটআপ করুন। থিমের সাথে মিল রেখে কাস্টমাইজযোগ্য ডিজাইন।",
      badge: "Plug & Play"
    },
    {
      title: "WhatsApp API Connection",
      icon: Send,
      desc: "গ্রাহকের প্রিয় মেসেজিং প্ল্যাটফর্ম হোয়াটসঅ্যাপে রিয়েল-টাইম অটোমেটিক রিপ্লাই, অফার এবং অর্ডার কনফার্মেশন পাঠান।",
      badge: "Highly Requested"
    },
    {
      title: "Messenger Integration",
      icon: MessageSquare,
      desc: "ফেসবুক পেজ ইনবক্সের সাথে চ্যাটবট ইন্টিগ্রেট করে কাস্টমারদের যেকোনো সাধারণ প্রশ্নের উত্তর দিন নিমেষেই।",
      badge: "Automated Sales"
    },
    {
      title: "Conversation History",
      icon: History,
      desc: "গ্রাহকদের সমস্ত চ্যাট হিস্ট্রি এক প্যানেলে সংরক্ষিত থাকবে। যেকোনো সময় যেকোনো কনভারসেশনের ডেটা অ্যানালাইসিস করুন।",
      badge: "Safe Sync"
    },
    {
      title: "Advanced Analytics",
      icon: BarChart3,
      desc: "বটের পারফরম্যান্স ট্র্যাকিং, ডেইলি মেসেজ কাউন্ট, গ্রাহক সন্তুষ্টি এবং কনভার্সন রেট মেপে ব্যবসার প্রবৃদ্ধি নিশ্চিত করুন।",
      badge: "Data Driven"
    },
    {
      title: "24/7 AI Support",
      icon: Clock,
      desc: "কোনো ডাউনটাইম ছাড়া দিনে ২৪ ঘণ্টা, সপ্তাহে ৭ দিন কাস্টমারদের সাপোর্ট দিন। হিউম্যান এজেন্টের মতোই বুদ্ধিমান রিপ্লাই।",
      badge: "Zero Latency"
    }
  ]

  return (
    <section className="py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            AI Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Next-Gen <span className="text-emerald-500 dark:text-emerald-400">AI Chatbot</span> Features
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
            আপনার ব্যবসা পরিচালনা এবং কাস্টমার হ্যান্ডলিংকে ১০০% অটোমেটেড করার জন্য প্রয়োজনীয় সব ফিচার এক প্ল্যাটফর্মে।
          </p>
        </div>

        {/* ফিচার কার্ডস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:border-emerald-500/30 dark:hover:border-emerald-500/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* কার্ডের উপরের অংশ: আইকন এবং ব্যাজ */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-light-bg dark:bg-zinc-900 border border-light-border dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl group-hover:text-emerald-500 group-hover:border-emerald-500/20 transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
                      {feature.badge}
                    </span>
                  </div>

                  {/* কার্ডের টাইটেল ও বর্ণনা */}
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}