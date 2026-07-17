import { useState } from "react"
import {useNavigate} from "react-router-dom"
import FAQSection from "@/components/common/FAQSection"

export default function FAQPreview() {
  const navigate = useNavigate()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const previewFaqs = [
    { q: "How long does setup take?", a: "Standard setup takes between 24-48 hours depending on your custom data alignment." },
    { q: "How do I connect WhatsApp?", a: "You can pair it directly via secure QR code scanning inside our official dashboard system." },
    { q: "Can AI answer product questions?", a: "Yes, it ingests your specific inventory, specifications, and data to reply accurately." },
    { q: "Can I connect multiple websites?", a: "Absolutely. Depending on your configuration tier, multiple domains can be configured." }
  ]

  return (
    <section className="border-b border-light-border dark:border-zinc-800/50">
      {/* FAQSection-এ কাস্টম ডাটা ও স্টেট পাস করা হচ্ছে */}
      <FAQSection 
        faqs={previewFaqs} 
        openIdx={openIdx} 
        setOpenIdx={setOpenIdx} 
      />

      <div className="max-w-3xl mx-auto px-4 pb-16 text-center">
        <button onClick={() => navigate("/faqs")} className="text-xs font-black uppercase tracking-wider text-emerald-500 hover:underline cursor-pointer">
          View All FAQs
        </button>
      </div>
    </section>
  )
}