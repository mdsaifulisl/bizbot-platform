import { BarChart3, TrendingUp, Users, MessageSquare, Zap, Layers, Monitor } from "lucide-react"

export default function DashboardPreview() {
  const stats = [
    { label: "Total Conversations", value: "32,840", change: "+12.3%", icon: MessageSquare, color: "text-blue-500" },
    { label: "AI Resolution Rate", value: "94.2%", change: "+4.8%", icon: Zap, color: "text-emerald-500" },
    { label: "Avg. Response Time", value: "0.45s", change: "-18%", icon: TrendingUp, color: "text-purple-500" },
  ]

  return (
    <section id="dashboard-preview" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 border-b border-light-border dark:border-zinc-800/50 text-left relative overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেটিভ গ্লো */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-emerald-500/[0.03] dark:bg-emerald-400/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black uppercase tracking-wider rounded-xl">
            <Monitor className="w-3.5 h-3.5" /> Analytics Control
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
            Powerful Dashboard <br />
            <span className="text-emerald-500 dark:text-emerald-400">Monitor AI in Real-Time</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-semibold">
            এক নজরে দেখে নিন আপনার বট কেমন পারফর্ম করছে। কাস্টমার স্যাটিসফ্যাকশন, রেসপন্স ভলিউম এবং ডেটা ইনসাইট ট্র্যাক করুন একটি সিঙ্গেল সেন্ট্রালাইজড ইন্টারফেস থেকে।
          </p>
        </div>

        {/* ড্যাশবোর্ড মোশন কার্ড / উইন্ডো */}
        <div className="rounded-3xl border border-light-border dark:border-zinc-800 bg-light-card dark:bg-zinc-950 p-4 md:p-6 shadow-2xl relative">
          
          {/* উইন্ডো কন্ট্রোল বার */}
          <div className="flex items-center justify-between border-b border-light-border dark:border-zinc-900 pb-4 mb-6">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="px-4 py-1 rounded-xl bg-light-bg dark:bg-zinc-900 border border-light-border dark:border-zinc-800 text-[10px] text-zinc-400 dark:text-zinc-500 font-mono font-bold w-48 sm:w-64 text-center truncate">
              admin.expertcoder.ai/dashboard
            </div>
            <Layers className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
          </div>

          {/* ইন্টারনাল ড্যাশবোর্ড গ্রিড */}
          <div className="space-y-6">
            
            {/* কুইক স্ট্যাটস কার্ডস */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="p-4 rounded-2xl border border-light-border dark:border-zinc-900 bg-light-bg dark:bg-zinc-900/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">{stat.label}</span>
                      <Icon className={`w-4 h-4 ${stat.color}`} />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-zinc-800 dark:text-zinc-100">{stat.value}</span>
                      <span className={`text-[10px] font-black ${stat.change.startsWith("+") ? "text-emerald-500" : "text-purple-500"}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* সেকেন্ডারি রো: চার্ট এবং রিসেন্ট অ্যাক্টিভিটি সিমুলেশন */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* লেফট সাইড: সিমুলেটেড বার চার্ট */}
              <div className="lg:col-span-2 p-5 rounded-2xl border border-light-border dark:border-zinc-900 bg-light-bg dark:bg-zinc-900/50 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-emerald-500" /> Resolution Analytics (Weekly)
                  </h4>
                  <span className="text-[10px] text-zinc-400 font-bold">Updated 1m ago</span>
                </div>
                
                {/* কাস্টম বার অ্যানিমেশন ম্যাকআপ */}
                <div className="h-36 flex items-end justify-between gap-2 pt-4 border-b border-light-border dark:border-zinc-800">
                  {[45, 60, 55, 75, 90, 85, 95].map((height, i) => (
                    <div key={i} className="w-full flex flex-col items-center gap-1">
                      <div 
                        style={{ height: `${height}%` }} 
                        className={`w-full rounded-t-lg transition-all duration-500 ${
                          i === 6 ? "bg-emerald-500 dark:bg-emerald-400" : "bg-zinc-300 dark:bg-zinc-800"
                        }`}
                      />
                      <span className="text-[9px] font-bold text-zinc-400 mt-1">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* রাইট সাইড: লাইভ কনভারসেশন লগ্স */}
              <div className="p-5 rounded-2xl border border-light-border dark:border-zinc-900 bg-light-bg dark:bg-zinc-900/50 space-y-4">
                <h4 className="text-xs font-black text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-500" /> Active Sessions
                </h4>
                
                <div className="space-y-3 font-mono text-[10px]">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-800/60">
                    <span className="text-zinc-600 dark:text-zinc-400 truncate max-w-[120px]">#user_8492_dhaka</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">Resolved by AI</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-800/60">
                    <span className="text-zinc-600 dark:text-zinc-400 truncate max-w-[120px]">#user_3211_chittagong</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">Resolved by AI</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-800/60">
                    <span className="text-zinc-600 dark:text-zinc-400 truncate max-w-[120px]">#user_9014_khulna</span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20">Live Agent Call</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}