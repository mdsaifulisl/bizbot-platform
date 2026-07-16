import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, ShoppingCart, Tag, Search, Layers, ChevronLeft, ChevronRight } from "lucide-react"
import Button from "@/components/ui/Button" 

interface ImageSliderProps {
  images: string[]
  title: string
  category: string
  badge?: string
}

function ImageSlider({ images, title, category, badge }: ImageSliderProps) {
  
  const [currentIdx, setCurrentIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // অটো-স্লাইড লজিক
  useEffect(() => {
    if (images.length <= 1 || isPaused) return

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000) // ৫ সেকেন্ড পর পর চেঞ্জ হবে

    return () => clearInterval(interval)
  }, [images.length, isPaused])

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div 
      className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 group/slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img 
        src={images[currentIdx]} 
        alt={`${title} view ${currentIdx + 1}`}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      />
      
      <span className="absolute top-4 left-4 px-2.5 py-1 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-emerald-400 text-[10px] font-black uppercase tracking-wider rounded-lg z-10">
        {category}
      </span>
      {badge && (
        <span className="absolute top-4 right-4 px-2.5 py-1 bg-emerald-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider rounded-lg shadow-sm z-10">
          {badge}
        </span>
      )}

      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-zinc-950/70 text-zinc-100 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-zinc-950 cursor-pointer z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-zinc-950/70 text-zinc-100 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-zinc-950 cursor-pointer z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setCurrentIdx(idx)
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIdx === idx ? "bg-emerald-500 w-3" : "bg-zinc-400/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function WebsiteTemplates() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const templates = [
    {
      id: "template-1",
      title: "AFS Travel Agency Platform",
      category: "Travel",
      desc: "ডাইনামিক ট্যুর প্যাকেজ বুকিং, রিয়েল-টাইম সার্চ ফিল্টারিং এবং মডার্ন ট্রাভেল ল্যান্ডিং পেজ সলিউশন।",
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
      desc: "কাস্টম কার্ট, অ্যাডমিন লেআউট এবং ক্যাশ অন ডেলিভারি (ঢাকা ৳৬০ / বাইরে ৳১২ো) সেটআপ সহ কমপ্লিট শপ।",
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

        {/* টেমপ্লেট গ্রিড */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((item) => (
              <div 
                key={item.id}
                className="flex flex-col justify-between overflow-hidden rounded-3xl border border-light-border dark:border-zinc-800/80 bg-light-card dark:bg-dark-card transition-all duration-300 hover:shadow-xl group"
              >
                <ImageSlider 
                  images={item.images} 
                  title={item.title} 
                  category={item.category} 
                  badge={item.badge} 
                />

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3 text-left">
                    <div className="flex flex-wrap gap-1.5">
                      {item.stack.map((tech, i) => (
                        <span key={i} className="text-[10px] font-bold px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-black text-zinc-800 dark:text-zinc-50 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-zinc-900 dark:text-zinc-50">{item.price}</span>
                        <span className="text-xs text-zinc-400 dark:text-zinc-500 line-through font-medium">{item.regularPrice}</span>
                      </div>
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-semibold flex items-center gap-1">
                        <Tag className="w-3 h-3 text-emerald-500" /> One-time Fee
                      </span>
                    </div>

                    <hr className="border-light-border dark:border-zinc-800/60" />

                    {/* কাস্টম Button কম্পোনেন্ট ব্যবহার করা হয়েছে */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        size="md"
                        onClick={() => window.open(item.liveLink, "_blank", "noopener,noreferrer")}
                        className="w-full gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Live Demo
                      </Button>
                      
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => navigate(`/templates/${item.id}`)}
                        className="w-full gap-1.5"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-light-border dark:border-zinc-800 rounded-3xl">
            <Layers className="w-10 h-10 text-zinc-400 mx-auto mb-3" />
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">কোনো টেমপ্লেট খুঁজে পাওয়া যায়নি!</p>
          </div>
        )}

      </div>
    </div>
  )
}