import ChatbotFeatures from "@/components/public/home/ChatbotFeatures";
import CTASection from "@/components/common/CTASection";
import FAQSection from "@/components/common/FAQSection";
import HeroSection from "@/components/public/home/HeroSection";
import HowItWorks from "@/components/public/home/HowItWorks";
import PortfolioSection from "@/components/public/home/PortfolioSection";
import PricingSection from "@/components/public/home/PricingSection";
import ServicesSection from "@/components/public/home/ServicesSection";
import TemplatesSection from "@/components/public/home/TemplatesSection";


export default function Home() {
  return (
    <div className="p-8 pt-0">
        <HeroSection /> 
        <ServicesSection />
        <TemplatesSection />
        <ChatbotFeatures />
        <HowItWorks />
        <PortfolioSection />
        <PricingSection /> 
        <FAQSection />
        <CTASection />
    </div>
  );
}
  

