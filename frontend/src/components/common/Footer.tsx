import { Link } from "react-router-dom"
import { Globe, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* টপ সেকশন: ব্র্যান্ড, লিংকস এবং সোশ্যাল */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-light-border dark:border-zinc-800/60">
          
          {/* কলাম ১: ব্র্যান্ড আইডেন্টিটি */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-500 rounded-lg text-zinc-950">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                Bot<span className="text-emerald-500 dark:text-emerald-400">Saiful</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              We build next-generation web platforms and intelligent AI conversational infrastructure to scale your business operations seamlessly.
            </p>
          </div>

          {/* কলাম ২: সার্ভিসেস লিংকস */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">AI Chatbot Automation</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">SEO Optimization</Link></li>
            </ul>
          </div>

          {/* কলাম ৩: কোম্পানির লিংকস */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/templates" className="hover:text-emerald-500 transition-colors">Latest Templates</Link></li>
              <li><Link to="/faqs" className="hover:text-emerald-500 transition-colors">FAQs</Link></li>
              <li><Link to="/docs" className="hover:text-emerald-500 transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* কলাম ৪: কন্ট্যাক্ট ও সোশ্যাল মিডিয়া */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Connect With Us
            </h4>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-500" />
              support@expertcoder.net
            </p>
            
            {/* সোশ্যাল আইকনস (এক্সটার্নাল লিংকের জন্য <a> ট্যাগই থাকবে) */}
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-800 rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/20 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="20" height="20" x="2" y="2" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-800 rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/20 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2.5 bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-800 rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/20 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* বটম সেকশন: কপিরাইট এবং ব্যাক টু টপ বাটন */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium order-2 sm:order-1">
            © {currentYear} ExpertCoder. All rights reserved. Developed with clean code patterns.
          </p>

          {/* ব্যাক টু টপ অ্যাকশন */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors order-1 sm:order-2 cursor-pointer group focus:outline-none"
          >
            <span>Back to Top</span>
            <div className="p-1.5 bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-800 rounded-md group-hover:border-emerald-500/20 transition-all">
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  )
}