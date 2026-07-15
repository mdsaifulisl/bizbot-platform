import { Sparkles, ArrowDown } from "lucide-react"

export default function PricingHero() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-toggle-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-light-bg dark:bg-dark-bg overflow-hidden transition-colors duration-300">
      
      {/* ব্যাকগ্রাউন্ড গ্রিড ও গ্লো ইফেক্ট */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* টপ ফিচার ব্যাজ */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest mx-auto mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Flexible Pricing Plans
        </div>

        {/* মেইন হেডিংস */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15]">
            Simple Plans for <br />
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Growth and Automation
            </span>
          </h1>
          
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            কোনো জটিলতা ছাড়াই আপনার ব্যবসার পরিধি অনুযায়ী সঠিক প্ল্যানটি বেছে নিন। আমরা তৈরি করি হাই-পারফর্মিং ওয়েবসাইট এবং কাস্টম AI চ্যাটবট যা আপনার সেলস ও কাস্টমার সাপোর্ট চালাবে সম্পূর্ণ অটো পাইলটে।
          </p>
        </div>

        {/* স্ক্রল ডাউন ইন্ডিকেটর বাটন */}
        <div className="pt-10">
          <button
            onClick={scrollToPricing}
            className="inline-flex flex-col items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer group focus:outline-none"
          >
            <span>See Packages</span>
            <div className="p-2.5 bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-800 rounded-xl group-hover:border-emerald-500/20 transition-all shadow-sm">
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </button>
        </div>

      </div>
    </section>
  )
}