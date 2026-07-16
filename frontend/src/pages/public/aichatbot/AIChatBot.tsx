
import AIChatbotHero from "@/components/public/aichatbot/AIChatbotHero";
import Features from "@/components/public/aichatbot/Features";
import SupportedPlatforms from "@/components/public/aichatbot/SupportedPlatforms";
import HowItWorks from "@/components/public/aichatbot/HowItWorks";
import DashboardPreview from "@/components/public/aichatbot/DashboardPreview";
import ConversationDemo from "@/components/public/aichatbot/ConversationDemo";
import BotPricing from "@/components/common/BotPricing";


export default function AIChatBot() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <AIChatbotHero />
      <BotPricing />
      <SupportedPlatforms />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <ConversationDemo />
      
    </div>
  );
}