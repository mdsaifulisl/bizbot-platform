import { useState } from "react"
import { Search } from "lucide-react"
import TemplateGrid, { TemplateItem } from "@/components/public/template/TemplateGrid" // পাথ আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী চেঞ্জ করে নিবেন

export default function WebsiteTemplates() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // রিয়েল ডাটা সোর্স
  const templates: TemplateItem[] = [
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
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"
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
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop"
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

  const categories = ["All", ...Array.from(new Set(templates.map((t) => t.category)))]

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          template.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* পেজ হেডার */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-black uppercase tracking-wider rounded-xl">
            Template Store
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Explore Pre-built <span className="text-emerald-500 dark:text-emerald-400">Templates</span>
          </h1>
        </div>

        {/* ফিল্টার এবং সার্চ বার */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 p-4 rounded-2xl border border-light-border dark:border-zinc-800/80 bg-light-card dark:bg-dark-card">
          <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  selectedCategory === category
                    ? "bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/10"
                    : "border border-light-border dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-zinc-50 dark:bg-zinc-900 border border-light-border dark:border-zinc-800 rounded-xl text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* আলাদা করা গ্রিড কম্পোনেন্টকে এখানে রেন্ডার করা হলো */}
        <TemplateGrid templates={filteredTemplates} />

      </div>
    </div>
  )
}