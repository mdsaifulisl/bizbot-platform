import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { 
  Bot, 
  Code, 
  BarChart3, 
  TrendingUp, 
  Layers, 
  Search as SearchIcon, 
  X, 
  ArrowRight, 
  Clock, 
  Calendar 
} from "lucide-react"

interface Category {
  _id: string
  name: string
  slug: string
  iconName?: string
  count?: number
}

interface Post {
  id: string
  title: string
  desc: string
  category: string
  image: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readTime: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  all: Layers,
  bot: Bot,
  code: Code,
  chart: BarChart3,
  trend: TrendingUp,
}

export default function BlogSection() {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const [categories, setCategories] = useState<Category[]>([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoadingCategories(true)
        const dummyDbCategories: Category[] = [
          { _id: "all", name: "All Topics", slug: "all", iconName: "all" },
          { _id: "1", name: "AI Chatbots", slug: "ai-chatbots", iconName: "bot" },
          { _id: "2", name: "Web Dev", slug: "web-dev", iconName: "code" },
          { _id: "3", name: "SEO", slug: "seo", iconName: "chart" },
          { _id: "4", name: "Business Growth", slug: "business", iconName: "trend" },
        ]
        setCategories(dummyDbCategories)
      } catch (error) {
        console.error("Failed to fetch categories:", error)
      } finally {
        setIsLoadingCategories(false)
      }
    }
    fetchCategories()
  }, [])

  const posts: Post[] = [
    {
      id: "ai-chatbot-guide",
      title: "How to Build a Custom AI Chatbot for Your Business",
      desc: "<h2>কীভাবে কাস্টম AI চ্যাটবট তৈরি করবেন?</h2><p>আপনার বিজনেস ডেটার উপর ভিত্তি করে কীভাবে একটি <strong>কাস্টম AI চ্যাটবট</strong> তৈরি করবেন এবং কাস্টমার সাপোর্ট অটোমেট করবেন তার সম্পূর্ণ গাইডলাইন।</p>",
      category: "AI Chatbots",
      image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=600&auto=format&fit=crop",
      author: {
        name: "Mahidul Mallick",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
      },
      date: "July 12, 2026",
      readTime: "8 min read"
    },
    {
      id: "seo-checklist-2026",
      title: "The Ultimate SEO Checklist for E-Commerce Websites",
      desc: "<p>সার্চ ইঞ্জিনের প্রথম পাতায় আপনার প্রোডাক্ট নিয়ে আসতে প্রয়োজনীয় <em>অন-পেইজ</em> এবং টেকনিক্যাল এসইও-র সেরা ট্রিকসগুলো জানুন।</p>",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      author: {
        name: "Mahidul Mallick",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
      },
      date: "June 28, 2026",
      readTime: "6 min read"
    },
    {
      id: "mern-vs-nextjs",
      title: "MERN Stack vs Next.js: Which One to Choose in 2026?",
      desc: "<p>আপনার পরবর্তী ওয়েব অ্যাপ্লিকেশনের জন্য ট্র্যাডিশনাল <strong>MERN স্ট্যাক</strong> নাকি মডার্ন <strong>Next.js</strong> ব্যবহার করবেন? পারফরম্যান্স ও এসইও-র বিস্তারিত তুলনা।</p>",
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      author: {
        name: "Mahidul Mallick",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
      },
      date: "May 15, 2026",
      readTime: "10 min read"
    }
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "all" || 
      post.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory.toLowerCase().replace(/\s+/g, "-")
    
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })

  return (
    <div className="bg-light-bg dark:bg-dark-bg transition-colors duration-300 pb-10">
      <section className="py-8 border-b border-light-border dark:border-zinc-800/50 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            <div className="flex-1 flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {isLoadingCategories ? (
                Array.from({ length: 4 }).map((_, idx) => (
                  <div key={idx} className="w-28 h-10 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-2xl" />
                ))
              ) : (
                categories.map((category) => {
                  const Icon = iconMap[category.iconName || "all"] || Layers
                  const isActive = selectedCategory === category.slug

                  return (
                    <button
                      key={category._id}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-emerald-500 border-emerald-500 text-white dark:text-zinc-950 shadow-lg shadow-emerald-500/10"
                          : "border-light-border dark:border-zinc-800 bg-light-card dark:bg-dark-card text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-750"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-current" : "text-emerald-500"}`} />
                      <span>{category.name}</span>
                    </button>
                  )
                })
              )}
            </div>

            <div className="w-full lg:w-80 relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-emerald-500 transition-colors">
                <SearchIcon className="w-4 h-4" />
              </div>

              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blogs..."
                className="w-full pl-11 pr-11 py-2.5 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-750 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none rounded-2xl text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 transition-all duration-300 shadow-sm"
              />

              <div className="absolute inset-y-0 right-4 flex items-center gap-1.5">
                {searchQuery ? (
                  <button
                    onClick={() => { setSearchQuery(""); inputRef.current?.focus() }}
                    className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-light-border dark:border-zinc-800 bg-light-bg dark:bg-zinc-900 px-1.5 font-mono text-[9px] font-black text-zinc-400 dark:text-zinc-500">
                    /
                  </kbd>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="blog-grid" className="py-12 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-light-border dark:border-zinc-800 rounded-3xl">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-bold">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="group flex flex-col justify-between bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-3xl overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-750 hover:shadow-xl hover:shadow-emerald-500/[0.01] transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-light-border dark:border-zinc-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 bg-emerald-500 text-white dark:text-zinc-950 text-[9px] font-black uppercase tracking-wider rounded-lg shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-400 dark:text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-emerald-500" /> {post.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-800" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-emerald-500" /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-snug group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        {post.title}
                      </h3>

                      <div 
                        className="text-xs text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed line-clamp-3 prose-mini"
                        dangerouslySetInnerHTML={{ __html: post.desc }}
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-light-border dark:border-zinc-900">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-7 h-7 rounded-full object-cover border border-light-border dark:border-zinc-800"
                        />
                        <span className="text-[11px] font-black text-zinc-700 dark:text-zinc-300">
                          {post.author.name}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-emerald-500 transition-all transform group-hover:translate-x-1">
                        Read More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  )
}