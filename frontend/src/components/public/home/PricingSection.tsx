import { useState } from "react"
import { Check, Sparkles, HelpCircle } from "lucide-react"
import Button from "@/components/ui/Button"

type PricingPlan = {
  name: string
  price: string
  billing: string
  desc: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"website" | "ai">("website")

  const websitePlans: PricingPlan[] = [
    {
      name: "Basic",
      price: "৳৯,৯৯৯",
      billing: "One-time fee",
      desc: "ছোট ব্যবসা বা পার্সোনাল ব্র্যান্ডিংয়ের জন্য একদম নিখুঁত একটি স্টার্টার ওয়েবসাইট।",
      features: [
        "১টি ওয়ান-পেজ ল্যান্ডিং পেজ",
        "ফ্রি ডোমেন ও ১ বছরের হোস্টিং",
        "ফুললি রেসপন্সিভ (মোবাইল ও ডেস্কটপ)",
        "বেসিক এসইও (SEO) সেটআপ",
        "হোয়াটসঅ্যাপ বাটন চ্যাট ইন্টিগ্রেশন"
      ],
      buttonText: "Get Started"
    },
    {
      name: "Business",
      price: "৳৯,৯৯৯",
      billing: "One-time fee",
      desc: "গ্রোইং কোম্পানি ও ই-কমার্স বিজনেসের জন্য প্রফেশনাল মাল্টি-পেজ ওয়েবসাইট।",
      features: [
        "অনলিমিটেড পেজ (আপ-টু ১০টি পেজ)",
        "ফ্রি ডোমেন ও হাই-স্পিড হোস্টিং",
        "ঢাকা (৳৬০) ও ঢাকার বাইরে (৳১২০) COD ডেলিভারি সিস্টেম",
        "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন",
        "অ্যাডভান্সড এসইও এবং স্পিড অপ্টিমাইজেশন",
        "৩ মাসের ফ্রি টেকনিক্যাল সাপোর্ট"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Premium",
      price: "৳৯,৯৯৯",
      billing: "One-time fee",
      desc: "লার্জ স্কেল এন্টারপ্রাইজ বা জটিল রিকোয়ারমেন্টের জন্য কাস্টম ডেভেলপমেন্ট।",
      features: [
        "সম্পূর্ণ কাস্টম UI/UX ডিজাইন",
        "ডেডিকেটেড ক্লাউড হোস্টিং এবং কাস্টম ড্যাশবোর্ড",
        "রিয়েল-টাইম ট্র্যাকিং এবং বুকিং ইঞ্জিন",
        "ফুল ব্যাকএন্ড ও কাস্টম ডেটাবেজ (MERN Stack)",
        "১ বছর ডেডিকেটেড ম্যানেজার সাপোর্ট"
      ],
      buttonText: "Contact Sales"
    }
  ]

  const aiPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "৳১,৯৯৯",
      billing: "per month",
      desc: "অটোমেটেড কাস্টমার সাপোর্টের অভিজ্ঞতা শুরু করার জন্য সেরা বেসিক বট।",
      features: [
        "১টি ফেসবুক পেজ বা ওয়েবসাইট ইন্টিগ্রেশন",
        "১,০০০ মাসিক স্বয়ংক্রিয় মেসেজ লিমিট",
        "ওয়েবসাইট কন্টেন্ট থেকে এআই অটো-ট্রেনিং",
        "বেসিক চ্যাট হিস্ট্রি ড্যাশবোর্ড"
      ],
      buttonText: "Get Starter Bot"
    },
    {
      name: "Professional",
      price: "৳১,৯৯৯",
      billing: "per month",
      desc: "বিজনেস স্কেল করার জন্য এবং নিরবচ্ছিন্ন হোয়াটসঅ্যাপ এআই সাপোর্টের জন্য সেরা।",
      features: [
        "হোয়াটসঅ্যাপ + ফেসবুক + ওয়েবসাইট কানেক্টিভিটি",
        "১০,০০০ মাসিক মেসেজ লিমিট",
        "ডাইনামিক কাস্টম নলেজবেস ট্রেনিং (PDF/Docs)",
        "অটোমেটেড লিড ক্যাপচারিং এবং গুগল শিট ইন্টিগ্রেশন",
        "২৪/৭ প্রায়োরিটি সাপোর্ট"
      ],
      buttonText: "Get Pro Bot",
      popular: true
    },
    {
      name: "Enterprise",
      price: "৳১,৯৯৯",
      billing: "Custom pricing",
      desc: "লার্জ ডেটাবেজ ও কাস্টম এআই এজেন্ট রিকোয়ারমেন্টের জন্য সম্পূর্ণ নিজস্ব সলিউশন।",
      features: [
        "সবগুলো ওমনি-চ্যানেল চ্যাট ইন্টিগ্রেশন",
        "আনলিমিটেড মেসেজ ও ডেটা ট্রেইন্ড মডেল",
        "নিজস্ব ডাটাবেজ (MongoDB/SQL) এপিআই সিঙ্ক",
        "ডেডিকেটেড এআই ইঞ্জিনিয়ার সাপোর্ট"
      ],
      buttonText: "Contact Us"
    }
  ]

  const activePlans = activeTab === "website" ? websitePlans : aiPlans

  return (
    <section className="py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/[0.02] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Transparent, Simple <span className="text-emerald-500 dark:text-emerald-400">Pricing</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
            আপনার ব্যবসার পরিধি ও বাজেট অনুযায়ী আমাদের সেরা প্যাকটি বেছে নিন। কোনো লুকানো চার্জ নেই।
          </p>

          {/* ওয়েবসাইট এবং এআই সুইচ টগল ট্যাব */}
          <div className="inline-flex p-1.5 bg-zinc-100 dark:bg-zinc-900 border border-light-border dark:border-zinc-800 rounded-2xl mt-6">
            <button
              onClick={() => setActiveTab("website")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "website"
                  ? "bg-white dark:bg-zinc-800 text-emerald-500 dark:text-emerald-400 shadow-md"
                  : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              Website Packages
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "ai"
                  ? "bg-white dark:bg-zinc-800 text-teal-500 dark:text-teal-400 shadow-md"
                  : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              AI Bot Solutions
            </button>
          </div>
        </div>

        {/* ৩টি কলাম কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {activePlans.map((plan, idx) => {
            const isPopular = plan.popular
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 bg-light-card dark:bg-dark-card transition-all duration-300 ${
                  isPopular
                    ? "border-emerald-500 shadow-xl shadow-emerald-500/[0.03] scale-100 md:scale-[1.03] z-10"
                    : "border-light-border dark:border-dark-border hover:shadow-lg"
                }`}
              >
                {/* পপুলার ব্যাজ */}
                {isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-emerald-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">
                    <Sparkles className="w-3 h-3 fill-zinc-950" /> Most Popular
                  </span>
                )}

                <div className="space-y-6 text-left">
                  {/* প্ল্যান পরিচিতি */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-zinc-800 dark:text-zinc-50">{plan.name}</h3>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 min-h-[32px]">{plan.desc}</p>
                  </div>

                  {/* প্রাইসিং ডিসপ্লে */}
                  <div className="pt-2">
                    <span className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50">{plan.price}</span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold block mt-1">/{plan.billing}</span>
                  </div>

                  <hr className="border-light-border dark:border-zinc-800/60" />

                  {/* ফিচার লিস্ট */}
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="p-0.5 bg-emerald-500/10 text-emerald-500 rounded-md shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* অ্যাকশন বাটন */}
                <div className="pt-8">
                  <Button
                    variant={isPopular ? "primary" : "outline"}
                    className={`w-full justify-center font-bold text-xs sm:text-sm py-3 rounded-xl transition-all ${
                      isPopular
                        ? "bg-emerald-500 hover:bg-emerald-600 text-zinc-950 shadow-md shadow-emerald-500/10"
                        : "border-light-border dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}