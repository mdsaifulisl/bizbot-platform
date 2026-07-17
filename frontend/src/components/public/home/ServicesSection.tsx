import { Globe, Bot, CheckCircle2, ArrowRight } from "lucide-react"
import {useNavigate} from "react-router-dom"
import Button from "@/components/ui/Button" 
export default function ServicesSection() {
  const navigate = useNavigate()
  const websiteFeatures = [
    "Modern & Minimalist Design",
    "100% Mobile Responsive",
    "Blazing Fast Loading Speed",
    "SEO Friendly Structure",
  ]

  const chatbotFeatures = [
    "24/7 Automated Customer Support",
    "WhatsApp & Messenger Integration",
    "Smart Intent & Query Recognition",
    "Seamless Human Agent Handover",
  ]

  return (
    <section className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Our Core <span className="text-emerald-500 dark:text-emerald-400">Services</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
            Scale your business operations and digital presence with our next-generation web platforms and conversational AI infrastructure.
          </p>
        </div>

        {/* সার্ভিস কার্ড গ্রিড (২টি বড় কার্ড) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* ================= কার্ড ১: ওয়েবসাইট ডেভেলপমেন্ট ================= */}
          <div className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:border-emerald-500/40 dark:hover:border-emerald-500/30 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/[0.02] transition-all duration-300">
            <div>
              {/* আইকন ব্যাজ */}
              <div className="inline-flex p-4 bg-emerald-500/10 text-emerald-500 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110">
                <Globe className="w-8 h-8" />
              </div>

              {/* টাইটেল ও ডেসক্রিপশন */}
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
                Website Development
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                Get an ultra-premium web identity meticulously crafted to look stunning, rank high on search engines, and drive high-intent conversions for your brand.
              </p>

              {/* ফিচার লিস্ট */}
              <ul className="space-y-3.5 mb-10">
                {websiteFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* কাস্টম বাটন অ্যাকশন */}
            <Button 
              size="lg"
              className="w-full bg-light-bg dark:bg-zinc-900/60 border border-light-border dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-emerald-500 hover:text-zinc-950 dark:hover:bg-emerald-500 dark:hover:text-zinc-950 font-bold py-3.5 rounded-xl transition-all duration-200 gap-2 group/btn"
              onClick={() => navigate("/templates")}
            >
              Browse Templates
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>

          {/* ================= কার্ড ২: চ্যাটবট অটোমেশন ================= */}
          <div className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:border-emerald-500/40 dark:hover:border-emerald-500/30 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/[0.02] transition-all duration-300">
            <div>
              {/* আইকন ব্যাজ */}
              <div className="inline-flex p-4 bg-emerald-500/10 text-emerald-500 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110">
                <Bot className="w-8 h-8" />
              </div>

              {/* টাইটেল ও ডেসক্রিপশন */}
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
                AI Chatbot Automation
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                Automate customer support workflows seamlessly. Connect advanced AI agents directly to your WhatsApp and Messenger ecosystems to answer queries instantly.
              </p>

              {/* ফিচার লিস্ট */}
              <ul className="space-y-3.5 mb-10">
                {chatbotFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* কাস্টম বাটন অ্যাকশন */}
            <Button 
              size="lg"
              className="w-full bg-light-bg dark:bg-zinc-900/60 border border-light-border dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-emerald-500 hover:text-zinc-950 dark:hover:bg-emerald-500 dark:hover:text-zinc-950 font-bold py-3.5 rounded-xl transition-all duration-200 gap-2 group/btn"
              onClick={() => navigate("/ai-features")}
            >
              Explore AI Features
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>

        </div>

      </div>
    </section>
  )
}