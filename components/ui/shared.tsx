import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-[#4A6FA5]" />
      <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#4A6FA5]">{children}</span>
    </div>
  );
}

export function PageHeader({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <section className="pt-28 md:pt-40 pb-14 md:pb-20 bg-[#EEF2F7] border-b border-[#0A0F1E]/08">
      <div className="wrap">
        <div className="max-w-3xl">
          <Label>{label}</Label>
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#0A0F1E] mb-5">{title}</h1>
          {sub && <p className="text-base md:text-lg text-[#4A5568] leading-relaxed max-w-xl">{sub}</p>}
        </div>
      </div>
    </section>
  );
}

export function CTA({ title, sub, btn, href, dark }: { title: string; sub?: string; btn: string; href: string; dark?: boolean }) {
  return (
    <section className={`py-16 md:py-24 ${dark ? "bg-[#0A0F1E]" : "bg-[#E2E8F0]"}`}>
      <div className="wrap text-center max-w-2xl mx-auto">
        <h2 className={`text-2xl md:text-4xl mb-4 ${dark ? "text-white" : "text-[#0A0F1E]"}`}>{title}</h2>
        {sub && <p className={`text-base md:text-lg mb-10 leading-relaxed ${dark ? "text-white/60" : "text-[#4A5568]"}`}>{sub}</p>}
        <Link href={href} className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold transition-all ${dark ? "bg-white text-[#0A0F1E] hover:bg-white/90" : "bg-[#0A0F1E] text-white hover:bg-[#1a2744]"}`}>
          {btn} <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

export function StatBar({ stats }: { stats: { metric: string; label: string }[] }) {
  return (
    <div className={`grid grid-cols-${Math.min(stats.length, 3)} gap-px bg-[#0A0F1E]/10 rounded-xl overflow-hidden`}>
      {stats.map((s, i) => (
        <div key={i} className="p-6 md:p-8 bg-white">
          <div className="font-serif text-3xl md:text-4xl text-[#0A0F1E] mb-1 leading-none">{s.metric}</div>
          <p className="text-sm text-[#4A5568] leading-snug">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
