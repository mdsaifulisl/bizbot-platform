import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "../../app/store"
import { toggleTheme } from "../../features/theme/themeSlice"
import { Menu, X, ArrowRight, Sun, Moon, User, LogOut, LayoutDashboard, Settings, UserCircle, Heart, Bot, CreditCard,  HelpCircle   } from "lucide-react"

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 

export default function PublicHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  
  const themeMode = useAppSelector((state) => state.theme.mode)
  
  // আপনার Redux স্টোরের auth স্টেট অনুযায়ী এটি পরিবর্তন করে নেবেন (যেমন: state.auth.user বা state.auth.isAuthenticated)
  const user = useAppSelector((state: any) => state.auth?.user || { name: "Saiful Islam", email: "saiful01741899@gmail.com" }) 
  const isAuthenticated = useAppSelector((state: any) => state.auth?.isAuthenticated ?? true) 

  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const handleLogout = () => {
    setIsProfileOpen(false)
    // এখানে আপনার লগআউট অ্যাকশন ডিসপ্যাচ করুন
    // dispatch(logout())
    navigate("/")
  }

  return (
    <>
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
              <Link to="/" className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive("/") ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}>Home</Link>
              <Link to="/templates" className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive("/templates") ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}>Website Templates</Link>
              <Link to="/ai-features" className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive("/ai-features") ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}>AI Chatbot</Link>
              <Link to="/pricing" className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive("/pricing") ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}>Pricing</Link>
              <Link to="/blog" className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive("/blog") ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}>Blog</Link>
              <Link to="/contact" className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive("/contact") ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}>Contact</Link>
            </div>

            {/* ================= Right: Controls & Profile ================= */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 text-zinc-500 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary rounded-xl transition-colors cursor-pointer"
              >
                {themeMode === "dark" ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-zinc-600" />}
              </button>

              {isAuthenticated ? (
                /* প্রোফাইল বাটন ট্রিগার */
                <button
                  onClick={() => setIsProfileOpen(true)}
                  className="flex items-center gap-2 p-1 pr-3 border border-light-border dark:border-zinc-800 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-sm">
                    {user?.name ? user.name.charAt(0).toUpperCase() : <User className="w-4 h-4" />}
                  </div>
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 max-w-[100px] truncate">
                    {user?.name || "Account"}
                  </span>
                </button>
              ) : (
                <>
                  <button onClick={() => navigate("/customer/login")} className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer px-3 py-2">Login</button>
                  <button onClick={() => navigate("/register")} className="group flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-zinc-950 font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-sm cursor-pointer">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </>
              )}
            </div>

            {/* Hamburger & Mobile User Trigger */}
            <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => dispatch(toggleTheme())} className="p-2 text-zinc-500 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary rounded-xl transition-colors cursor-pointer">
                {themeMode === "dark" ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-zinc-600" />}
              </button>
              
              {isAuthenticated && (
                <button
                  onClick={() => setIsProfileOpen(true)}
                  className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-xs cursor-pointer"
                >
                  {user?.name ? user.name.charAt(0).toUpperCase() : <User className="w-4 h-4" />}
                </button>
              )}

              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary transition-colors cursor-pointer">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="lg:hidden bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border px-4 pt-2 pb-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto transition-colors duration-200">
            <div className="space-y-1.5 py-2">
              <Link to="/" onClick={() => setIsOpen(false)} className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}>Home</Link>
              <Link to="/templates" onClick={() => setIsOpen(false)} className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/templates") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}>Website Templates</Link>
              <Link to="/ai-features" onClick={() => setIsOpen(false)} className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/ai-features") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}>AI Chatbot</Link>
              <Link to="/pricing" onClick={() => setIsOpen(false)} className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/pricing") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}>Pricing</Link>
              <Link to="/blog" onClick={() => setIsOpen(false)} className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/blog") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}>Blog</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive("/contact") ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}>Contact</Link>
            </div>

            {!isAuthenticated && (
              <div className="pt-4 border-t border-light-border dark:border-dark-border space-y-3">
                <button onClick={() => { setIsOpen(false); navigate("/customer/login"); }} className="w-full text-center py-2.5 bg-light-bg dark:bg-secondary text-zinc-600 dark:text-zinc-200 font-medium rounded-lg transition-colors block cursor-pointer text-sm">Login</button>
                <button onClick={() => { setIsOpen(false); navigate("/register"); }} className="w-full text-center bg-primary hover:bg-primary-hover text-zinc-950 font-semibold py-2.5 rounded-lg transition-colors block cursor-pointer text-sm">Get Started</button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* ================= Right-Side Profile Drawer Panel ================= */}
      <div className={`fixed inset-0 z-[100] transition-visibility duration-300 ${isProfileOpen ? "visible" : "invisible"}`}>
        {/* Backdrop overlay */}
        <div 
          onClick={() => setIsProfileOpen(false)}
          className={`absolute inset-0 bg-zinc-950/40 backdrop-blur-sm transition-opacity duration-300 ${isProfileOpen ? "opacity-100" : "opacity-0"}`} 
        />
        
        {/* Drawer Body */}
        <div className={`absolute top-0 right-0 h-full w-full sm:w-80 bg-light-card dark:bg-zinc-950 border-l border-light-border dark:border-zinc-900 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 transform ${isProfileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="space-y-6">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-light-border dark:border-zinc-900 pb-4">
              <span className="text-sm font-black text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">User Account</span>
              <button 
                onClick={() => setIsProfileOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* User Profile Card */}
            <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-light-border dark:border-zinc-900/60">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-black text-base shadow-inner">
                {user?.name ? user.name.charAt(0).toUpperCase() : <User className="w-5 h-5" />}
              </div>
              <div className="space-y-0.5 min-w-0">
                <h4 className="text-sm font-black text-zinc-800 dark:text-zinc-50 truncate">{user?.name}</h4>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 truncate">{user?.email}</p>
              </div>
            </div>

            {/* Navigation Options */}
          <div className="space-y-1 pt-2">
  {/* 1. Dashboard */}
  <button
    onClick={() => { setIsProfileOpen(false); navigate("/dashboard"); }}
    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-primary transition-all cursor-pointer text-left"
  >
    <LayoutDashboard className="w-4 h-4 text-zinc-400" />
    <span>Dashboard</span>
  </button>

  {/* 2. View/Edit Profile */}
  <button
    onClick={() => { setIsProfileOpen(false); navigate("/dashboard/profile"); }}
    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-primary transition-all cursor-pointer text-left"
  >
    <UserCircle className="w-4 h-4 text-zinc-400" />
    <span>My Profile</span>
  </button>

  {/* 3. My Bots / AI Configurations (BotSaiful এর জন্য প্রাসঙ্গিক) */}
  <button
    onClick={() => { setIsProfileOpen(false); navigate("/dashboard/my-bots"); }}
    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-primary transition-all cursor-pointer text-left"
  >
    <Bot className="w-4 h-4 text-zinc-400" />
    <span>My Chatbots</span>
  </button>

  {/* 4. Orders / Billing (যদি এটি কোনো সার্ভিস বা প্রোডাক্ট ই-কমার্স হয়) */}
  <button
    onClick={() => { setIsProfileOpen(false); navigate("/dashboard/billing"); }}
    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-primary transition-all cursor-pointer text-left"
  >
    <CreditCard className="w-4 h-4 text-zinc-400" />
    <span>Billing & Subscriptions</span>
  </button>

  {/* 5. Wishlist / Saved Items (যদি টেমপ্লেট বা ব্লগ সেভ করার অপশন থাকে) */}
  <button
    onClick={() => { setIsProfileOpen(false); navigate("/dashboard/wishlist"); }}
    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-primary transition-all cursor-pointer text-left"
  >
    <Heart className="w-4 h-4 text-zinc-400" />
    <span>Saved Templates</span>
  </button>

  {/* 6. Account Settings */}
  <button
    onClick={() => { setIsProfileOpen(false); navigate("/settings"); }}
    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-primary transition-all cursor-pointer text-left"
  >
    <Settings className="w-4 h-4 text-zinc-400" />
    <span>Account Settings</span>
  </button>

  {/* 7. Help & Support */}
  <button
    onClick={() => { setIsProfileOpen(false); navigate("/support"); }}
    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-primary transition-all cursor-pointer text-left"
  >
    <HelpCircle className="w-4 h-4 text-zinc-400" />
    <span>Help & Support</span>
  </button>
</div>
          </div>

          {/* Logout Action Area */}
          <div className="border-t border-light-border dark:border-zinc-900 pt-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-red-500 hover:bg-red-500/5 transition-all cursor-pointer text-left"
            >
              <LogOut className="w-4 h-4" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}