import { useState, useEffect, useRef } from "react"
import { MessageSquare, Bot, User, Sparkles, Send, CheckCircle2 } from "lucide-react"

interface Message {
  sender: "user" | "bot"
  text: string
  time: string
}

export default function ConversationDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "হ্যালো! আমি Expert-Bot। আমাদের যেকোনো প্রোডাক্ট, প্রাইসিং বা সার্ভিস সম্পর্কে জানতে আমাকে প্রশ্ন করতে পারেন।",
      time: "10:00 AM"
    }
  ])
  
  const [isTyping, setIsTyping] = useState(false)
  
  // 👈 চ্যাট কন্টেইনারের স্ক্রোল এরিয়া ট্র্যাক করার জন্য রেফ
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // শুধুমাত্র চ্যাট বক্সের স্ক্রোল এলিমেন্টকে নিচে নামানোর জন্য ফাংশন
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const sampleQueries = [
    {
      q: "আপনাদের সার্ভিস চার্জ কত?",
      a: "আমাদের বেসিক প্যাকেজ শুরু মাত্র ৳৪,৯৯৯ থেকে এবং প্রিমিয়াম প্যাকেজ ৳১২,৯৯৯। বিস্তারিত জানতে আমাদের Pricing সেকশনটি দেখতে পারেন।"
    },
    {
      q: "বট ট্রেইন করতে কত সময় লাগে?",
      a: "আপনার PDF বা ওয়েবসাইট ইউআরএল সাবমিট করার পর আমাদের ভেক্টর ডাটাবেস এম্বেডিং প্রসেসটি সম্পন্ন হতে ২ মিনিটেরও কম সময় লাগে।"
    },
    {
      q: "এটি কি বাংলায় কথা বলতে পারে?",
      a: "হ্যাঁ, অবশ্যই! আমাদের AI চ্যাটবট উন্নত NLP টেকনোলজির সাহায্যে একদম মানুষের মতো নিখুঁত এবং সাবলীল বাংলা ও ইংরেজিতে উত্তর দিতে সক্ষম।"
    },
    {
        q: "আমার ওয়েবসাইটে বট কিভাবে বসাবো?",
        a: "আপনার ওয়েবসাইটে বট বসানোর জন্য, আমাদের ইন্টিগ্রেশন ডকুমেন্টেশন অনুসরণ করুন। আমরা সহজেই আপনার ওয়েবসাইটের HTML/CSS/JavaScript কোডে বটটি ইন্টিগ্রেট করতে সাহায্য করতে পারি।"
    }
  ]

  const handleQueryClick = (question: string, answer: string) => {
    if (isTyping) return

    const currentTime = new Date().toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit" })

    setMessages((prev) => [...prev, { sender: "user", text: question, time: currentTime }])
    setIsTyping(true)

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: answer, time: currentTime }])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <section id="demo" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 border-light-border dark:border-zinc-800/50 text-left relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black uppercase tracking-wider rounded-xl">
            <Sparkles className="w-3.5 h-3.5" /> Live Sandbox
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
            Try It Yourself <br />
            <span className="text-emerald-500 dark:text-emerald-400">AI Conversation Demo</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-semibold">
            নিচের যেকোনো একটি প্রশ্নে ক্লিক করে লাইভ দেখে নিন আমাদের চ্যাটবট কত দ্রুত এবং বুদ্ধিমত্তার সাথে কাস্টমার কোয়েরি হ্যান্ডেল করে।
          </p>
        </div>

        {/* মেইন লেআউট গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* বাম কলাম: কুইক কোয়েশ্চেন প্যানেল */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Click a question to test:
            </h3>
            <div className="space-y-3">
              {sampleQueries.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQueryClick(item.q, item.a)}
                  disabled={isTyping}
                  className="w-full text-left p-4 rounded-2xl border border-light-border dark:border-zinc-800/80 bg-light-card dark:bg-dark-card hover:border-emerald-500/40 dark:hover:border-emerald-500/30 text-xs font-bold text-zinc-700 dark:text-zinc-300 transition-all cursor-pointer shadow-sm hover:shadow active:scale-[0.99] disabled:opacity-50"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>

          {/* ডান কলাম: চ্যাটবট ইন্টারফেস */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-light-border dark:border-zinc-800 bg-light-card dark:bg-zinc-950 shadow-2xl overflow-hidden h-[450px] flex flex-col justify-between">
              
              {/* চ্যাট হেডার */}
              <div className="p-4 border-b border-light-border dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-zinc-800 dark:text-zinc-100 flex items-center gap-1.5">
                      Expert AI Assistant
                    </h4>
                    <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Always Active
                    </span>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
              </div>

              {/* চ্যাট মেসেজ এরিয়া (এখানে scroll-container রেফ যুক্ত করা হয়েছে) */}
              <div 
                ref={chatContainerRef}
                className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scroll-smooth"
              >
                {messages.map((msg, index) => (
                  <div key={index} className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}>
                    
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center border flex-shrink-0 ${
                      msg.sender === "user" 
                        ? "bg-zinc-100 dark:bg-zinc-800 border-light-border dark:border-zinc-700 text-zinc-600 dark:text-zinc-400" 
                        : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                    }`}>
                      {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-tr-none"
                        : "bg-zinc-50 dark:bg-zinc-900/30 border border-light-border dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-tl-none"
                    }`}>
                      <p>{msg.text}</p>
                      <span className="block text-[8px] text-zinc-400 dark:text-zinc-500 font-bold mt-1 text-right">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}

                {/* টাইপিং অ্যানিমেশন */}
                {isTyping && (
                  <div className="flex gap-3 mr-auto max-w-[85%] animate-pulse">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-900/30 border border-light-border dark:border-zinc-800 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* বটম ইনপুট বার */}
              <div className="p-3 border-t border-light-border dark:border-zinc-900 bg-light-card dark:bg-zinc-950 flex items-center gap-2">
                <input
                  type="text"
                  disabled
                  placeholder="Ask something or click a query from left..."
                  className="flex-1 bg-zinc-50 dark:bg-zinc-900 border border-light-border dark:border-zinc-800 rounded-xl px-4 py-2 text-xs text-zinc-400 placeholder-zinc-400 outline-none"
                />
                <button disabled className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-light-border dark:border-zinc-800 text-zinc-400">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}