export default function AboutStory() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-8">
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
          Our Story
        </h3>
        <h2 className="text-2xl sm:text-3.5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
          Born out of a desire to simplify automation.
        </h2>
      </div>
      <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-zinc-800/80 rounded-3xl p-6 sm:p-8 space-y-4">
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          BotSaiful was created to help businesses automate customer support and operational workflow without building massive support structures or hiring large support teams.
        </p>
        <div className="border-t border-light-border dark:border-zinc-800/80 pt-4">
          <p className="text-xs font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Our Goal is Simple
          </p>
          <p className="text-sm font-bold text-emerald-500 dark:text-emerald-400 mt-1">
            Make high-fidelity AI automation accessible and cost-effective for every scaling business.
          </p>
        </div>
      </div>
    </section>
  )
}