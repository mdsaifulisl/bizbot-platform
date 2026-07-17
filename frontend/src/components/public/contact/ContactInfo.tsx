import { Mail, Phone, MapPin, Clock } from "lucide-react"
import SocialLinks from "./SocialLinks"

export default function ContactInfo() {
  const infoItems = [
    { icon: Mail, label: "Email", value: "support@botsaiful.com", href: "mailto:support@botsaiful.com" },
    { icon: Phone, label: "WhatsApp", value: "+880 1XXXXXXXXX", href: "https://wa.me/8801XXXXXXXXX" },
    { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: null },
    { icon: Clock, label: "Response Time", value: "Within 24 Hours", href: null },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-3xl p-6 sm:p-8 space-y-6">
        <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
          Contact Information
        </h3>
        <div className="space-y-4">
          {infoItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-light-bg dark:bg-zinc-900/50 border border-light-border/60 dark:border-zinc-800/40">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-xl shrink-0">
                <item.icon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">{item.label}</span>
                {item.href ? (
                  <a href={item.href} className="text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:text-emerald-500 transition-colors mt-0.5 block">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SocialLinks />
    </div>
  )
}