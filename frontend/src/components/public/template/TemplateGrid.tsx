import { useNavigate } from "react-router-dom"
import { Eye, ShoppingCart, Tag, Layers } from "lucide-react"
import Button from "@/components/ui/Button"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// ==========================================
// Types & Interfaces
// ==========================================
export interface TemplateItem {
  id: string
  title: string
  category: string
  desc: string
  price: string
  regularPrice: string
  badge?: string
  liveLink: string
  buyLink: string
  stack: string[]
  images: string[]
}

interface TemplateGridProps {
  templates: TemplateItem[]
}

interface ImageSliderProps {
  images: string[]
  title: string
  category: string
  badge?: string
}

// ইন্টারনাল স্লাইডার কম্পোনেন্ট
function ImageSlider({ images, title, category, badge }: ImageSliderProps) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (images.length <= 1 || isPaused) return

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000)

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

// মূল এক্সপোর্ট করা গ্রিড কম্পোনেন্ট
export default function TemplateGrid({ templates }: TemplateGridProps) {
  const navigate = useNavigate()

  if (templates.length === 0) {
    return (
      <div className="text-center py-20 border border-dashed border-light-border dark:border-zinc-800 rounded-3xl">
        <Layers className="w-10 h-10 text-zinc-400 mx-auto mb-3" />
        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">কোনো টেমপ্লেট খুঁজে পাওয়া যায়নি!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {templates.map((item) => (
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
  )
}