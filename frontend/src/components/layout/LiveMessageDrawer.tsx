import { useState, useEffect, useRef } from "react"
import { MessageSquare, X, Send, User, Bot } from "lucide-react"

interface Message {
  id: string
  sender: "user" | "admin" | "bot"
  text: string
  timestamp: string
}

interface LiveMessageDrawerProps {
  isAuthenticated: boolean
  user: { name: string; email: string }
}

export default function LiveMessageDrawer({ isAuthenticated, user }: LiveMessageDrawerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVerified, setIsVerified] = useState(isAuthenticated)
  const [messageInput, setMessageInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  
  const [guestInfo, setGuestInfo] = useState({ name: "", email: "", phone: "" })

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "হ্যালো! আমি BotSaiful-এর এআই অ্যাসিস্ট্যান্ট। আপনাকে কীভাবে সাহায্য করতে পারি?",
      timestamp: "১:৩০ PM"
    }
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // এটি আপনার LiveMessageDrawer কম্পোনেন্টের ভেতরে বসিয়ে দিন
useEffect(() => {
  const handleOpenChat = () => {
    setIsOpen(true)
  }

  // ইভেন্ট লিসেনার সেট করা
  window.addEventListener("open-live-chat", handleOpenChat)

  // কম্পোনেন্ট আনমাউন্ট হলে লিসেনার রিমুভ করা
  return () => {
    window.removeEventListener("open-live-chat", handleOpenChat)
  }
}, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerified(true)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim()) return

    const userTime = new Date().toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit" })
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: messageInput,
      timestamp: userTime
    }

    setMessages((prev) => [...prev, newUserMessage])
    setMessageInput("")

    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      const replyTime = new Date().toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit" })
      
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "আপনার বার্তাটি আমরা পেয়েছি। আমাদের একজন প্রতিনিধি অথবা এআই এজেন্ট খুব শীঘ্রই আপনার সাথে যুক্ত হচ্ছে।",
        timestamp: replyTime
      }
      setMessages((prev) => [...prev, botReply])
    }, 2000)
  }

  return (
    <>
      {/* Floating Chat Button - Compact size on mobile, matching ScrollToTop */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 p-2.5 sm:p-3.5 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 rounded-xl shadow-lg border border-emerald-400/20 hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Open live chat"
      >
        <MessageSquare className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
      </button>

      {/* Chat Drawer Panel */}
      <div className={`fixed inset-0 z-[110] transition-visibility duration-300 ${isOpen ? "visible" : "invisible"}`}>
        <div 
          onClick={() => setIsOpen(false)} 
          className={`absolute inset-0 bg-zinc-950/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        />
        
        {/* Slid-in from Right Side */}
        <div className={`absolute top-0 right-0 h-full w-full sm:w-96 bg-light-card dark:bg-zinc-950 border-l border-light-border dark:border-zinc-900 shadow-2xl flex flex-col transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-light-border dark:border-zinc-900 p-4 bg-zinc-50/50 dark:bg-zinc-900/20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-light-card dark:border-zinc-950 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-black text-zinc-800 dark:text-zinc-50">Live Chat Support</h4>
                <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">Agent & AI is Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Container Body */}
          <div className="flex-1 flex flex-col min-h-0 bg-zinc-50/30 dark:bg-zinc-950/10">
            {!isVerified ? (
              /* Guest Form Verification */
              <form onSubmit={handleVerifySubmit} className="p-6 space-y-4 my-auto">
                <div className="text-center space-y-1 mb-2">
                  <h5 className="text-sm font-black text-zinc-800 dark:text-zinc-100">চ্যাট শুরু করার আগে</h5>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">দয়া করে আপনার সঠিক তথ্যগুলো দিয়ে যুক্ত হোন।</p>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="আপনার নাম"
                    value={guestInfo.name}
                    onChange={(e) => setGuestInfo({ ...guestInfo, name: e.target.value })}
                    className="w-full bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-900 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-zinc-800 dark:text-zinc-100"
                  />
                  <input
                    type="email"
                    required
                    placeholder="ইমেইল অ্যাড্রেস"
                    value={guestInfo.email}
                    onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
                    className="w-full bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-900 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-zinc-800 dark:text-zinc-100"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="মোবাইল নম্বর"
                    value={guestInfo.phone}
                    onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                    className="w-full bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-900 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-zinc-800 dark:text-zinc-100"
                  />
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-zinc-950 font-bold py-2.5 rounded-xl transition-all text-sm cursor-pointer mt-2">
                  চ্যাট বক্সে প্রবেশ করুন
                </button>
              </form>
            ) : (
              /* Active Messaging Screen */
              <>
                {/* Messages Feed */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => {
                    const isMe = msg.sender === "user"
                    return (
                      <div key={msg.id} className={`flex gap-2.5 max-w-[85%] ${isMe ? "ml-auto flex-row-reverse" : "mr-auto"}`}>
                        {!isMe && (
                          <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 shrink-0 border border-light-border dark:border-zinc-800">
                            {msg.sender === "bot" ? <Bot className="w-4 h-4 text-emerald-500" /> : <User className="w-4 h-4 text-blue-500" />}
                          </div>
                        )}
                        <div className="space-y-1">
                          <div className={`p-3 rounded-2xl text-xs sm:text-sm shadow-sm leading-relaxed ${isMe ? "bg-primary text-zinc-950 font-medium rounded-tr-none" : "bg-light-card dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-tl-none border border-light-border dark:border-zinc-900"}`}>
                            {msg.text}
                          </div>
                          <p className={`text-[10px] text-zinc-400 font-medium ${isMe ? "text-right" : "text-left"}`}>{msg.timestamp}</p>
                        </div>
                      </div>
                    )
                  })}

                  {/* Loading Typing Indicator */}
                  {isTyping && (
                    <div className="flex gap-2.5 max-w-[85%] mr-auto">
                      <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 shrink-0 border border-light-border dark:border-zinc-800">
                        <Bot className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="bg-light-card dark:bg-zinc-900 px-4 py-3 rounded-2xl rounded-tl-none border border-light-border dark:border-zinc-900 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Controls */}
                <form onSubmit={handleSendMessage} className="p-3 border-t border-light-border dark:border-zinc-900 bg-light-card dark:bg-zinc-950">
                  <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-light-border dark:border-zinc-900/60 p-1 pl-3">
                    <input
                      type="text"
                      placeholder="বার্তাটি লিখুন..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      className="flex-1 bg-transparent text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 focus:outline-none py-2"
                    />
                    <button type="submit" className="p-2 bg-primary hover:bg-primary-hover text-zinc-950 rounded-lg transition-all cursor-pointer">
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </>
  )
}