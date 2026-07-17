import { useState, FormEvent } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  // HTML স্ক্রিপ্ট এবং ক্ষতিকারক ট্যাগ স্যানিটাইজ করার ফাংশন
  const sanitizeInput = (text: string): string => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;")
      .trim()
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    // সাবমিশনের আগে সমস্ত ফিল্ড স্যানিটাইজ করা হচ্ছে
    const sanitizedData = {
      name: sanitizeInput(formData.name).substring(0, 50),
      email: sanitizeInput(formData.email).substring(0, 80),
      phone: sanitizeInput(formData.phone).substring(0, 20),
      company: sanitizeInput(formData.company).substring(0, 50),
      subject: sanitizeInput(formData.subject).substring(0, 100),
      message: sanitizeInput(formData.message).substring(0, 1000)
    }

    // ভ্যালিডেশন চেক (ইমেইল ফরম্যাট এবং খালি ফিল্ড)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitizedData.email)) {
      setStatus("error")
      return
    }

    try {
      // এখানে আপনার API কলের সময় `sanitizedData` অবজেক্টটি পাঠাবেন
      await new Promise(resolve => setTimeout(resolve, 1200))
      setStatus("success")
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <div id="contact-form-section" className="bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-3xl p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Name & Email Field */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[11px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Full Name (Max 50)
            </label>
            <input 
              type="text" 
              required 
              maxLength={50}
              value={formData.name} 
              onChange={e => {
                // শুধু লেটার ও স্পেস এলাউড (সংখ্যা বা বিশেষ চিহ্ন ইনপুট দিতে পারবে না)
                const val = e.target.value.replace(/[^a-zA-Z\s.]/g, "")
                setFormData({...formData, name: val})
              }} 
              className="w-full px-4 py-3 bg-light-bg dark:bg-zinc-900 border border-light-border dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none rounded-2xl text-sm font-semibold text-zinc-800 dark:text-zinc-100 transition-all" 
              placeholder="John Doe" 
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Email Address (Max 80)
            </label>
            <input 
              type="email" 
              required 
              maxLength={80}
              value={formData.email} 
              onChange={e => setFormData({...formData, email: e.target.value})} 
              className="w-full px-4 py-3 bg-light-bg dark:bg-zinc-900 border border-light-border dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none rounded-2xl text-sm font-semibold text-zinc-800 dark:text-zinc-100 transition-all" 
              placeholder="john@example.com" 
            />
          </div>
        </div>

        {/* Phone & Company Field */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[11px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Phone Number (Optional - Max 20)
            </label>
            <input 
              type="tel" 
              maxLength={20}
              value={formData.phone} 
              onChange={e => {
                // শুধু নাম্বার, প্লাস, স্পেস এবং ড্যাশ এলাউড
                const val = e.target.value.replace(/[^0-9+\s-]/g, "")
                setFormData({...formData, phone: val})
              }} 
              className="w-full px-4 py-3 bg-light-bg dark:bg-zinc-900 border border-light-border dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none rounded-2xl text-sm font-semibold text-zinc-800 dark:text-zinc-100 transition-all" 
              placeholder="+880 1700-000000" 
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Company Name (Max 50)
            </label>
            <input 
              type="text" 
              maxLength={50}
              value={formData.company} 
              onChange={e => setFormData({...formData, company: e.target.value})} 
              className="w-full px-4 py-3 bg-light-bg dark:bg-zinc-900 border border-light-border dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none rounded-2xl text-sm font-semibold text-zinc-800 dark:text-zinc-100 transition-all" 
              placeholder="Company Ltd." 
            />
          </div>
        </div>

        {/* Subject Field */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Subject (Max 100)
          </label>
          <input 
            type="text" 
            required 
            maxLength={100}
            value={formData.subject} 
            onChange={e => setFormData({...formData, subject: e.target.value})} 
            className="w-full px-4 py-3 bg-light-bg dark:bg-zinc-900 border border-light-border dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none rounded-2xl text-sm font-semibold text-zinc-800 dark:text-zinc-100 transition-all" 
            placeholder="AI Chatbot Integration Query" 
          />
        </div>

        {/* Message Field */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label className="text-[11px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Message</label>
            <span className="text-[10px] font-bold text-zinc-400">{formData.message.length}/1000</span>
          </div>
          <textarea 
            required 
            rows={5} 
            maxLength={1000}
            value={formData.message} 
            onChange={e => setFormData({...formData, message: e.target.value})} 
            className="w-full px-4 py-3 bg-light-bg dark:bg-zinc-900 border border-light-border dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none rounded-2xl text-sm font-semibold text-zinc-800 dark:text-zinc-100 transition-all resize-none" 
            placeholder="Describe your project goals..." 
          />
        </div>

        {/* Status Messages & Submit Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="flex-1">
            {status === "success" && (
              <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold bg-emerald-500/10 px-4 py-2.5 rounded-xl">
                <CheckCircle className="w-4 h-4" /> Message sent successfully!
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-rose-500 text-xs font-bold bg-rose-500/10 px-4 py-2.5 rounded-xl">
                <AlertCircle className="w-4 h-4" /> Submission failed or invalid data detected.
              </div>
            )}
          </div>
          <button 
            type="submit" 
            disabled={status === "submitting"} 
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 disabled:bg-emerald-500/60 text-white dark:text-zinc-950 text-xs font-black uppercase tracking-wider rounded-2xl shadow-lg transition-all cursor-pointer whitespace-nowrap self-end"
          >
            {status === "submitting" ? (
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <><Send className="w-3.5 h-3.5" /> Send Message</>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}