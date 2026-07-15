import { Outlet } from "react-router-dom"
import PublicHeader from "../components/layout/PublicHeader"

export default function AuthLayout() {
  return (
    // flex-col ব্যবহার করে হেডার এবং মেইন কন্টেন্টকে উপর-নিচে সেট করা হয়েছে
    <div className="min-h-screen flex flex-col bg-light-bg text-zinc-900 dark:bg-dark-bg dark:text-zinc-50 transition-colors duration-200">
      
      {/* হেডার থাকবে একদম উপরে */}
      <PublicHeader />
      
      {/* এই অংশটি বাকি স্ক্রিনের মাঝখানে ফর্ম কার্ডটিকে এলাইন করবে */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md p-6 bg-light-card border border-light-border rounded-xl shadow-2xl dark:bg-dark-card dark:border-dark-border transition-colors duration-200">
          <Outlet />
        </div>
      </main>

    </div>
  )
}