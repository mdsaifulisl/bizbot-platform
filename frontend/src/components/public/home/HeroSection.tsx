import { useState } from "react"
import { ArrowRight, Play, Sparkles, Check, Bot, MessageSquare } from "lucide-react"
import Button  from "@/components/ui/Button"

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "chatbot">("dashboard")

  return (
    <section className="relative overflow-hidden py-24 pb-0 lg:pb-0 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      
      {/* মডার্ন গ্রিড ব্যাকগ্রাউন্ড এবং স্পটলাইট গ্লো */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* ================= বাম পাশ (Left Content) ================= */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          {/* অ্যানিমেটেড ব্যাজ */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Next-Gen AI & Web Platform</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Build Your Brand. <br />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Automate With AI.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              Launch lightning-fast professional websites integrated with WhatsApp & Messenger AI chatbots. Turn visitors into customers, 24/7.
            </p>
          </div>

          {/* কল-টু-অ্যাকশন বাটনসমূহ */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              {/* Primary Action - Get Started */}
              <Button 
                className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 group gap-2"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              {/* Secondary Action - Watch Demo */}
              <Button 
                variant="secondary"
                className="bg-light-card border border-light-border dark:bg-dark-card dark:border-dark-border text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-bold rounded-xl shadow-sm transition-all duration-200 gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                Watch Demo
              </Button>
            </div>

            {/* ট্রাস্ট ইন্ডিকেটর */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" /> No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" /> Cancel Anytime
              </span>
            </div>
          </div>
        </div>

        {/* ================= ডান পাশ (Premium Collage Component) ================= */}
        <div className="lg:col-span-6 relative h-[500px] w-full flex items-center justify-center">
          
          {/* ব্যাকগ্রাউন্ড রেডিয়াল গ্লো */}
          <div className="absolute w-[350px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

          {/* ১. মেইন হাববোর্ড উইন্ডো (Dashboard Frame) */}
          <div className="absolute top-2 w-[85%] rounded-2xl border border-light-border dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-5 shadow-2xl transition-all hover:scale-[1.01] duration-300">
            <div className="flex items-center justify-between border-b border-light-border dark:border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/60"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/60"></span>
              </div>
              
              {/* ইন্টারেক্টিভ ট্যাব বাটন */}
              <div className="flex bg-light-bg dark:bg-zinc-800/80 p-0.5 rounded-lg border border-light-border dark:border-zinc-700/50">
                <button 
                  onClick={() => setActiveTab("dashboard")}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${activeTab === 'dashboard' ? 'bg-white dark:bg-zinc-900 text-emerald-500 shadow-sm' : 'text-zinc-500'}`}
                >
                  Analytics
                </button>
                <button 
                  onClick={() => setActiveTab("chatbot")}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${activeTab === 'chatbot' ? 'bg-white dark:bg-zinc-900 text-emerald-500 shadow-sm' : 'text-zinc-500'}`}
                >
                  AI Agent
                </button>
              </div>
            </div>

            {/* ট্যাব কনটেন্ট */}
            {activeTab === "dashboard" ? (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Total Revenue</p>
                    <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">$12,450.00</h4>
                  </div>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-bold">+28.4%</span>
                </div>
                <div className="h-28 bg-light-bg dark:bg-zinc-950/80 rounded-xl border border-light-border dark:border-white/5 flex items-end p-3 gap-2">
                  <div className="w-full h-[30%] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-lg"></div>
                  <div className="w-full h-[60%] bg-emerald-500/40 dark:bg-emerald-500/20 rounded-lg"></div>
                  <div className="w-full h-[45%] bg-emerald-500/30 dark:bg-emerald-500/15 rounded-lg"></div>
                  <div className="w-full h-[85%] bg-emerald-500 dark:bg-emerald-500/80 rounded-lg shadow-lg shadow-emerald-500/25"></div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2 bg-light-bg dark:bg-zinc-950/50 p-2 rounded-lg border border-light-border dark:border-white/5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold">Active Agent: SalesBot v2.1</span>
                </div>
                <div className="space-y-2 text-[11px] max-h-28 overflow-hidden">
                  <div className="bg-light-bg dark:bg-zinc-950/50 p-2 rounded-lg text-zinc-600 dark:text-zinc-400">
                    💡 client matched with e-commerce template.
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-500 p-2 rounded-lg font-medium">
                    ⚡ Auto-reply sent to WhatsApp API.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ২. চ্যাট বাবল ওভারলে (WhatsApp / Messenger Style UI - Right Floating) */}
          <div className="absolute -right-2 bottom-16 w-[55%] rounded-2xl border border-light-border dark:border-white/10 bg-white dark:bg-zinc-900 p-4 shadow-2xl transition-all hover:scale-[1.03] duration-300 z-20">
            <div className="flex items-center gap-2 border-b border-light-border dark:border-white/10 pb-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-zinc-950 font-bold">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div>
                <h5 className="text-[11px] font-bold text-zinc-800 dark:text-zinc-100">AFS Travel Bot</h5>
                <p className="text-[9px] text-zinc-400">Typically replies instantly</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-light-bg dark:bg-zinc-950/50 p-2 rounded-xl text-[10px] text-zinc-600 dark:text-zinc-400 max-w-[90%] border border-light-border dark:border-white/5">
                Hi! Ready to book your flight to Sylhet? ✈️
              </div>
              <div className="bg-emerald-500 text-zinc-950 p-2 rounded-xl text-[10px] font-semibold max-w-[80%] ml-auto text-right shadow-sm">
                Yes, check slot!
              </div>
            </div>
          </div>

          {/* ৩. লাইভ ওয়েবসাইট প্রিভিউ (Left Floating Badge) */}
          <div className="absolute left-0 bottom-12 w-[48%] rounded-xl border border-light-border dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-3 shadow-2xl transition-all hover:scale-[1.02] duration-300 z-30 flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] text-zinc-400 block font-semibold uppercase tracking-wider">Live Support</span>
              <span className="text-xs font-bold text-zinc-800 dark:text-zinc-100">100% Automated</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}