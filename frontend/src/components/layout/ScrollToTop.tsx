import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-2.5 sm:p-3 bg-primary text-zinc-950 font-bold rounded-xl shadow-lg border border-primary/20 hover:bg-primary-hover hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer ${
        showScrollTop ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
    </button>
  )
}