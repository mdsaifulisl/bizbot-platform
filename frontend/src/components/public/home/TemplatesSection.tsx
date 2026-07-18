// import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "@/components/ui/Button"
import TemplateGrid, { TemplateItem } from "@/components/public/template/TemplateGrid"

export default function TemplatesSection() {
  const navigate = useNavigate()

  // হোমপেজে প্রিভিউ দেখানোর জন্য রিয়েল ডাটা সোর্স (টপ ৩টি টেমপ্লেট)
  const featuredTemplates: TemplateItem[] = [
    {
      id: "template-1",
      title: "AFS Travel Agency Platform",
      category: "Travel",
      desc: "ডাইনামিক ট্যুর প্যাকেজ বুকিং, রিয়েল-টাইম সার্চ ফিল্টারিং এবং মডার্ন ট্রাভেল ল্যান্ডিং পেজ সリューション।",
      price: "৳১২,৯৯৯",
      regularPrice: "৳১৮,০০০",
      badge: "New Release",
      liveLink: "https://facebook.com/",
      buyLink: "#",
      stack: ["React", "Tailwind CSS", "MongoDB"],
      images: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop"
      ]
    },
    {
      id: "template-2",
      title: "Gadget Mart E-Commerce",
      category: "E-Commerce",
      desc: "কাস্টম কার্ট, অ্যাডমিন লেআউট এবং ক্যাশ অন ডেলিভারি (ঢাকা ৳৬০ / বাইরে ৳১২০) সেটআপ সহ কমপ্লিট শপ।",
      price: "৳১৯,৯৯৯",
      regularPrice: "৳২৫,০০০",
      badge: "Best Seller",
      liveLink: "#",
      buyLink: "#",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
      ]
    },
    {
      id: "template-3",
      title: "Minimal Portfolio for Developers",
      category: "Portfolio",
      desc: "ক্লিন ফ্ল্যাট ডিজাইন, ডার্ক মোড সাপোর্ট এবং লাইটওয়েট পারফরম্যান্সের জন্য অপ্টিমাইজড পোর্টফোলিও।",
      price: "৳৪,৯৯৯",
      regularPrice: "৳৭,৫০০",
      badge: "Trending",
      liveLink: "#",
      buyLink: "#",
      stack: ["React.js", "Tailwind CSS"],
      images: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop"
      ]
    }
  ]

  // 'View All Templates' বাটনে ক্লিক করলে মূল টেমপ্লেট পেজে নিয়ে যাওয়ার ফাংশন
  const handleViewAll = () => {
    navigate("/templates") // আপনার রাউট অনুযায়ী পাথ পরিবর্তন করতে পারেন
  }

  return (
    <section className="py-24 pt-0 lg:pt-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 text-left">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              Pre-built <span className="text-emerald-500 dark:text-emerald-400">Website Templates</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-xl">
              Production-ready, ultra-premium configurations optimized for maximum performance and lightning-fast deployment.
            </p>
          </div>
          
          {/* ডেস্কটপ বাটন */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              className="gap-2 group"
              onClick={handleViewAll}
            >
              View All Templates
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* টেমপ্লেট গ্রিড রেন্ডারিং */}
        <TemplateGrid templates={featuredTemplates} />

        {/* মোবাইল রেসপন্সিভ বাটন */}
        <div className="mt-12 text-center md:hidden">
          <Button 
            variant="outline" 
            className="w-full gap-2 justify-center group"
            onClick={handleViewAll}
          >
            View All Templates
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

      </div>
    </section>
  )
}