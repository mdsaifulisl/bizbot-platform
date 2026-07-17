import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "../../app/store"
import { toggleTheme } from "../../features/theme/themeSlice"
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react"

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 

export default function PublicHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  
  const themeMode = useAppSelector((state) => state.theme.mode)
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border sticky top-0 z-50 backdrop-blur-md bg-opacity-95 dark:bg-opacity-95 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* ================= Left: Logo ================= */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-wide group">
              <div className="p-2 bg-primary/10 border border-primary/20 rounded-xl text-primary transition-all duration-300">
                <div className="w-4 h-4 rounded-md bg-primary" />
              </div>
              <span className="font-sans font-extrabold text-zinc-900 dark:text-zinc-50">
                Bot<span className="text-primary">Saiful</span>
              </span>
            </Link>
          </div>

          {/* ================= Center: Desktop Menu ================= */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive("/") ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}
            >
              Home
            </Link>
            <Link 
              to="/templates" 
              className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive("/templates") ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}
            >
              Website Templates
            </Link>
            
            <Link 
              to="/ai-features" 
              className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive("/ai-features") ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}
            >
              AI Chatbot
            </Link>

            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive("/pricing") ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}
            >
              Pricing
            </Link>

          

            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive("/blog") ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}
            >
              Blog
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive("/contact") ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}
            >
              Contact
            </Link>
          </div>

          {/* ================= Right: Theme Toggle + Action Buttons ================= */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 text-zinc-500 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary rounded-xl transition-colors cursor-pointer"
              title={themeMode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {themeMode === "dark" ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-zinc-600" />}
            </button>

            <button
              onClick={() => navigate("/customer/login")}
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer px-3 py-2"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="group flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-zinc-950 font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-sm cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Hamburger (Mobile Controls) */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 text-zinc-500 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary rounded-xl transition-colors cursor-pointer"
            >
              {themeMode === "dark" ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-zinc-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ================= Mobile Menu Panel (সরাসরি ডিরেক্ট লিঙ্কস) ================= */}
      {isOpen && (
        <div className="lg:hidden bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border px-4 pt-2 pb-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto transition-colors duration-200">
          <div className="space-y-1.5 py-2">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)} 
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}
            >
              Home
            </Link>

            <Link 
              to="/templates" 
              onClick={() => setIsOpen(false)} 
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/templates") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}
            >
              Website Templates
            </Link>

            <Link 
              to="/ai-features" 
              onClick={() => setIsOpen(false)} 
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/ai-features") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}
            >
              AI Chatbot
            </Link>
            
            <Link 
              to="/pricing" 
              onClick={() => setIsOpen(false)} 
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/pricing") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}
            >
              Pricing
            </Link>
            
            <Link 
              to="/portfolio" 
              onClick={() => setIsOpen(false)} 
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/portfolio") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}
            >
              Portfolio
            </Link>

            <Link 
              to="/blog" 
              onClick={() => setIsOpen(false)} 
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/blog") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}
            >
              Blog
            </Link>

            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/contact") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}
            >
              Contact
            </Link>
          </div>

          {/* মোবাইল অ্যাকশন বাটন */}
          <div className="pt-4 border-t border-light-border dark:border-dark-border space-y-3">
            <button
              onClick={() => { setIsOpen(false); navigate("/customer/login"); }}
              className="w-full text-center py-2.5 bg-light-bg dark:bg-secondary text-zinc-600 dark:text-zinc-200 font-medium rounded-lg transition-colors block cursor-pointer text-sm"
            >
              Login
            </button>
            <button
              onClick={() => { setIsOpen(false); navigate("/register"); }}
              className="w-full text-center bg-primary hover:bg-primary-hover text-zinc-950 font-semibold py-2.5 rounded-lg transition-colors block cursor-pointer text-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}