import { serviceTimes } from "@/lib/site";

export default function ServiceTimes() {
  return (
    <section className="relative z-10 -mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-cream-200 rounded-3xl bg-cream-50 shadow-[0_30px_60px_-30px_rgb(28_12_27/0.45)] ring-1 ring-plum-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {serviceTimes.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 px-6 py-7 text-center">
            <p className="eyebrow text-[11px] text-gold-600">{s.label}</p>
            <p className="font-serif text-3xl font-semibold text-plum-800">{s.time}</p>
            <p className="text-sm text-ink/60">{s.day}s</p>
          </div>
        ))}
      </div>
    </section>
  );
}
