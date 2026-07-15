import { ArrowRight, Sparkles } from "lucide-react"
import Button from "@/components/ui/Button"

export default function CTASection() {
  return (
    <section className="py-10 lg:py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন এবং গ্লো ইফেক্ট */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* ইন্টারেক্টিভ কন্টেইনার বক্স */}
        <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl border border-light-border dark:border-dark-border bg-gradient-to-b from-light-card/80 to-light-card/40 dark:from-dark-card/80 dark:to-dark-card/40 backdrop-blur-xl shadow-xl space-y-8 max-w-4xl mx-auto">
          
          {/* ছোট টপ ব্যাজ */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            Start Today
          </div>

          {/* মেইন হেডিং ও সাব-টেক্সট */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Ready to Grow <br className="sm:hidden" /> Your Business?
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Launch your ultra-premium website today integrated with next-gen AI chatbots. Turn cold traffic into high-intent customers completely on autopilot.
            </p>
          </div>

          {/* কাস্টম অ্যাকশন বাটন */}
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 group gap-2 px-8"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* সাবটেল ট্রাস্ট ফ্যাক্টর */}
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
            No credit card required • 24/7 Support Setup included
          </p>

        </div>

      </div>
    </section>
  )
}