import { ArrowRight, Bot, Sparkles, Terminal, Code } from "lucide-react"
import Button from "@/components/ui/Button" // আপনার বাটন পাথ অনুযায়ী ইম্পোর্ট করুন

export default function AIChatbotHero() {
  return (
    <section className="relative overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300 py-20 lg:py-32 border-b border-light-border dark:border-zinc-800/50 text-left">
      {/* ব্যাকগ্রাউন্ড গ্রেডিয়েন্ট এফেক্ট */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* বাম কলাম: কন্টেন্ট এরিয়া */}
          <div className="lg:col-span-7 space-y-6 max-w-2xl">
            {/* ব্যাজ */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black uppercase tracking-wider rounded-xl">
              <Sparkles className="w-3.5 h-3.5" /> Next-Gen AI Agent
            </div>

            {/* মেইন হেডলাইন */}
            <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.1]">
              Build Smart <span className="text-emerald-500 dark:text-emerald-400">AI Chatbots</span> for Your Business in Minutes
            </h1>

            {/* সাব-হেডলাইন */}
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
              আপনার কাস্টমারদের দিন ২৪/৭ ইনস্ট্যান্ট সাপোর্ট। কোনো কোডিং ছাড়াই তৈরি করুন ইন্টেলিজেন্ট চ্যাটবট, যা আপনার ব্যবসার ডকুমেন্ট শিখে নিয়ে একদম মানুষের মতো নিখুঁত উত্তর দেবে।
            </p>

            {/* কল টু অ্যাকশন বাটনস */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = "#dashboard-preview"}
                className="gap-2 text-xs shadow-lg shadow-emerald-500/20"
              >
                Create Free Bot <ArrowRight className="w-4 h-4" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = "#demo"}
                className="gap-2 text-xs"
              >
                <Bot className="w-4 h-4 text-emerald-500" /> Watch Live Demo
              </Button>
            </div>

            {/* ছোট ট্রাস্ট ইন্ডিকেটর */}
            <div className="flex items-center gap-6 pt-4 text-xs font-bold text-zinc-400 dark:text-zinc-500">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> No Credit Card Required
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> 1-Click Integration
              </div>
            </div>
          </div>

          {/* ডান কলাম: মডার্ন কোড এডিটর ও ইন্টারঅ্যাকটিভ চ্যাট ইন্টারফেস প্রিভিউ */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl border border-light-border dark:border-zinc-800 bg-zinc-950 text-zinc-300 shadow-2xl p-5 md:p-6 overflow-hidden font-mono text-left">
              
              {/* উইন্ডো কন্ট্রোল বার */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-zinc-500 font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-zinc-500" /> chat-agent.config.json
                </span>
                <Code className="w-4 h-4 text-zinc-600" />
              </div>

              {/* কোড বা ইন্টারফেস ভিজ্যুয়াল */}
              <div className="space-y-4 text-xs leading-relaxed">
                <div>
                  <span className="text-zinc-500">// Initialize Expert-Coder AI Agent</span>
                  <p className="text-zinc-100">
                    <span className="text-emerald-400">const</span> <span className="text-blue-400">bot</span> = <span className="text-yellow-400">new</span> <span className="text-purple-400">AIAgent</span>({"{"}
                  </p>
                  <p className="pl-4">
                    name: <span className="text-orange-400">"Expert-Support"</span>,
                  </p>
                  <p className="pl-4">
                    knowledge: <span className="text-orange-400">"business_docs.pdf"</span>,
                  </p>
                  <p className="pl-4">
                    temperature: <span className="text-emerald-400">0.2</span>
                  </p>
                  <p className="text-zinc-100">{"});"}</p>
                </div>

                <hr className="border-zinc-900" />

                {/* ডেমো মেসেজ কার্ড উইজেট */}
                <div className="space-y-3 pt-1">
                  {/* কাস্টমার মেসেজ */}
                  <div className="flex justify-end">
                    <div className="bg-zinc-900 border border-zinc-800 text-zinc-100 px-3.5 py-2 rounded-2xl rounded-tr-none max-w-[85%] text-[11px] font-sans">
                      <p className="font-semibold text-zinc-400 text-[10px] mb-0.5">Customer</p>
                      আপনার এই ট্রাভেল টেমপ্লেটের দাম কত?
                    </div>
                  </div>

                  {/* চ্যাটবটের উত্তর */}
                  <div className="flex justify-start">
                    <div className="bg-emerald-950/20 border border-emerald-500/20 text-emerald-100 px-3.5 py-2 rounded-2xl rounded-tl-none max-w-[85%] text-[11px] font-sans">
                      <p className="font-black text-emerald-400 text-[10px] flex items-center gap-1.5 mb-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> AI Bot
                      </p>
                      AFS Travel Agency টেমপ্লেটের রেগুলার প্রাইস ৳১৮,০০০ টাকা, তবে অফারে মাত্র ৳১২,৯৯৯ টাকায় পাচ্ছেন!
                    </div>
                  </div>
                </div>

              </div>

              {/* গ্লো এফেক্ট কার্ডের নিচে */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}