import { useState } from "react"
import PricingHero from "@/components/public/pricing/PricingHero"
// import PricingToggle from "@/components/public/pricing/PricingToggle"
import AIChatbotPlans from "@/components/public/pricing/AIChatbotPlans"
import WebsitePackages from "@/components/public/pricing/WebsitePackages"
import CompareFeatures from "@/components/public/pricing/CompareFeatures"
import FAQSection from "@/components/common/FAQSection"
import CTASection from "@/components/common/CTASection"

export default function Pricing() {
  // টগল স্টেটটি এখানে রাখা হলো যেন চাইল্ড কম্পোনেন্টগুলো এই ডেটা রিড করতে পারে
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen transition-colors duration-300">

      {/* 1. Hero section */}
      <PricingHero />
        {/* 2. Pricing Toggle section */}
      {/* <PricingToggle billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} /> */}
      
      {/* 3. AI Chatbot Plans section */}
      <AIChatbotPlans billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />

      {/* 4. Website Packages section */}
      <WebsitePackages /> 
      {/* 5. Compare Features section */}
      <CompareFeatures />

      {/* 6. FAQ section */}
      <FAQSection />
      {/* 7. CTA section */}
      <CTASection />

    </div>
  ) 
}