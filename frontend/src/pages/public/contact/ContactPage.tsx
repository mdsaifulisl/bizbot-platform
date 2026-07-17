import ContactHero from "@/components/public/contact/ContactHero"
import ContactInfo from "@/components/public/contact/ContactInfo"
import ContactForm from "@/components/public/contact/ContactForm"
import BusinessHours from "@/components/public/contact/BusinessHours"
import FAQPreview from "@/components/public/contact/FAQPreview"
import ContactCTA from "@/components/public/contact/ContactCTA"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300 text-left">
      <ContactHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <ContactForm />
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <ContactInfo />
          </div>
        </div>
      </div>

      <BusinessHours />
      <FAQPreview />
      <ContactCTA />
    </div>
  )
}