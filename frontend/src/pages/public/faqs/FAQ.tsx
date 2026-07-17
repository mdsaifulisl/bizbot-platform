import { useState } from "react"
import FAQHero from "@/components/public/faqs/FAQHero"
import FAQSearch from "@/components/public/faqs/FAQSearch"
import FAQCategories from "@/components/public/faqs/FAQCategories"
import PopularQuestions from "@/components/public/faqs/PopularQuestions"
import FAQAccordion from "@/components/public/faqs/FAQAccordion"
import ContactSupport from "@/components/common/ContactSupport"
// import FAQCTA from "@/components/public/faqs/FAQCTA"

export interface FAQItem {
  id: string
  q: string
  a: string
  category: string
  isPopular?: boolean
}

const ALL_FAQS: FAQItem[] = [
  // Getting Started
  { id: "gs1", category: "Getting Started", q: "What is BotSaiful?", a: "BotSaiful is an advanced AI-powered SaaS platform designed to automate your customer support, sales, and operations across websites, WhatsApp, and Messenger.", isPopular: true },
  { id: "gs2", category: "Getting Started", q: "How do I create an account?", a: "Click on the 'Start Free Trial' button, enter your email, create a secure password, and verify your account to get instant access." },
  { id: "gs3", category: "Getting Started", q: "How do I start my free trial?", a: "Every new account automatically starts with a 14-day fully featured trial. No credit card required upfront." },
  // Website
  { id: "w1", category: "Website Integration", q: "How do I connect my website?", a: "Simply copy the generated script tag from your BotSaiful dashboard and paste it into your website's HTML header or use our official WordPress/Shopify plugins.", isPopular: true },
  { id: "w2", category: "Website Integration", q: "How often does the website sync?", a: "The AI automatically crawls and syncs your updated website data every 24 hours. You can also trigger a manual sync anytime from the dashboard." },
  { id: "w3", category: "Website Integration", q: "Can AI answer product questions?", a: "Yes, it ingests your dynamic inventory, detailed specifications, and pricing data to reply with absolute accuracy.", isPopular: true },
  // WhatsApp
  { id: "wa1", category: "WhatsApp Business", q: "How do I connect WhatsApp Business?", a: "Go to integrations, click 'Connect WhatsApp', and scan the secure QR code using your official WhatsApp Business application. No API fees required.", isPopular: true },
  { id: "wa2", category: "WhatsApp Business", q: "Do I need Meta Business verification?", a: "No, our unique cloud-linking engine allows you to connect instantly without mandatory Meta Business Manager verification." },
  // Messenger
  { id: "m1", category: "Messenger", q: "How do I connect Facebook Messenger?", a: "Click 'Connect Messenger', log in with your Facebook account, select the business pages you want to automate, and grant permissions." },
  // AI
  { id: "ai1", category: "AI Chatbot", q: "How does AI learn my website?", a: "It uses deep contextual crawling to read your raw URLs, documentation files, PDFs, or manual Q&As to build a custom knowledge base instantly." },
  { id: "ai2", category: "AI Chatbot", q: "Does AI support multiple languages?", a: "Yes, BotSaiful natively understands and replies in over 40 global languages, including flawless Bangla and English context-switching." },
  // Pricing & Billing
  { id: "p1", category: "Pricing", q: "Is there a free plan?", a: "We offer a Free Tier with core limitations, alongside premium subscription tiers customized for growing businesses.", isPopular: true },
  { id: "p2", category: "Pricing", q: "Can I upgrade or cancel anytime?", a: "Absolutely. You can upgrade, downgrade, or completely cancel your current subscription structure from the billing tab instantly." }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // ফিল্টারিং লজিক (সার্চ এবং ক্যাটাগরি একসাথে হ্যান্ডেল করবে)
  const filteredFaqs = ALL_FAQS.filter((faq) => {
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const popularFaqs = ALL_FAQS.filter((faq) => faq.isPopular)

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-zinc-900 dark:text-zinc-50 antialiased selection:bg-emerald-500/20">
      <FAQHero />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
        <FAQSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <FAQCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        {/* শুধুমাত্র সার্চ বা নির্দিষ্ট ক্যাটাগরি সিলেক্ট না থাকলে পপুলার কোয়েশ্চেন দেখাবে */}
        {searchQuery === "" && selectedCategory === "All" && (
          <PopularQuestions popularFaqs={popularFaqs} />
        )}

        <FAQAccordion faqs={filteredFaqs} categoryTitle={selectedCategory} />
        
        <ContactSupport />
        
        {/* <FAQCTA /> */}
      </div>
    </div>
  )
}