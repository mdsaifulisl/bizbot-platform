import AboutHero from "@/components/public/about/AboutHero"
import AboutStory from "@/components/public/about/AboutStory"
import MissionVision from "@/components/public/about/MissionVision"
import WhyChooseUs from "@/components/public/about/WhyChooseUs"
import OurServices from "@/components/public/about/OurServices"
import OurProcess from "@/components/public/about/OurProcess"
import Technologies from "@/components/public/about/Technologies"
import Stats from "@/components/public/about/Stats"
import Founder from "@/components/public/about/Founder"
import Testimonials from "@/components/public/about/Testimonials"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-zinc-900 dark:text-zinc-50 antialiased selection:bg-emerald-500/20">
      <AboutHero />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        <AboutStory />
        <MissionVision />
        <WhyChooseUs />
        <OurServices />
        <OurProcess />
        <Technologies />
        <Stats />
        <Founder />
        <Testimonials />
        
      </div>
    </div>
  )
}