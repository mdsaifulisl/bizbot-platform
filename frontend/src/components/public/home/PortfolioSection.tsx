import { ExternalLink, ArrowRight } from "lucide-react"
import Button from "@/components/ui/Button"

export default function PortfolioSection() {
  const projects = [
  {
    title: "AFS Travel & Logistics",
    category: "Travel Agency",
    // আনস্প্ল্যাশ থেকে হাই-কোয়ালিটি ট্রাভেল ওয়েবসাইট ডেমো ইমেজ
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
    desc: "ডাইনামিক বুকিং ইঞ্জিন, ট্যুর প্যাকেজ ফিল্টারিং এবং অটোমেটেড হোয়াটসঅ্যাপ চ্যাটবট ইন্টিগ্রেশন সমৃদ্ধ একটি ট্রাভেল প্ল্যাটফর্ম।",
    tags: ["React", "Node.js", "MongoDB", "WhatsApp API"],
    stats: "⚡ 98% Performance Score",
    demoUrl: "https://afs-travel.expertcoder.net" // ডেমো লাইভ লিংক
  },
  {
    title: "Apex Apparel Store",
    category: "E-commerce",
    // আনস্প্ল্যাশ থেকে মডার্ন ই-কমার্স স্টোর ডেমো ইমেজ
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop", 
    desc: "ক্যাশ অন ডেলিভারি (COD) ফ্লো, ঢাকা (৳৬০) ও ঢাকার বাইরে (৳১২০) স্বয়ংক্রিয় লজিস্টিক ম্যানেজমেন্ট সহ একটি ফুল-স্ট্যাক ক্লোথিং স্টোর।",
    tags: ["Next.js", "Express", "SQL", "Tailwind"],
    stats: "🛍️ 1.2s Avg. Checkout",
    demoUrl: "https://apex-store.expertcoder.net" // ডেমো লাইভ লিংক
  },
  {
    title: "Medix Healthcare System",
    category: "Medical / Corporate",
    // আনস্প্ল্যাশ থেকে ডক্টর/মেডিকেল পোর্টাল ডেমো ইমেজ
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea46073e5?q=80&w=800&auto=format&fit=crop",
    desc: "রিয়েল-টাইম ডক্টর অ্যাপয়েন্টমেন্ট শিডিউলিং, প্রেসক্রিপশন পোর্টাল এবং কাস্টমার হ্যান্ডলিংয়ের জন্য ২৪/৭ মেসেঞ্জার এআই বট।",
    tags: ["React", "Redux Toolkit", "Node.js"],
    stats: "🔒 HIPAA Compliant",
    demoUrl: "https://medix-health.expertcoder.net" // ডেমো লাইভ লিংক
  },
  {
    title: "Urban Nest Realty",
    category: "Real Estate",
    // আনস্প্ল্যাশ থেকে লাক্সারি রিয়েল এস্টেট ডেমো ইমেজ
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    desc: "অ্যাডভান্সড ম্যাপ সার্চ ফিল্টার, প্রোপার্টি লিস্টিং ম্যানেজমেন্ট ড্যাশবোর্ড এবং ইনস্ট্যান্ট লিড জেনারেশন কনভারসেশন ফ্লো।",
    tags: ["Vite", "Tailwind CSS", "Express.js"],
    stats: "📈 +40% Lead Conversion",
    demoUrl: "https://urban-nest.expertcoder.net" // ডেমো লাইভ লিংক
  }
]

  return (
    <section className="py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 text-left">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              Our Latest <span className="text-emerald-500 dark:text-emerald-400">Websites Portfolio</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-xl">
              আমরা যে প্রজেক্টগুলো লাইভ এবং সাকসেসফুলি ডেলিভারি করেছি, তার মধ্য থেকে বাছাইকৃত কিছু কাজ।
            </p>
          </div>
          
          <Button variant="outline" className="gap-2 group shrink-0 self-start md:self-end">
            View All Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* ৪টি প্রিমিয়াম কার্ডের গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group flex flex-col rounded-2xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* ১. ব্রাউজার ম্যাক-আপ টপ বার */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-100/80 dark:bg-zinc-900/80 border-b border-light-border dark:border-zinc-800/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 dark:bg-yellow-500/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 dark:bg-green-500/40"></span>
                </div>
                <div className="px-3 py-0.5 bg-white dark:bg-zinc-950 rounded-md text-[10px] text-zinc-400 dark:text-zinc-500 font-medium tracking-wide w-48 truncate text-center shadow-xs">
                  https://{project.title.toLowerCase().replace(/[^a-z0-9]/g, "")}.com
                </div>
                <div className="w-12 text-right">
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 inline-block" />
                </div>
              </div>

              {/* ২. ইমেজ কন্টেইনার (নিউ অ্যাডিশন) */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950 border-b border-light-border dark:border-zinc-800/60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* ইমেজ হোভার ওভারলে ইফেক্ট */}
                <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/[0.04] transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* ৩. কার্ডের টেক্সট কন্টেন্ট এরিয়া */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-black tracking-widest text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
                      {project.stats}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* ৪. টেকনোলজি ট্যাগসমূহ এবং লাইভ অ্যাকশন */}
                <div className="pt-4 border-t border-light-border dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-bold px-2 py-0.5 rounded bg-light-bg dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-light-border dark:border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 inline-flex items-center gap-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors cursor-pointer">
                    Live Demo 
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}