import ContactSupport from "@/components/common/ContactSupport";
import Footer from "../components/common/Footer";
import PublicHeader from "../components/layout/PublicHeader";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    /* bg-light-bg (লাইট মোডে হালকা ব্যাকগ্রাউন্ড)
      dark:bg-dark-bg (ডার্ক মোডে আপনার কাস্টম ডার্ক ব্যাকগ্রাউন্ড)
      text-zinc-900 (লাইট মোডে ডার্ক টেক্সট)
      dark:text-zinc-100 (ডার্ক মোডে লাইট টেক্সট)
    */
    <div className="min-h-screen bg-light-bg text-zinc-900 dark:bg-dark-bg dark:text-zinc-100 flex flex-col transition-colors duration-200">
      <PublicHeader />

      <main className="flex-1">
        <Outlet />
      </main>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
        <ContactSupport />
      </div>
      <Footer />
    </div>
  );
}
