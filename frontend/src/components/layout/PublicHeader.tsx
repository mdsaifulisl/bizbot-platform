import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "../../app/store"
import { toggleTheme } from "../../features/theme/themeSlice"
import { Menu, X, ArrowRight, Sun, Moon} from "lucide-react"

// নতুন সাব-কম্পোনেন্ট ইম্পোর্ট
import ProfileDrawer from "./ProfileDrawer"
import ScrollToTop from "./ScrollToTop"
import LiveMessageDrawer from "./LiveMessageDrawer"

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 

export default function PublicHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  
  const themeMode = useAppSelector((state) => state.theme.mode)
  const user = useAppSelector((state: any) => state.auth?.user || { 
    name: "Saiful Islam", 
    email: "saiful01741899@gmail.com",
    image: "" 
  }) 
  const isAuthenticated = useAppSelector((state: any) => state.auth?.isAuthenticated ?? true) 

  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const getShortName = (fullName: string) => {
    if (!fullName) return "Account";
    const ignoreTitles = ["md", "md.", "ms", "ms.", "dr", "dr.", "mrs", "mrs."];
    const words = fullName.trim().split(/\s+/);
    
    if (words.length >= 3) return words[1];
    if (words.length === 2) {
      if (ignoreTitles.includes(words[0].toLowerCase())) return words[1];
      return words[0].length >= words[1].length ? words[0] : words[1];
    }
    return words[0];
  }

  return (
    <>
      <nav className="bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border sticky top-0 z-50 backdrop-blur-md bg-opacity-95 dark:bg-opacity-95 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
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

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {["/", "/templates", "/ai-features", "/pricing", "/blog", "/contact"].map((path) => (
                <Link 
                  key={path}
                  to={path} 
                  className={`text-sm font-medium transition-colors relative py-1 duration-200 ${isActive(path) ? "text-primary font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"}`}
                >
                  {path === "/" ? "Home" : path.replace("/", "").replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              ))}
            </div>

            {/* Controls & Profile */}
            <div className="hidden lg:flex items-center gap-4">
              <button onClick={() => dispatch(toggleTheme())} className="p-2 text-zinc-500 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary rounded-xl transition-colors cursor-pointer">
                {themeMode === "dark" ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-zinc-600" />}
              </button>

              {isAuthenticated ? (
                <button onClick={() => setIsProfileOpen(true)} className="flex items-center gap-2 p-1 pr-3 border border-light-border dark:border-zinc-800 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-pointer group">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-sm">
                    {user?.image ? <img src={user.image} alt={user.name} className="w-full h-full object-cover" /> : getShortName(user.name).charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 max-w-[100px] truncate">{getShortName(user?.name)}</span>
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

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => dispatch(toggleTheme())} className="p-2 text-zinc-500 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary rounded-xl transition-colors cursor-pointer">
                {themeMode === "dark" ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-zinc-600" />}
              </button>
              
              {isAuthenticated && (
                <button onClick={() => setIsProfileOpen(true)} className="w-8 h-8 rounded-full overflow-hidden bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-xs cursor-pointer">
                  {user?.image ? <img src={user.image} alt={user.name} className="w-full h-full object-cover" /> : getShortName(user.name).charAt(0).toUpperCase()}
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
          <div className="lg:hidden bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border px-4 pt-2 pb-6 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto transition-colors duration-200">
            <div className="space-y-1.5 py-2">
              {["/", "/templates", "/ai-features", "/pricing", "/blog", "/contact"].map((path) => (
                <Link 
                  key={path}
                  to={path} 
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive(path) ? "text-primary bg-primary/5 font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:bg-light-bg dark:hover:bg-secondary/20"}`}
                >
                  {path === "/" ? "Home" : path.replace("/", "").replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              ))}
            </div>

            {!isAuthenticated && (
              <div className="pt-4 border-t border-light-border dark:border-dark-border space-y-3">
                <button onClick={() => { setIsOpen(false); navigate("/customer/login"); }} className="w-full text-center py-2.5 bg-light-bg dark:bg-secondary text-zinc-600 dark:text-zinc-200 font-medium rounded-lg block text-sm">Login</button>
                <button onClick={() => { setIsOpen(false); navigate("/register"); }} className="w-full text-center bg-primary hover:bg-primary-hover text-zinc-950 font-semibold py-2.5 rounded-lg block text-sm">Get Started</button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* সাব-কম্পোনেন্ট প্যানেল ও বাটনসমূহ */}
      <ProfileDrawer 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
        user={user} 
        getShortName={getShortName} 
      />

      <ScrollToTop />

      <LiveMessageDrawer 
      isAuthenticated={isAuthenticated} 
      user={user} 
    />
    </>
  )
}