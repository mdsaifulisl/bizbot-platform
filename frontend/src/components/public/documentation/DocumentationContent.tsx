import { useState } from "react"
import { 
  ChevronRight, 
  FileText, 
  ShoppingBag, 
  User, 
  ShieldCheck, 
  HelpCircle,
  Menu,
  X,
  CreditCard,
  RefreshCw
} from "lucide-react"

// ==========================================
// Types & Interfaces
// ==========================================
interface SidebarItem {
  title: string
  slug: string
  icon?: React.ComponentType<{ className?: string }>
}

interface SidebarSection {
  sectionTitle: string
  items: SidebarItem[]
}

interface ArticleContent {
  title: string
  category: string
  description: string
  steps: {
    id: string
    num: number
    title: string
    desc: string
    highlightCard?: {
      title: string
      details: string[]
    }
  }[]
  outline: { id: string; label: string }[]
}

export default function DocumentationContent() {
  const [activeArticle, setActiveArticle] = useState("how-to-buy")
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  // ১. সম্পূর্ণ ও পেশাদার ডিজিটাল প্ল্যাটফর্মের জন্য বর্ধিত সাইডবার নেভিগেশন ডাটা
  const sidebarData: SidebarSection[] = [
    {
      sectionTitle: "পারচেজ ও পেমেন্ট গাইড",
      items: [
        { title: "কীভাবে কিনবেন? (ধাপে ধাপে)", slug: "how-to-buy", icon: ShoppingBag },
        { title: "SSLCommerz পেমেন্ট গাইড", slug: "sslcommerz-info", icon: CreditCard },
      ],
    },
    {
      sectionTitle: "অ্যাকাউন্ট ও নিরাপত্তা",
      items: [
        { title: "অ্যাকাউন্ট তৈরি ও ড্যাশবোর্ড", slug: "account-management", icon: User },
        { title: "পাসওয়ার্ড ও অ্যাকাউন্ট সুরক্ষা", slug: "account-security", icon: ShieldCheck },
      ],
    },
    {
      sectionTitle: "অ্যাক্সেস ও লাইসেন্সিং",
      items: [
        { title: "ড্যাশবোর্ড অ্যাক্সেস পলিসি", slug: "instant-access", icon: RefreshCw },
        { title: "লাইসেন্স ও ব্যবহার বিধি", slug: "usage-license", icon: FileText },
      ],
    },
    {
      sectionTitle: "সমস্যা সমাধান ও সাপোর্ট",
      items: [
        { title: "সাধারণ টেকনিক্যাল ট্রাবলশুট", slug: "technical-troubleshoot", icon: HelpCircle },
        { title: "রিফান্ড পলিসি ও সাপোর্ট", slug: "faqs", icon: HelpCircle },
      ],
    },
  ]

  // ২. বর্ধিত সাইডবারের সাথে মিল রেখে সম্পূর্ণ ও বিস্তারিত কন্টেন্ট ডেটাবেজ (ডাউনলোড রেফারেন্স মুক্ত)
  const articlesData: Record<string, ArticleContent> = {
    "how-to-buy": {
      title: "কীভাবে কিনবেন? (ধাপে ধাপে গাইড)",
      category: "পারচেজ ও পেমেন্ট গাইড",
      description: "আমাদের প্ল্যাটফর্ম থেকে আপনার পছন্দের ডিজিটাল প্রোডাক্ট, মেম্বারশিপ বা সার্ভিসটি কেনা অত্যন্ত সহজ। কোনো ম্যানুয়াল ভেরিফিকেশনের ঝামেলা ছাড়াই কীভাবে সম্পূর্ণ স্বয়ংক্রিয়ভাবে পারচেজ সম্পন্ন করবেন, তা নিচে বিস্তারিত বর্ণনা করা হলো।",
      steps: [
        {
          id: "select-product",
          num: 1,
          title: "পছন্দের আইটেমটি নির্বাচন করুন",
          desc: "প্রথমে আমাদের হোমপেজ, শপ বা ক্যাটালগ পেজ থেকে আপনার কাঙ্ক্ষিত ডিজিটাল প্রোডাক্ট বা সার্ভিসটি খুঁজে বের করুন। পণ্যের ওপরে ক্লিক করে তার বিস্তারিত বিবরণ, লাইভ ডেমো (যদি থাকে), ফিচার লিস্ট এবং রিকোয়ারমেন্টগুলো ভালোভাবে পড়ে নিন।",
        },
        {
          id: "checkout-process",
          num: 2,
          title: "কার্ট ম্যানেজমেন্ট এবং চেকআউট",
          desc: "যদি একটি আইটেম কিনতে চান তবে সরাসরি 'Buy Now' বাটনে ক্লিক করুন, অথবা একাধিক আইটেম একসাথে কেনার জন্য 'Add to Cart' ব্যবহার করুন। এরপর চেকআউট পেজে গিয়ে আপনার সঠিক নাম এবং সচল ইমেইল অ্যাড্রেসটি প্রদান করুন (কারণ এই ইমেইলেই আপনার ড্যাশবোর্ড লগইন ও এক্সেস ডিটেইলস পাঠানো হবে)।",
        },
        {
          id: "complete-payment",
          num: 3,
          title: "পেমেন্ট সম্পন্নকরণ ও ড্যাশবোর্ড অ্যাক্সেস",
          desc: "সব তথ্য ঠিক থাকলে 'Proceed to Payment' বাটনে ক্লিক করুন। এটি আপনাকে সরাসরি আমাদের নিরাপদ পেমেন্ট পার্টনার SSLCommerz-এর অফিশিয়াল গেটওয়েতে নিয়ে যাবে। পেমেন্ট সফল হওয়ার সাথে সাথে আমাদের সিস্টেম আপনাকে স্বয়ংক্রিয়ভাবে আপনার পার্সোনাল ড্যাশবোর্ডে রিডাইরেক্ট করবে যেখানে আপনার কেনা সার্ভিসটি ইনস্ট্যান্ট সচল পাবেন।",
        }
      ],
      outline: [
        { id: "select-product", label: "১. আইটেম নির্বাচন" },
        { id: "checkout-process", label: "২. চেকআউট প্রসেস" },
        { id: "complete-payment", label: "৩. পেমেন্ট ও রিডাইরেকশন" }
      ]
    },
    "sslcommerz-info": {
      title: "SSLCommerz পেমেন্ট গেটওয়ে গাইড",
      category: "পারচেজ ও পেমেন্ট গাইড",
      description: "বাংলাদেশের সবচেয়ে বিশ্বস্ত এবং নিরাপদ পেমেন্ট গেটওয়ে SSLCommerz-এর মাধ্যমে আপনি সম্পূর্ণ দুশ্চিন্তামুক্তভাবে পেমেন্ট করতে পারবেন। আমাদের পেমেন্ট সিস্টেমে যেসব মাধ্যম সাপোর্ট করে তা নিচে দেওয়া হলো:",
      steps: [
        {
          id: "supported-methods",
          num: 1,
          title: "সমর্থিত ডিজিটাল পেমেন্ট মাধ্যমসমূহ",
          desc: "SSLCommerz গেটওয়ের মাধ্যমে আপনি বাংলাদেশের যেকোনো বৈধ অনলাইন পেমেন্ট মেথড ব্যবহার করে তাৎক্ষণিক বিল পরিশোধ করতে পারবেন। পেমেন্ট করার জন্য আলাদা কোনো এক্সট্রা ফি বা হিডেন চার্জ দিতে হবে না।",
          highlightCard: {
            title: "SSLCommerz পেমেন্ট মেথডস",
            details: [
              "মো바일 ব্যাংকিং (MFS): বিকাশ, নগদ, رওকেট, ইউপে, সেলফিন ইত্যাদি।",
              "কার্ড পেমেন্ট: যেকোনো ব্যাংকের Visa, Mastercard, American Express (Amex)।",
              "ইন্টারনেট ব্যাংকিং: সিটি টাচ, ইসলামি ব্যাংক, ব্র্যাক ব্যাংক ইত্যাদি নেট ব্যাংকিং।"
            ]
          }
        },
        {
          id: "payment-security",
          num: 2,
          title: "পেমেন্ট নিরাপত্তা ও এনক্রিপশন",
          desc: "আপনার کارتের তথ্য বা পিন নম্বর আমাদের ওয়েবসাইটে কখনোই সেভ বা স্টোর করা হয় না। SSLCommerz সম্পূর্ণ PCI-DSS কমপ্লায়েন্ট এবং ১২৮-বিট এসএসএল (SSL) এনক্রিপশন দ্বারা সুরক্ষিত, যা আপনার প্রতিটি ট্রানজেকশনের শতভাগ নিরাপত্তা নিশ্চিত করে।",
        }
      ],
      outline: [
        { id: "supported-methods", label: "১. পেমেন্ট চ্যানেলসমূহ" },
        { id: "payment-security", label: "২. সিকিউরিটি ও প্রাইভেসী" }
      ]
    },
    "account-management": {
      title: "অ্যাকাউন্ট তৈরি এবং কাস্টমার ড্যাশবোর্ড",
      category: "অ্যাকাউন্ট ও নিরাপত্তা",
      description: "আপনার কেনা সমস্ত ডিজিটাল এসেট, একটিভ লাইসেন্স এবং ইনভয়েসগুলো এক জায়গায় সুরক্ষিত রাখতে একটি ভেরিভাইড অ্যাকাউন্ট থাকা প্রয়োজন।",
      steps: [
        {
          id: "registration",
          num: 1,
          title: "সহজ রেজিস্ট্রেশন প্রক্রিয়া",
          desc: "আমাদের ওয়েবসাইটে অ্যাকাউন্ট তৈরি করা একদম সহজ। মেনুবার থেকে 'Register' অপশনে গিয়ে আপনার নাম, ইমেইল এবং একটি শক্তিশালী পাসওয়ার্ড দিয়ে অ্যাকাউন্ট তৈরি করে নিতে পারেন। এছাড়াও আপনি চাইলে পারচেজ করার সময় চেকআউট পেজেও স্বয়ংক্রিয়ভাবে অ্যাকাউন্ট তৈরি করার সুবিধা পাবেন।",
        },
        {
          id: "dashboard-access",
          num: 2,
          title: "কাস্টমার ড্যাশবোর্ড ও পারচেজ হিস্ট্রি",
          desc: "লগইন করার পর আপনার ব্যক্তিগত ড্যাশবোর্ডে প্রবেশ করুন। এখান থেকে আপনি আপনার কেনা সমস্ত প্রোডাক্টের লাইফটাইম অ্যাক্সেস ও লাইভ ড্যাশবোর্ড ভিউ পাবেন, যেকোনো সময় অফিসিয়াল ইনভয়েস (Receipt) দেখতে পারবেন এবং আপনার প্রোফাইলের সেটিংস পরিবর্তন করতে পারবেন।",
        }
      ],
      outline: [
        { id: "registration", label: "১. অ্যাকাউন্ট রেজিস্ট্রেশন" },
        { id: "dashboard-access", label: "২. ড্যাশবোর্ড পরিচিতি" }
      ]
    },
    "account-security": {
      title: "পাসওয়ার্ড রিকভারি ও অ্যাকাউন্ট সুরক্ষা গাইড",
      category: "অ্যাকাউন্ট ও নিরাপত্তা",
      description: "আপনার ডিজিটাল কেনাকাটা এবং পেমেন্ট ডাটার সর্বোচ্চ নিরাপত্তা নিশ্চিত করতে আমাদের অ্যাকাউন্ট সুরক্ষার নির্দেশিকা মেনে চলুন।",
      steps: [
        {
          id: "forgot-password",
          num: 1,
          title: "পাসওয়ার্ড ভুলে গেলে করণীয় (Reset Password)",
          desc: "যদি আপনি আপনার অ্যাকাউন্টের পাসওয়ার্ড ভুলে যান, তবে লগইন পেজে গিয়ে 'Forgot Password' লিংকে ক্লিক করুন। আপনার রেজিস্টার্ড ইমেইলটি সাবমিট করলে একটি পাসওয়ার্ড রিসেট লিংক পাঠানো হবে। সেই লিংকে প্রবেশ করে আপনি নতুন পাসওয়ার্ড সেট করে নিতে পারবেন।",
        },
        {
          id: "security-tips",
          num: 2,
          title: "অ্যাকাউন্ট সুরক্ষিত রাখার টিপস",
          desc: "আপনার অ্যাকাউন্টের পাসওয়ার্ড কখনো অন্য কারও সাথে শেয়ার করবেন না। একই পাসওয়ার্ড একাধিক সাইটে ব্যবহার করা থেকে বিরত থাকুন। আপনার ড্যাশবোর্ডে কোনো সন্দেহজনক লগইন বা অ্যাক্টিভিটি লক্ষ্য করলে তাৎক্ষণিকভাবে আমাদের সাপোর্ট টিমকে অবহিত করুন।",
        }
      ],
      outline: [
        { id: "forgot-password", label: "১. পাসওয়ার্ড রিসেট প্রক্রিয়া" },
        { id: "security-tips", label: "২. সুরক্ষা নির্দেশিকা" }
      ]
    },
    "instant-access": {
      title: "ইনস্ট্যান্ট ড্যাশবোর্ড অ্যাক্সেস পলিসি",
      category: "অ্যাক্সেস ও লাইসেন্সিং",
      description: "যেহেতু আমাদের এখানে কোনো ফিজিক্যাল কুরিয়ারের বা ফাইল ডাউনলোডের ঝামেলা নেই, তাই পেমেন্ট কনফর্ম হওয়ার সাথে সাথেই আপনার প্রোডাক্ট আপনার ড্যাশবোর্ডে স্বয়ঙ্ক্রিয়ভাবে সেটআপ হয়ে যায়।",
      steps: [
        {
          id: "how-to-download",
          num: 1,
          title: "কীভাবে আপনার সার্ভিস বা ড্যাশবোর্ড অ্যাক্সেস করবেন?",
          desc: "SSLCommerz-এ পেমেন্ট সফল হওয়ার সাথে সাথে গেটওয়ে পেজটি ক্লোজ হয়ে আমাদের সাইটের 'Success Page'-এ চলে আসবে। সেখানে আপনি তাৎক্ষণিক আপনার প্রোডাক্টের অ্যাক্সেস বাটন পেয়ে যাবেন। আপনার প্রোফাইলের 'My Web Services / Dashboard' সেকশনে এটি স্থায়ীভাবে সচল হয়ে যাবে।",
        },
        {
          id: "email-confirmation",
          num: 2,
          title: "ইমেইল ইনভয়েস ও সাপোর্ট কল অ্যাসিস্ট্যান্স",
          desc: "অর্ডারটি সফল হওয়ার ১ মিনিটের মধ্যে আপনার রেজিস্টার্ড ইমেইলে একটি অফিশিয়াল কনফার্মেশন মেইল পাঠানো হবে। যেখানে আপনার পেমেন্টের ডিজিটাল রিসিট থাকবে। যেকোনো জটিলতায় বা ড্যাশবোর্ড বুঝতে সমস্যা হলে আমাদের টিম থেকে সরাসরি আপনাকে কল দিয়ে সম্পূর্ণ গাইড করা হবে।",
        }
      ],
      outline: [
        { id: "how-to-download", label: "১. ড্যাশবোর্ড অ্যাক্সেস" },
        { id: "email-confirmation", label: "২. ইমেইল ও কল সাপোর্ট" }
      ]
    },
    "usage-license": {
      title: "ডিজিটাল প্রোডাক্টের লাইসেন্স ও ব্যবহার বিধি",
      category: "অ্যাক্সেস ও লাইসেন্সিং",
      description: "আমাদের সাইট থেকে কেনা প্রতিটি ডিজিটাল এসেট বা ড্যাশবোর্ড সার্ভিসের একটি নির্দিষ্ট ব্যবহার নীতি রয়েছে, যা প্রতিটি গ্রাহককে মেনে চলতে হবে।",
      steps: [
        {
          id: "license-types",
          num: 1,
          title: "লাইসেন্সের ধরণ ও সুযোগ-সুবিধা",
          desc: "সাধারণত আমাদের এখানে প্রতিটি পারচেজের সাথে 'Single Use License' দেওয়া হয়। এর মানে হলো আপনি এই সার্ভিস বা প্রোডাক্টটি আপনার নিজের একটি মাত্র প্রজেক্টে বা ব্র্যান্ডের জন্য ব্যবহার করতে পারবেন। এটি কোনোভাবেই রিসেল বা বাণিজ্যিক উদ্দেশ্যে পুনঃবিক্রয় করা যাবে না।",
        },
        {
          id: "copyright-rules",
          num: 2,
          title: "কপিরাইট ও বিধিনিষেধসমূহ",
          desc: "আমাদের প্ল্যাটফর্মের যেকোনো কোড, আর্কিটেকচার বা এক্সেস মেকানিজম কোনো পাবলিক ফোরাম বা অন্য কোথাও শেয়ার করা সম্পূর্ণ আইনত দণ্ডনীয় অপরাধ। এই নিয়ম অমান্য করলে কোনো নোটিশ ছাড়াই আপনার অ্যাকাউন্ট আজীবনের জন্য ব্যান করা হতে পারে।",
        }
      ],
      outline: [
        { id: "license-types", label: "১. লাইসেন্স পরিচিতি" },
        { id: "copyright-rules", label: "২. কপিরাইট বিধিনিষেধ" }
      ]
    },
    "technical-troubleshoot": {
      title: "সাধারণ টেকনিক্যাল ট্রাবলশুটিং (Error Fix)",
      category: "সমস্যা সমাধান ও সাপোর্ট",
      description: "ড্যাশবোর্ড রান করার সময় কিংবা সার্ভিস ব্যবহার করার সময় কোনো সাধারণ সমস্যার মুখোমুখি হলে এই গাইডটি আপনাকে দ্রুত সমাধান পেতে সাহায্য করবে।",
      steps: [
        {
          id: "download-errors",
          num: 1,
          title: "ড্যাশবোর্ড লোড না হলে বা এরর দেখালে করণীয়",
          desc: "পেমেন্ট সফল হওয়ার পরও যদি আপনার সার্ভিস ড্যাশবোর্ডটি ওপেন না হয়, তবে আপনার ব্রাউজারের ক্যাশ (Cache) এবং কুকিজ ক্লিয়ার করে পুনরায় চেষ্টা করুন। অথবা ব্রাউজারের Incognito (প্রাইভেট) মোডে লগইন করে চেক করুন। অনেক সময় স্লো ইন্টারনেট কানেকশনের জন্য ড্যাশবোর্ড রেন্ডার হতে দেরি হতে পারে।",
        },
        {
          id: "out-of-reach",
          num: 2,
          title: "জরুরি প্রয়োজনে আমাদের পক্ষ থেকে কল সাপোর্ট",
          desc: "যদি সমস্যার কোনো সমাধান না হয়, তবে প্যানেলে থাকা 'Request a Call' বাটনে ক্লিক করতে পারেন অথবা ৫-১০ মিনিট অপেক্ষা করুন; আমাদের টেকনিক্যাল টিম আপনার প্রোফাইলে থাকা নম্বরে সরাসরি কল দিয়ে এনিডেস্ক বা রিমোটলি আপনার সমস্যার সমাধান করে দেবে।",
        }
      ],
      outline: [
        { id: "download-errors", label: "১. ড্যাশবোর্ড লোড এরর" },
        { id: "out-of-reach", label: "২. ডিরেক্ট কল সাপোর্ট অ্যাসিস্ট্যান্স" }
      ]
    },
    "faqs": {
      title: "রিফান্ড পলিসি এবং সাধারণ জিজ্ঞাসা (FAQs)",
      category: "সমস্যা সমাধান ও সাপোর্ট",
      description: "ডিজিটাল প্রোডাক্ট পারচেজ এবং পেমেন্ট সংক্রান্ত সাধারণ কিছু প্রশ্ন এবং সেগুলোর সমাধান নিচে দেওয়া হলো।",
      steps: [
        {
          id: "faq-refund",
          num: 1,
          title: "প্রশ্ন: ডিজিটাল সার্ভিসের ক্ষেত্রে কি রিফান্ড পাওয়া সম্ভব?",
          desc: "উত্তর: যেহেতু ডিজিটাল প্রোডাক্ট ও ড্যাশবোর্ড অ্যাক্সেস একবার সচল হয়ে যাওয়ার পর তা ফেরত নেওয়া সম্ভব নয়, তাই সাধারণত আমাদের এখানে রিফান্ড পলিসি প্রযোজ্য নয়। তবে, যদি আমাদের সিস্টেমে কোনো মেজর টেকনিক্যাল বাগ বা ত্রুটি থাকে যা আমাদের টিম ২৪ ঘণ্টার মধ্যে সমাধান করে দিতে ব্যর্থ হয়, কেবল সেই বিশেষ ক্ষেত্রে কাস্টমার সাপোর্টের সাথে কথা বলে আপনি রিফান্ড দাবি করতে পারবেন।",
        },
        {
          id: "faq-failed-payment",
          num: 2,
          title: "প্রশ্ন: পেমেন্ট সফল হয়েছে কিন্তু ড্যাশবোর্ড অ্যাক্সেস পাচ্ছি না, কী করব?",
          desc: "উত্তর: মাঝে মাঝে ব্যাংকিং গেটওয়ে বা ইন্টারনেট স্লো থাকার কারণে রিডাইরেকশনে সমস্যা হতে পারে। এমনটি হলে ভয়ের কিছু নেই। আপনি আপনার পেমেন্টের স্ক্রিনশট বা ট্রানজেকশন আইডি (TxnID) সহ সরাসরি আমাদের অফিশিয়াল হটলাইনে কল করুন বা আমাদের টেকনিক্যাল টিমের কলের জন্য অপেক্ষা করুন। আমাদের ব্যাকএন্ড টিম সর্বোচ্চ ১০-১৫ মিনিটের মধ্যে আপনার অ্যাকাউন্টে ম্যানুয়ালি ড্যাশবোর্ডটি সচল করে দেবে।",
        }
      ],
      outline: [
        { id: "faq-refund", label: "১. ডিজিটাল রিফান্ড পলিসি" },
        { id: "faq-failed-payment", label: "২. পেমেন্ট ফেইলর ও সাপোর্ট" }
      ]
    }
  }

  const currentArticle = articlesData[activeArticle] || articlesData[Object.keys(articlesData)[0]]

  return (
    <section className="bg-light-bg dark:bg-dark-bg min-h-screen py-10 border-b border-light-border dark:border-zinc-800/80 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Sidebar Toggle Button */}
        <div className="lg:hidden flex items-center justify-between pb-4 mb-6 border-b border-light-border dark:border-zinc-800">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-300 px-3 py-2 bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800 rounded-xl cursor-pointer"
          >
            <Menu className="w-4 h-4 text-emerald-500" /> কন্টেন্ট মেনু
          </button>
          <span className="text-xs font-bold text-zinc-400">{currentArticle?.title || "로드 হচ্ছে..."}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Navigation */}
          <aside className={`lg:col-span-3 lg:block fixed inset-0 z-50 lg:relative lg:z-auto bg-light-bg dark:bg-dark-bg lg:bg-transparent p-6 lg:p-0 transition-transform duration-300 lg:translate-x-0 ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
            <div className="flex items-center justify-between lg:hidden mb-6">
              <span className="text-sm font-black text-zinc-800 dark:text-zinc-200">হেল্প সেন্টার মেনু</span>
              <button 
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-8 sticky top-10">
              {sidebarData.map((section, sIdx) => (
                <div key={sIdx} className="space-y-2.5">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    {section.sectionTitle}
                  </h4>
                  <ul className="space-y-1">
                    {section.items.map((item) => {
                      const Icon = item.icon || FileText
                      const isActive = activeArticle === item.slug

                      return (
                        <li key={item.slug}>
                          <button
                            onClick={() => {
                              setActiveArticle(item.slug)
                              setMobileSidebarOpen(false)
                            }}
                            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                              isActive
                                ? "bg-emerald-500/10 text-emerald-500 border-l-2 border-emerald-500 pl-4"
                                : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isActive ? "text-emerald-500" : "text-zinc-400"}`} />
                            {item.title}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Backdrop for Mobile Sidebar */}
          {mobileSidebarOpen && (
            <div 
              onClick={() => setMobileSidebarOpen(false)} 
              className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs" 
            />
          )}

          {/* Main Content Reader */}
          <main className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-zinc-400">
                <span>হেল্প সেন্টার</span>
                <ChevronRight className="w-3 h-3" />
                <span>{currentArticle?.category || "로드 হচ্ছে..."}</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-emerald-500">{currentArticle?.title || "로드 হচ্ছে..."}</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
                {currentArticle?.title}
              </h1>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed">
                {currentArticle?.description}
              </p>
            </div>

            {/* Steps / Description Render */}
            <div className="space-y-8 pt-4 border-t border-light-border dark:border-zinc-800/80">
              {currentArticle?.steps?.map((step) => (
                <div key={step.id} className="space-y-3">
                  <h3 className="text-sm sm:text-base font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-black">
                      {step.num}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium pl-9 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* হাইলাইট কার্ড */}
                  {step.highlightCard && (
                    <div className="ml-9 p-4 rounded-2xl border border-emerald-500/20 dark:border-emerald-500/10 bg-emerald-500/[0.02] space-y-2">
                      <h4 className="text-xs font-black text-emerald-500 uppercase tracking-wide">
                        {step.highlightCard.title}
                      </h4>
                      <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 font-bold">
                        {step.highlightCard.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>

          {/* On This Page / সূচিপত্র */}
          <aside className="hidden lg:block lg:col-span-2 space-y-4 sticky top-10 border-l border-light-border dark:border-zinc-800/50 pl-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              এই পেজে রয়েছে
            </h4>
            <ul className="space-y-3 text-xs font-bold text-zinc-400 dark:text-zinc-500">
              {currentArticle?.outline?.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="hover:text-emerald-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

        </div>
      </div>
    </section>
  )
}