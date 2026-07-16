import { useParams, useNavigate } from "react-router-dom"
import { Sparkles, ShieldCheck, CreditCard, ArrowLeft, CheckCircle2 } from "lucide-react"
import Button from "@/components/ui/Button"

// প্ল্যান ডিটেলসের টাইপ এবং ডেটা স্ট্রাকচার
interface PlanDetails {
  name: string
  price: string
  billing: string
  features: string[]
}

const planDataset: Record<string, PlanDetails> = {
  Starter: {
    name: "Starter Plan",
    price: "৳৪,৯৯৯",
    billing: "প্রতি মাস",
    features: ["১টি অ্যাক্টিভ AI চ্যাটবট", "১০টি পর্যন্ত PDF/ডকুমেন্ট ট্রেইনিং", "মাসে সর্বোচ্চ ২,০০০টি মেসেজ রেসপন্স", "স্ট্যান্ডার্ড ওয়েব উইজেট ইন্টিগ্রেশন"]
  },
  Professional: {
    name: "Professional Plan",
    price: "৳১২,৯৯৯",
    billing: "প্রতি মাস",
    features: ["৩টি পর্যন্ত অ্যাক্টিভ AI চ্যাটবট", "আনলিমিটেড ওয়েবসাইট লিঙ্ক ও PDF ট্রেইনিং", "মাসে সর্বোচ্চ ১৫,০০০টি মেসেজ রেসপন্স", "Messenger ও WhatsApp ইন্টিগ্রেশন"]
  },
  Enterprise: {
    name: "Enterprise Plan",
    price: "৳২৯,৯৯৯",
    billing: "প্রতি মাস",
    features: ["১০টি পর্যন্ত অ্যাক্টিভ AI চ্যাটবট", "আনলিমিটেড ফাইল ও নলেজ বেস ট্রেইনিং", "মাসে সর্বোচ্চ ৫০,০০০টি মেসেজ রেসপন্স", "রিয়েল-টাইম এপিআই এবং ওয়েবহুক অ্যাক্সেস"]
  }
}

export default function GetStartedFree() {
  const { tierName, tierId } = useParams<{ tierName: string; tierId: string }>()
  const navigate = useNavigate()

  // ইউআরএল প্যারামিটার থেকে সঠিক প্ল্যানটি ম্যাচ করানো
  const selectedPlan = tierName && planDataset[tierName] ? planDataset[tierName] : planDataset["Starter"]

  // SSLCommerz পেমেন্ট হ্যান্ডলার
  const handleSSLCommercePayment = () => {
    console.log(`Redirecting to SSLCommerz for Plan: ${tierName}, ID: ${tierId}`)
    
    // আপনার MERN Stack ব্যাকএন্ড গেটওয়ে লিংক এখানে হিট হবে:
    // window.location.replace(response.data.gatewayUrl);
    alert(`${selectedPlan.name}-এর পেমেন্ট সম্পন্ন করতে SSLCommerz গেটওয়েতে রিডাইরেক্ট করা হচ্ছে...`)
  }

  return (
    <section className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300 grid grid-cols-1 lg:grid-cols-12 text-left">
      
      {/* বাম কলাম: অর্ডার সামারি ও পেমেন্ট গেটওয়ে অ্যাকশন */}
      <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12 relative overflow-hidden border-r border-light-border dark:border-zinc-800/60">
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-full max-w-xl mx-auto space-y-8 relative z-10">
          
          {/* ব্যাক বাটন */} 
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Pricing-এ ফিরে যান
          </button>

          {/* হেডার */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-wider rounded-xl">
              <Sparkles className="w-3 h-3" /> Review Your Order
            </div>
            <h1 className="text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
              Review & Complete Purchase
            </h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              আপনার নির্বাচিত প্ল্যানের ডিটেইলস দেখে নিন এবং নিচে থাকা নিরাপদ পেমেন্ট বাটনে ক্লিক করুন।
            </p>
          </div>

          {/* 📦 ডাইনামিক অর্ডার ডিটেইলস কার্ড */}
          <div className="p-6 rounded-3xl border border-light-border dark:border-zinc-800 bg-light-card dark:bg-dark-card/50 space-y-6">
            <div className="flex justify-between items-start border-b border-light-border dark:border-zinc-900 pb-4">
              <div>
                <h2 className="text-lg font-black text-zinc-800 dark:text-zinc-100">{selectedPlan.name}</h2>
                <p className="text-[11px] text-zinc-400 font-semibold mt-1">Product ID: {tierId?.replace("id_", "")}</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-emerald-500 dark:text-emerald-400">{selectedPlan.price}</span>
                <span className="text-[10px] text-zinc-400 font-bold block">/{selectedPlan.billing}</span>
              </div>
            </div>

            {/* প্ল্যান ফিচার রিক্যাপ */}
            <div className="space-y-3">
              <h3 className="text-[11px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Included Features:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 💳 SSLCommerz গেটওয়ে বাটন */}
          <div className="p-5 rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.02] space-y-4">
            <div className="flex justify-between items-center">
              <div className="space-y-0.5">
                <span className="text-xs font-black text-zinc-800 dark:text-zinc-200 block">Pay via SSLCommerz</span>
                <span className="text-[10px] text-zinc-400 font-medium block">Supports bKash, Nagad, Rocket & Local Cards</span>
              </div>
              <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900 border border-light-border dark:border-zinc-800 rounded-lg text-[9px] font-black tracking-wider text-zinc-500 uppercase">100% Secured</span>
            </div>
            
            <Button 
              type="button" 
              variant="primary" 
              className="w-full gap-2.5 text-xs py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/10"
              onClick={handleSSLCommercePayment}
            >
              <CreditCard className="w-4 h-4" /> Pay {selectedPlan.price} Now
            </Button>
          </div>

        </div>
      </div>

      {/* ডান কলাম: সিকিউরিটি ও ট্রাস্ট ব্যানার */}
      <div className="hidden lg:col-span-5 bg-zinc-50 dark:bg-zinc-950 p-16 lg:flex flex-col justify-between relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <div className="text-xs font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
          Expert-Coder AI Solutions
        </div>

        <div className="space-y-6 max-w-sm">
          <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
            Instant Activation After Payment.
          </h2>
          
          <div className="flex gap-4 items-start">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
              <span className="text-zinc-800 dark:text-zinc-200 block font-black">Automated Provisioning</span>
              SSLCommerz-এ পেমেন্ট সফল হওয়ার সাথে সাথে আপনার ড্যাশবোর্ডে টোকেন ও বট লিমিট ক্লিয়ার হয়ে যাবে।
            </p>
          </div>
        </div>

        <div className="text-[11px] font-bold text-zinc-400 dark:text-zinc-600">
          © 2026 Expert-Coder. All Rights Reserved.
        </div>
      </div>

    </section>
  )
}