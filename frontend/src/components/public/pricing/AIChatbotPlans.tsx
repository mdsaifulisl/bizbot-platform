import PricingCard from "./PricingCard";
import PricingToggle from "./PricingToggle";

interface AIChatbotPlansProps {
  billingPeriod: "monthly" | "yearly";
  setBillingPeriod: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>;
}

export default function AIChatbotPlans({
  billingPeriod,
  setBillingPeriod,
}: AIChatbotPlansProps) {
  const aiPlans = [
    {
      name: "Starter",
      desc: "অটোমেটেড কাস্টমার সাপোর্টের অভিজ্ঞতা শুরু করার জন্য সেরা বেসিক বট।",
      price: billingPeriod === "monthly" ? "৳১,৯৯৯" : "৳১,৫৯৯",
      period: billingPeriod === "monthly" ? "month" : "month, billed yearly",
      features: [
        "১টি ফেসবুক পেজ বা ওয়েবসাইট ইন্টিগ্রেশন",
        "১,০০০ মাসিক স্বয়ংক্রিয় মেসেজ লিমিট",
        "ওয়েবসাইট কন্টেন্ট থেকে এআই অটো-ট্রেনিং",
        "বেসিক চ্যাট হিস্ট্রি ড্যাশবোর্ড",
        "কমিউনিটি সাপোর্ট",
      ],
      buttonText: "Get Starter Bot",
      popular: false,
    },
    {
      name: "Professional",
      desc: "বিজনেস স্কেল করার জন্য এবং নিরবচ্ছিন্ন ওমনি-চ্যানেল এআই সাপোর্টের জন্য সেরা।",
      price: billingPeriod === "monthly" ? "৳৪,৯৯৯" : "৳৩,৯৯৯",
      period: billingPeriod === "monthly" ? "month" : "month, billed yearly",
      features: [
        "হয়াটসঅ্যাপ + ফেসবুক + ওয়েবসাইট কানেক্টিভিটি",
        "১০,০০০ মাসিক মেসেজ লিমিট",
        "ডাইনামিক কাস্টম নলেজবেস ট্রেনিং (PDF/Docs)",
        "অটোমেটেড লিড ক্যাপচারিং এবং গুগল শিট ইন্টিগ্রেশন",
        "২৪/৭ প্রায়োরিটি সাপোর্ট",
      ],
      buttonText: "Get Pro Bot",
      popular: true,
    },
    {
      name: "Enterprise",
      desc: "লার্জ ডেটাবেজ ও কাস্টম এআই এজেন্ট রিকোয়ারমেন্টের জন্য সম্পূর্ণ নিজস্ব সলিউশন।",
      price: "Custom",
      period: "Tailored to your needs",
      features: [
        "সবগুলো ওমনি-চ্যানেল চ্যাট ইন্টিগ্রেশন (Messenger, WhatsApp, Telegram)",
        "আনলিমিটেড মেসেজ ও ডেটা ট্রেইন্ড মডেল",
        "নিজস্ব ডাটাবেজ (MongoDB/SQL) API সিঙ্ক",
        "ডেডিকেটেড এআই ইঞ্জিনিয়ার সাপোর্ট",
        "SLA গ্যারান্টি সহ ওয়ান-টু-ওয়ান কাস্টমাইজেশন",
      ],
      buttonText: "Contact Us",
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Intelligent{" "}
            <span className="text-emerald-500 dark:text-emerald-400">
              AI Chatbot
            </span>{" "}
            Plans
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
            আপনার ২৪/৭ কাস্টমার সাপোর্ট ও সেলস অটোমেশন হ্যান্ডেল করার জন্য
            নিখুঁত এআই প্ল্যান বেছে নিন।
          </p>
        </div>

        {/* টগল বাটন এবং কার্ডের মাঝে স্পেসিং রাখার জন্য একটি র্যাপার ডিভ */}
        <div className="flex justify-center mb-16">
          <PricingToggle
            billingPeriod={billingPeriod}
            setBillingPeriod={setBillingPeriod}
          />
        </div>

        {/* কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {aiPlans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} badgeText="Most Popular" />
          ))}
        </div>

      </div>
    </section>
  );
} 