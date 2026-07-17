import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react"

interface Post {
  id: string
  title: string
  desc: string // HTML Content from Editor
  category: string
  image: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readTime: string
}

export default function BlogDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setIsLoading(true)
        
        // Simulated Database Fetch based on ID
        const dummyPosts: Post[] = [
          {
            id: "ai-chatbot-guide",
            title: "How to Build a Custom AI Chatbot for Your Business",
            desc: `
              <p>আপনার বিজনেস ডেটার উপর ভিত্তি করে কীভাবে একটি <strong>কাস্টম AI চ্যাটবট</strong> তৈরি করবেন এবং কাস্টমার সাপোর্ট অটোমেট করবেন তার সম্পূর্ণ গাইডলাইন।</p>
              <h2>কেন আপনার বিজনেসে AI চ্যাটবট প্রয়োজন?</h2>
              <p>বর্তমান সময়ে কাস্টমার সার্ভিসের রেসপন্স টাইম যত কমানো যাবে, সেলস কনভার্সন তত বৃদ্ধি পাবে। চ্যাটবট ২৪/৭ কাস্টমারদের প্রশ্নের ইনস্ট্যান্ট উত্তর দিতে পারে।</p>
              <ul>
                <li>ইনস্ট্যান্ট কাস্টমার সাপোর্ট</li>
                <li>অটোমেটেড লিড জেনারেশন</li>
                <li>হিউম্যান রিসোর্স খরচ কমানো</li>
              </ul>
              <blockquote>AI চ্যাটবট আপনার ব্যবসার কাস্টমার সাপোর্ট খরচ প্রায় ৩০% পর্যন্ত কমিয়ে আনতে সক্ষম।</blockquote>
            `,
            category: "AI Chatbots",
            image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=1200&auto=format&fit=crop",
            author: { name: "Mahidul Mallick", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" },
            date: "July 12, 2026",
            readTime: "8 min read"
          }
        ]

        const foundPost = dummyPosts.find((p) => p.id === id)
        setPost(foundPost || null)
      } catch (error) {
        console.error("Error fetching post info:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPostDetails()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [id])


  const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: post?.title,
        text: "Check out this blog post!",
        url: window.location.href,
      })
    } catch (error) {
      console.error("Error sharing:", error)
    }
  } else {
    // Web Share API না থাকলে ক্লিপবোর্ডে লিংক কপি হবে (Fallback)
    navigator.clipboard.writeText(window.location.href)
    alert("Link copied to clipboard!")
  }
}

  if (isLoading) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex flex-col items-center justify-center gap-4">
        <p className="text-zinc-500 dark:text-zinc-400 font-bold">Article not found.</p>
        <button onClick={() => navigate("/blog")} className="flex items-center gap-2 text-xs font-black text-emerald-500 uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300 pb-20 text-left">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Back Navigation & Category */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-xs font-black text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-wider rounded-xl">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-light-border dark:border-zinc-800/80 mb-8">
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover border border-light-border dark:border-zinc-800" />
            <div>
              <p className="text-xs font-black text-zinc-800 dark:text-zinc-200">{post.author.name}</p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 dark:text-zinc-500 mt-0.5">
                <span className="flex items-center gap-0.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span>•</span>
                <span className="flex items-center gap-0.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
            </div>
          </div>
          <button onClick={handleShare} className="p-2.5 rounded-xl border border-light-border dark:border-zinc-800 bg-light-card dark:bg-dark-card text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Image */}
        <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 mb-10 border border-light-border dark:border-zinc-800/50">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Rich Text Render Area */}
        <div 
          className="prose prose-sm sm:prose-base max-w-none dark:prose-invert 
            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-zinc-900 dark:prose-headings:text-zinc-50
            prose-p:text-zinc-600 dark:prose-p:text-zinc-300 prose-p:leading-relaxed
            prose-strong:text-zinc-900 dark:prose-strong:text-zinc-50 prose-strong:font-black
            prose-code:text-emerald-500 dark:prose-code:text-emerald-400 prose-code:bg-zinc-100 dark:prose-code:bg-zinc-900/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
            prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-zinc-50 dark:prose-blockquote:bg-zinc-900/30 prose-blockquote:px-6 prose-blockquote:py-1 prose-blockquote:rounded-r-2xl prose-blockquote:italic
            prose-ul:list-disc prose-ol:list-decimal"
          dangerouslySetInnerHTML={{ __html: post.desc }}
        />

      </article>
    </div>
  )
}