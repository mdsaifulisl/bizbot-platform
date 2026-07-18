import { X, LayoutDashboard, UserCircle, Bot, CreditCard, Heart, Settings, HelpCircle, LogOut, User } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface ProfileDrawerProps {
  isOpen: boolean
  onClose: () => void
  user: { name: string; email: string; image?: string }
  getShortName: (name: string) => string
}

export default function ProfileDrawer({ isOpen, onClose, user, getShortName }: ProfileDrawerProps) {
  const navigate = useNavigate()

  const handleLogout = () => {
    onClose()
    navigate("/")
  }

  return (
    <div className={`fixed inset-0 z-[100] transition-visibility duration-300 ${isOpen ? "visible" : "invisible"}`}>
      <div 
        onClick={onClose}
        className={`absolute inset-0 bg-zinc-950/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} 
      />
      
      <div className={`absolute top-0 right-0 h-full w-full sm:w-80 bg-light-card dark:bg-zinc-950 border-l border-light-border dark:border-zinc-900 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-light-border dark:border-zinc-900 pb-4">
            <span className="text-sm font-black text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">User Account</span>
            <button onClick={onClose} className="p-1.5 rounded-lg text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-light-border dark:border-zinc-900/60">
            <div className="w-11 h-11 rounded-xl overflow-hidden bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-black text-base shadow-inner">
              {user?.image ? (
                <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
              ) : user?.name ? (
                getShortName(user.name).charAt(0).toUpperCase()
              ) : (
                <User className="w-5 h-5" />
              )}
            </div>
            <div className="space-y-0.5 min-w-0">
              <h4 className="text-sm font-black text-zinc-800 dark:text-zinc-50 truncate">{user?.name}</h4>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 truncate">{user?.email}</p>
            </div>
          </div>

          <div className="space-y-1 pt-2">
            {[
              { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
              { label: "My Profile", path: "/dashboard/profile", icon: UserCircle },
              { label: "My Chatbots", path: "/dashboard/my-bots", icon: Bot },
              { label: "Billing & Subscriptions", path: "/dashboard/billing", icon: CreditCard },
              { label: "Saved Templates", path: "/dashboard/wishlist", icon: Heart },
              { label: "Account Settings", path: "/settings", icon: Settings },
              { label: "Help & Support", path: "/support", icon: HelpCircle },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => { onClose(); navigate(item.path); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-primary transition-all cursor-pointer text-left"
              >
                <item.icon className="w-4 h-4 text-zinc-400" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-light-border dark:border-zinc-900 pt-4">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-red-500 hover:bg-red-500/5 transition-all cursor-pointer text-left">
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  )
}