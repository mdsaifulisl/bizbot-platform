import { Sparkles, ArrowRight, Bot, Code, BarChart3, TrendingUp } from "lucide-react"
import Button from "@/components/ui/Button"

export default function BlogHero() {
  const handleScrollToBlogs = () => {
    const blogSection = document.getElementById("blog-grid")
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300 border-b border-light-border dark:border-zinc-800/50 overflow-hidden text-left">
      
      {/* 🌌 মডার্ন ব্যাকগ্রাউন্ড গ্রিড */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/[0.03] dark:bg-emerald-500/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 📝 বাম কলাম: টেক্সট ও কল-টু-অ্যাকশন */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* ব্যাজ */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-wider rounded-xl">
              <Sparkles className="w-3.5 h-3.5" /> Resources & Insights
            </div>

            {/* মেইন হেডলাইন */}
            <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.08]">
              Learn about <br />
              <span className="text-emerald-500 dark:text-emerald-400">AI Chatbots, Web Dev & Business Growth</span>
            </h1>

            {/* সাব-হেডলাইন */}
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-semibold">
              AI চ্যাটবট, মডার্ন ওয়েবসাইট ডেভেলপমেন্ট, এসইও (SEO), ডিজিটাল মার্কেটিং এবং ব্যবসার দ্রুত গ্রোথ নিশ্চিত করার কিলার স্ট্র্যাটেজি নিয়ে সাজানো আমাদের ব্লগ।
            </p>

            {/* বাটন গ্রুপ */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button 
                variant="primary" 
                size="lg" 
                className="gap-2 text-xs shadow-lg shadow-emerald-500/10"
                onClick={handleScrollToBlogs}
              >
                Browse Articles <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

          </div>

          {/* 💻 ডান কলাম: ক্যাটাগরি ফোকাসড মিনিমাল গ্রিড */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              
              {/* কার্ড ১: AI Chatbots */}
              <div className="p-5 rounded-2xl border border-light-border dark:border-zinc-800/80 bg-light-card dark:bg-dark-card hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 mb-3">
                  <Bot className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-black text-zinc-800 dark:text-zinc-100">AI Chatbots</h3>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1 font-semibold">কাস্টমার সাপোর্ট অটোমেশন ও AI ইন্টিগ্রেশন</p>
              </div>

              {/* কার্ড ২: Web Dev */}
              <div className="p-5 rounded-2xl border border-light-border dark:border-zinc-800/80 bg-light-card dark:bg-dark-card hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 mb-3">
                  <Code className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-black text-zinc-800 dark:text-zinc-100">Web Dev</h3>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1 font-semibold">MERN Stack ও হাই-পারফরম্যান্স ওয়েবসাইট</p>
              </div>

              {/*  কার্ড ৩: SEO & Marketing */}
              <div className="p-5 rounded-2xl border border-light-border dark:border-zinc-800/80 bg-light-card dark:bg-dark-card hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 mb-3">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-black text-zinc-800 dark:text-zinc-100">SEO & Marketing</h3>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1 font-semibold">অর্গানিক ট্রাফিক এবং ডিজিটাল ব্র্যান্ডিং</p>
              </div>

              {/* কার্ড ৪: Business Growth */}
              <div className="p-5 rounded-2xl border border-light-border dark:border-zinc-800/80 bg-light-card dark:bg-dark-card hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 mb-3">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-black text-zinc-800 dark:text-zinc-100">Business Growth</h3>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1 font-semibold">স্মার্ট স্কেলিং ও রেভিনিউ বৃদ্ধির উপায়</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}