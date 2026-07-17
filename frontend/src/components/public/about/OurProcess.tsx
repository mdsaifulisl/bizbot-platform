import { Sequence, Step } from "@/components/ui/sequence" // অথবা আপনার পাথ অনুযায়ী ইমপোর্ট করুন

export default function OurProcess() {
  return (
    <section className="space-y-6">
      <div className="text-center sm:text-left">
        <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
          Our Process
        </h3>
        <h2 className="text-2xl sm:text-3.5xl font-black text-zinc-900 dark:text-zinc-50 mt-1">
          How It Works
        </h2>
      </div>

      <Sequence>
        {/* Reason: Process flow steps are sequential and order is critical for integration */}
        <Step title="Create Account" subtitle="Takes under 1 min">
          Sign up using your secure corporate email and initialize your BotSaiful workspace instantly.
        </Step>
        <Step title="Connect Website" subtitle="Script injection">
          Insert a simple 1-line script tag into your application header or download our plugin wrapper.
        </Step>
        <Step title="Train AI Agents" subtitle="Context feeding">
          Paste your website URLs, raw documentation, or upload spreadsheets to feed data to the AI model.
        </Step>
        <Step title="Link Communication Platforms" subtitle="API mapping">
          Authorize Meta Messenger accounts and scan QR codes for WhatsApp Business connectivity.
        </Step>
        <Step title="Go Live & Automate" subtitle="Production ready">
          Run your automations immediately with custom styling, behavior sets, and human fallbacks.
        </Step>
      </Sequence>
    </section>
  )
}