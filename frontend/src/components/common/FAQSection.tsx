import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "How long does it take?",
      answer: "আমাদের রেডি টেমপ্লেট লাইব্রেরি থেকে পছন্দ করার পর, সাধারণত ডোমেন-হোস্টিং ডিটেইলস পাওয়ার ২৪ থেকে ৪৮ ঘণ্টার মধ্যে আপনার ওয়েবসাইট লাইভ এবং রানিং করে দেওয়া হয়। কাস্টম ডেভেলপমেন্টের ক্ষেত্রে প্রজেক্টের রিকোয়ারমেন্ট অনুযায়ী সময় নির্ধারণ করা হয়।"
    },
    {
      question: "How do I connect WhatsApp?",
      answer: "আমাদের ড্যাশবোর্ডে গিয়ে ওয়ান-ক্লিক কিউআর কোড (QR Code) স্ক্যান করার মাধ্যমেই আপনার ব্যক্তিগত বা অফিশিয়াল হোয়াটসঅ্যাপ অ্যাকাউন্ট বটের সাথে কানেক্ট করতে পারবেন। কোনো জটিল কোডিং বা এপিআই কনফিগারেশনের প্রয়োজন নেই।"
    },
    {
      question: "Can I use my own domain?",
      answer: "হ্যাঁ, অবশ্যই! আপনার নিজস্ব ডোমেন (যেমন: yourbrand.com) থাকলে সেটি আমাদের হোস্টিং সার্ভারের সাথে কানেক্ট করে দেওয়া হবে। এছাড়া আপনার ডোমেন না থাকলে আমরা নতুন ডোমেন সেটআপে সম্পূর্ণ সাহায্য করব।"
    },
    {
      question: "Is AI trained automatically?",
      answer: "হ্যাঁ। চ্যাটবটটি কানেক্ট করার পর আপনার ওয়েবসাইটের ডেটা, সার্ভিস পেজ এবং প্রোডাক্টের তথ্যের ওপর ভিত্তি করে এআই স্বয়ংক্রিয়ভাবে ট্রেইন্ড হয়ে যায়। এছাড়া ড্যাশবোর্ড থেকে আপনি যেকোনো ম্যানুয়াল প্রশ্নোত্তর (Q&A) কাস্টমাইজ করে দিতে পারেন।"
    },
    {
      question: "How do I pay?",
      answer: "আমাদের সাথে কাজ করার জন্য আপনি খুব সহজেই ক্যাশ অন ডেলিভারি (COD) পেমেন্ট গেটওয়ে, মোবাইল ব্যাংকিং (বিকাশ, রকেট, নগদ) অথবা সরাসরি ব্যাংক ট্রান্সফারের মাধ্যমে নিরাপদে পেমেন্ট সম্পন্ন করতে পারবেন।"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-10 lg:py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড লাইটিং গ্লো */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 text-emerald-500 rounded-xl mb-2">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Frequently Asked <span className="text-emerald-500 dark:text-emerald-400">Questions</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
            আমাদের সার্ভিস, এআই চ্যাটবট ইন্টিগ্রেশন এবং পেমেন্ট প্রসেস নিয়ে সাধারণ কিছু প্রশ্নের উত্তর এখানে দেওয়া হলো।
          </p>
        </div>

        {/* অ্যাকর্ডিয়ন লিস্ট */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="rounded-2xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card overflow-hidden transition-all duration-300"
              >
                {/* অ্যাকর্ডিয়ন বাটন */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-zinc-800 dark:text-zinc-100 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 dark:text-zinc-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-emerald-500" : ""
                    }`}
                  />
                </button>

                {/* অ্যাকর্ডিয়ন কন্টেন্ট বডি (স্মুথ এনিমেশন) */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-60 border-t border-light-border dark:border-zinc-800/60" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed bg-zinc-50/50 dark:bg-zinc-900/20">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}