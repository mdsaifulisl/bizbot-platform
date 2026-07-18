import BotPricing from "@/components/common/BotPricing"

export default function PricingSection() {
  return (
    <section className="py-0 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        {/* <div className="text-center max-w-3xl mx-auto mb-0 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Transparent, Simple <span className="text-emerald-500 dark:text-emerald-400">Pricing</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
            আপনার ব্যবসার পরিধি ও বাজেট অনুযায়ী আমাদের সেরা প্যাকটি বেছে নিন। কোনো লুকানো চার্জ নেই।
          </p>
        </div> */}

        {/* সরাসরি BotPricing কম্পোনেন্ট রেন্ডার */}
        <div className="animate-fadeIn pt-4">
          <BotPricing />
        </div>

      </div>
    </section>
  )
}