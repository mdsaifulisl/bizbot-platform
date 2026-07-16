import { useState } from "react"
import { Eye, CreditCard, Tag, ShieldCheck, CheckCircle2, ChevronRight, Mail, Phone, User } from "lucide-react"
import Button from "@/components/ui/Button"

interface Template {
  id: string
  title: string
  category: string
  desc: string
  price: number
  regularPrice: number
  badge?: string
  liveLink: string
  stack: string[]
  images: string[]
}

export default function TemplateDetails() {
  // ডামি লগইন স্টেট (প্রকৃত অ্যাপে এটি আপনার Auth Context / Redux থেকে আসবে)
  const [isLoggedIn] = useState<boolean>(false) // ট্রাই করার জন্য true/false করে দেখতে পারেন

  const template: Template = {
    id: "template-1",
    title: "AFS Travel Agency Platform",
    category: "Travel",
    desc: "ডাইনামিক ট্যুর প্যাকেজ বুকিং, রিয়েল-টাইম সার্চ ফিল্টারিং এবং মডার্ন ট্রাভেল ল্যান্ডিং পেজ সলিউশন। এতে রয়েছে সম্পূর্ণ রেসপনসিভ ইউজার ড্যাশবোর্ড, কাস্টম অ্যাডমিন লেআউট এবং আকর্ষণীয় ফ্ল্যাট কার্ড ভিউ। কোড অত্যন্ত ক্লিন ও অপ্টিমাইজড।",
    price: 12999,
    regularPrice: 18000,
    badge: "New Release",
    liveLink: "https://example.com/demo",
    stack: ["React", "Tailwind CSS", "MongoDB", "Express.js", "Node.js"],
    images: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop"
    ]
  }

  const [activeImage, setActiveImage] = useState(0)
  
  // নন-লগইন ইউজারদের জন্য ইনফরমেশন স্টেট
  const [guestInfo, setGuestInfo] = useState({
    name: "",
    phone: "",
    email: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setGuestInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isLoggedIn) {
      // লগইন থাকা অবস্থায় সরাসরি পেমেন্ট গেটওয়েতে রিডাইরেক্ট হবে
      console.log("Redirecting logged-in user to Payment Gateway...", {
        templateId: template.id,
        amount: template.price
      })
      alert("আপনাকে পেমেন্ট গেটওয়েতে নিয়ে যাওয়া হচ্ছে...")
    } else {
      // গেস্ট ইউজারের ডাটা সহ পেমেন্ট গেটওয়েতে রিডাইরেক্ট হবে
      console.log("Redirecting guest user to Payment Gateway...", {
        ...guestInfo,
        templateId: template.id,
        amount: template.price
      })
      alert(`ধন্যবাদ ${guestInfo.name}! আপনাকে পেমেন্ট গেটওয়েতে নিয়ে যাওয়া হচ্ছে...`)
    }
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300 py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ব্রেডক্রাম্ব */}
        <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 dark:text-zinc-500 mb-8">
          <span>Templates</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>{template.category}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-zinc-700 dark:text-zinc-300">{template.title}</span>
        </div>

        {/* মেইন গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* বাম পাশ: ইমেজ ও প্রজেক্ট ডেসক্রিপশন */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-light-border dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
              <img 
                src={template.images[activeImage]} 
                alt={template.title}
                className="w-full h-full object-cover"
              />
              {template.badge && (
                <span className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider rounded-xl z-10">
                  {template.badge}
                </span>
              )}
            </div>

            {/* থাম্বনেইল গ্যালারি */}
            {template.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {template.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative aspect-video overflow-hidden rounded-2xl border-2 transition-all cursor-pointer ${
                      activeImage === idx ? "border-emerald-500" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* ডেসক্রিপশন */}
            <div className="p-6 rounded-3xl border border-light-border dark:border-zinc-800 bg-light-card dark:bg-dark-card space-y-4">
              <h2 className="text-base font-black text-zinc-900 dark:text-zinc-50 uppercase tracking-wide">
                Project Details
              </h2>
              <hr className="border-light-border dark:border-zinc-800/60" />
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {template.desc}
              </p>
            </div>
          </div>

          {/* ডান পাশ: প্রাইস এবং ডাইরেক্ট পেমেন্ট গেটওয়ে চেকআউট */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-6">
            
            {/* প্রাইস ইনফো কার্ড */}
            <div className="p-6 rounded-3xl border border-light-border dark:border-zinc-800 bg-light-card dark:bg-dark-card space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-md">
                {template.category}
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-50">
                {template.title}
              </h1>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {template.stack.map((tech, i) => (
                  <span key={i} className="text-[9px] font-extrabold px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <hr className="border-light-border dark:border-zinc-800/60" />

              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-zinc-900 dark:text-zinc-50">৳{template.price.toLocaleString("bn-BD")}</span>
                  <span className="text-sm text-zinc-400 dark:text-zinc-500 line-through font-medium">৳{template.regularPrice.toLocaleString("bn-BD")}</span>
                </div>
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5 text-emerald-500" /> Instant Download
                </span>
              </div>

              <div className="pt-1">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => window.open(template.liveLink, "_blank", "noopener,noreferrer")}
                  className="w-full gap-2 text-xs"
                >
                  <Eye className="w-4 h-4" /> Live Demo
                </Button>
              </div>
            </div>

            {/* কন্ডিশনাল গেটওয়ে ফর্ম */}
            <div className="p-6 rounded-3xl border border-light-border dark:border-zinc-800 bg-light-card dark:bg-dark-card space-y-5">
              <h3 className="text-sm font-black text-zinc-900 dark:text-zinc-50 uppercase tracking-wide flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-emerald-500" /> Secure Payment
              </h3>

              <hr className="border-light-border dark:border-zinc-800/60" />

              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                
                {/* ইউজার লগইন না থাকলে কন্টাক্ট ইনফরমেশন ফর্ম দেখাবে */}
                {!isLoggedIn && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-[11px] text-zinc-400 dark:text-zinc-500 leading-normal font-semibold">
                      ডাউনলোড লিংক এবং চালান ইমেইলে পাওয়ার জন্য নিচের ঘরগুলো পূরণ করুন।
                    </p>
                    
                    {/* নাম */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-zinc-400" /> আপনার নাম *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={guestInfo.name}
                        onChange={handleInputChange}
                        placeholder="যেমন: মাহিদুল মল্লিক"
                        className="w-full px-4 py-2.5 text-xs bg-zinc-50 dark:bg-zinc-900 border border-light-border dark:border-zinc-800 rounded-xl text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    {/* মোবাইল নম্বর */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-zinc-400" /> মোবাইল নম্বর *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={guestInfo.phone}
                        onChange={handleInputChange}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-4 py-2.5 text-xs bg-zinc-50 dark:bg-zinc-900 border border-light-border dark:border-zinc-800 rounded-xl text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    {/* ইমেইল ঠিকানা */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-zinc-400" /> ইমেইল ঠিকানা *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={guestInfo.email}
                        onChange={handleInputChange}
                        placeholder="example@mail.com"
                        className="w-full px-4 py-2.5 text-xs bg-zinc-50 dark:bg-zinc-900 border border-light-border dark:border-zinc-800 rounded-xl text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* লগইন থাকলে একটি ছোট কুইক পেমেন্ট নোটিশ দেখাবে */}
                {isLoggedIn && (
                  <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-xs font-semibold text-zinc-600 dark:text-zinc-400 leading-normal animate-fade-in">
                    <div className="flex items-center gap-2 text-emerald-500 font-black mb-1">
                      <CheckCircle2 className="w-4 h-4" /> Account Verified
                    </div>
                    আপনি ইতিমধ্যে লগইন আছেন। পেমেন্ট সম্পন্ন হওয়ামাত্র আপনার ড্যাশবোর্ডে কোড ফাইলটি যুক্ত হয়ে যাবে।
                  </div>
                )}

                {/* পেমেন্ট টোটাল সামারি */}
                <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-2xl border border-light-border dark:border-zinc-800 flex justify-between items-center text-xs font-bold">
                  <span className="text-zinc-500">Amount Payable</span>
                  <span className="text-emerald-500 text-sm font-black">৳{template.price.toLocaleString("bn-BD")}</span>
                </div>

                {/* ডাইরেক্ট পেমেন্ট বাটন */}
                <Button type="submit" variant="primary" size="md" className="w-full py-3 text-xs gap-1.5 shadow-md shadow-emerald-500/10">
                  <CreditCard className="w-4 h-4" /> Pay & Download Now
                </Button>

                <div className="flex items-center justify-center gap-1 text-[10px] text-zinc-400 dark:text-zinc-500 font-bold pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Secured and encrypted gateway connection
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}