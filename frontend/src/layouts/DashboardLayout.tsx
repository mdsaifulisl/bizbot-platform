import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-zinc-950 text-zinc-50">
      {/* Sidebar Space */}
      <aside className="w-64 border-r border-zinc-800 bg-zinc-900 p-4 hidden md:block">
        <h2 className="font-bold text-lg tracking-wider mb-6 text-emerald-400">EXPERT-CODER AI</h2>
        <nav className="space-y-2">
          <div className="p-2 hover:bg-zinc-850 rounded cursor-pointer">Dashboard</div>
          <div className="p-2 hover:bg-zinc-850 rounded cursor-pointer">Websites</div>
          <div className="p-2 hover:bg-zinc-850 rounded cursor-pointer">AI Chatbot</div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-zinc-800 flex items-center px-6 bg-zinc-900">
          <span className="font-medium">Welcome Back, Mahidul</span>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}