import { Check, Minus, HelpCircle } from "lucide-react"

export default function CompareFeatures() {
  const comparisonData = {
    chatbot: {
      title: "AI Chatbot Feature Comparison",
      headers: ["Features", "Starter", "Professional", "Enterprise"],
      rows: [
        {
          feature: "Monthly Message Limit",
          values: ["1,000 /mo", "10,000 /mo", "Unlimited"],
          tooltip: "প্রতি মাসে কতটি স্বয়ংক্রিয় মেসেজ এআই হ্যান্ডেল করবে।"
        },
        {
          feature: "Integrations",
          values: ["Web or Facebook", "WhatsApp + FB + Web", "All Omnichannels"],
          tooltip: "কোন কোন প্ল্যাটফর্মে চ্যাটবটটি যুক্ত করা যাবে।"
        },
        {
          feature: "Knowledge Training",
          values: ["Web Scraping", "PDF, Docs & Web", "Custom Databases"],
          tooltip: "যে তথ্যের ওপর ভিত্তি করে এআই কাস্টমারদের উত্তর দেবে।"
        },
        {
          feature: "Lead Capture",
          values: [false, true, true],
          tooltip: "কাস্টমারের নাম, ইমেল বা ফোন নম্বর স্বয়ংক্রিয়ভাবে সংরক্ষণ করা।"
        },
        {
          feature: "Google Sheets Sync",
          values: [false, true, true],
          tooltip: "সংগৃহীত লিড রিয়েল-টাইমে গুগল শিটে সেভ হওয়া।"
        },
        {
          feature: "Dedicated DB Sync",
          values: [false, false, true],
          tooltip: "আপনার নিজস্ব MongoDB বা SQL ডাটাবেজের সাথে এআই যুক্ত করা।"
        },
        {
          feature: "Priority Support",
          values: ["Community", "24/7 Priority", "Dedicated SLA Support"]
        }
      ]
    },
    website: {
      title: "Website Package Feature Comparison",
      headers: ["Features", "Basic", "Business", "Premium"],
      rows: [
        {
          feature: "Pages Limit",
          values: ["1 Page (Landing)", "Up-to 10 Pages", "Unlimited Custom Pages"],
          tooltip: "ওয়েবসাইটে টোটাল কয়টি পেজ ডিজাইন করা থাকবে।"
        },
        {
          feature: "Domain & Hosting",
          values: ["Lite Hosting", "High-Speed SSD", "Dedicated Cloud VPS"],
          tooltip: "১ বছরের জন্য ডোমেইন এবং হোস্টিং প্যাকেজের কোয়ালিটি।"
        },
        {
          feature: "COD Logistics Set",
          values: [false, "Dhaka (৳60) / Outside (৳120)", "Custom Automation"],
          tooltip: "ক্যাশ অন ডেলিভারি (COD) ফ্লো এবং রিজিওনাল ডেলিভারি ফি সেটআপ।"
        },
        {
          feature: "Payment Gateway",
          values: [false, "Bkash/Nagad/Cards", "Custom & International"],
          tooltip: "অনলাইনে পেমেন্ট রিসিভ করার গেটওয়ে ইন্টিগ্রেশন।"
        },
        {
          feature: "SEO Setup",
          values: ["Basic", "Advanced + Search Console", "Custom Enterprise SEO"]
        },
        {
          feature: "Free Support",
          values: ["1 Month", "3 Months", "1 Year Dedicated"],
          tooltip: "ডেলিভারির পর ফ্রি টেকনিক্যাল সাপোর্ট এবং বাগ ফিক্সিং সময়সীমা।"
        }
      ]
    }
  }

  const renderValue = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <span className="inline-flex p-1 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 rounded-lg">
          <Check className="w-4 h-4" />
        </span>
      ) : (
        <span className="inline-flex p-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-300 dark:text-zinc-600 rounded-lg">
          <Minus className="w-4 h-4" />
        </span>
      )
    }
    return <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">{val}</span>
  }

  return (
    <section className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Compare <span className="text-emerald-500 dark:text-emerald-400">Features</span> Side-by-Side
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
            আপনার সঠিক সিদ্ধান্ত গ্রহণের সুবিধার্থে আমাদের প্রতিটি সেবার বিস্তারিত ফিচারের তুলনা নিচে তুলে ধরা হলো।
          </p>
        </div>

        {/* এআই চ্যাটবট কম্প্যারিসন টেবিল */}
        <div className="mb-20 space-y-6">
          <h3 className="text-lg sm:text-xl font-black text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            {comparisonData.chatbot.title}
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-light-border dark:border-zinc-800/80 shadow-sm bg-light-card dark:bg-zinc-900/40">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-light-border dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/80">
                  {comparisonData.chatbot.headers.map((header, idx) => (
                    <th key={idx} className="p-4 sm:p-5 text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-light-border dark:divide-zinc-800/40">
                {comparisonData.chatbot.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20 transition-colors duration-150">
                    <td className="p-4 sm:p-5 flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {row.feature}
                      {row.tooltip && (
                        <span className="group relative cursor-help text-zinc-400 dark:text-zinc-500 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors">
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 hidden group-hover:block p-2 bg-zinc-950 text-zinc-200 text-[10px] leading-relaxed rounded-lg shadow-lg border border-zinc-800 z-30">
                            {row.tooltip}
                          </span>
                        </span>
                      )}
                    </td>
                    {row.values.map((val, vIdx) => (
                      <td key={vIdx} className="p-4 sm:p-5">
                        {renderValue(val)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ওয়েবসাইট প্যাকেজ কম্প্যারিসন টেবিল */}
        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-black text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            {comparisonData.website.title}
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-light-border dark:border-zinc-800/80 shadow-sm bg-light-card dark:bg-zinc-900/40">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-light-border dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/80">
                  {comparisonData.website.headers.map((header, idx) => (
                    <th key={idx} className="p-4 sm:p-5 text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-light-border dark:divide-zinc-800/40">
                {comparisonData.website.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20 transition-colors duration-150">
                    <td className="p-4 sm:p-5 flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {row.feature}
                      {row.tooltip && (
                        <span className="group relative cursor-help text-zinc-400 dark:text-zinc-500 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors">
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 hidden group-hover:block p-2 bg-zinc-950 text-zinc-200 text-[10px] leading-relaxed rounded-lg shadow-lg border border-zinc-800 z-30">
                            {row.tooltip}
                          </span>
                        </span>
                      )}
                    </td>
                    {row.values.map((val, vIdx) => (
                      <td key={vIdx} className="p-4 sm:p-5">
                        {renderValue(val)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}