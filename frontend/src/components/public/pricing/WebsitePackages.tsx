import PricingCard from "./PricingCard"

export default function WebsitePackages() {
  const webPlans = [
    {
      name: "Basic",
      desc: "ছোট ব্যবসা বা পার্সোনাল পোর্টফোলিওর জন্য একদম নিখুঁত একটি স্টার্টার ওয়েবসাইট।",
      price: "৳৯,৯৯৯",
      period: "One-time payment (+ ৳২,৫০০/year renewal)",
      features: [
        "১টি ওয়ান-পেজ ল্যান্ডিং পেজ ডিজাইন",
        "ফ্রি ডোমেন ও ১ বছরের লাইট হোস্টিং",
        "সম্পূর্ণ রেসপন্সিভ (মোবাইল ও ডেস্কটপ)",
        "বেসিক অন-পেজ এসইও (SEO) সেটআপ",
        "হোয়াটসঅ্যাপ চ্যাট বাটন ইন্টিগ্রেশন",
        "১ মাসের ফ্রি মেইনটেইন্যান্স সাপোর্ট"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Business",
      desc: "গ্রোইং কোম্পানি ও ই-কমার্স বিজনেসের জন্য প্রফেশনাল মাল্টি-পেজ ওয়েবসাইট।",
      price: "৳১৯,৯৯৯",
      period: "One-time payment (+ ৳৩,৫০০/year renewal)",
      features: [
        "অনলিমিটেড পেজ (আপ-টু ১০টি পেজ)",
        "ফ্রি ডোমেন ও হাই-স্পিড এসএসডি হোস্টিং",
        "ঢাকা (৳৬০) ও ঢাকার বাইরে (৳১২০) COD লজিস্টিকস ইন্টিগ্রেশন",
        "পেমেন্ট গেটওয়ে ও কাস্টম কার্ট ইন্টিগ্রেশন",
        "অ্যাডভান্সড এসইও এবং গুগল সার্চ কনসোল সেটআপ",
        "৩ মাসের কমপ্লিট টেকনিক্যাল সাপোর্ট"
      ],
      buttonText: "Order Now",
      popular: true
    },
    {
      name: "Premium",
      desc: "জতিলা রিকোয়ারমেন্ট এবং লার্জ স্কেল এন্টারপ্রাইজের জন্য ফুল কাস্টমাইজড ডেভেলপমেন্ট।",
      price: "Custom",
      period: "Based on requirements",
      features: [
        "সম্পূর্ণ কাস্টম UI/UX এবং ইউনিক ডিজাইন",
        "রিয়েল-টাইম ড্যাশবোর্ড ও ডেটাবেজ ইন্টিগ্রেশন (MERN / Next.js)",
        "ডেডিকেটেড ক্লাউড হোস্টিং কনফিগারেশন",
        "মাল্টি-ভেন্ডর বা জটিল লজিস্টিকস অটোমেশন",
        "১ বছর ডেডিকেটেড সাপোর্ট ও রেডার ব্যাকআপ"
      ],
      buttonText: "Discuss Project",
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-zinc-50/50 dark:bg-zinc-950/20 border-y border-light-border dark:border-zinc-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Professional <span className="text-emerald-500 dark:text-emerald-400">Website</span> Packages
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
            এককালীন পেমেন্টে হাই-পারফর্মিং ওয়েবসাইট তৈরি করুন। কোনো লুকানো চার্জ বা মাসিক ফি নেই।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {webPlans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} badgeText="Best Value" />
          ))}
        </div>

      </div>
    </section>
  )
}