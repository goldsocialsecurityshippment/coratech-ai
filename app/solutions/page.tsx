import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/data";
import { PageHeader, CTA } from "@/components/ui/shared";

export const metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <PageHeader label="Solutions" title="Everything you need to build smarter operations." sub="From AI automation to cloud infrastructure, we cover every part of the technology stack that enterprise organisations need." />
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {solutions.map(s => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="card p-7 md:p-9 block">
                <div className="flex justify-between items-start mb-5">
                  <div className="text-3xl text-[#4A6FA5]">{s.icon}</div>
                  <ArrowRight size={16} className="text-[#0A0F1E]/20 mt-1" />
                </div>
                <h2 className="font-serif text-xl md:text-2xl text-[#0A0F1E] mb-2">{s.title}</h2>
                <p className="text-sm font-medium text-[#4A6FA5] mb-3">{s.tagline}</p>
                <p className="text-sm md:text-base text-[#4A5568] leading-relaxed mb-5">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {s.technologies.slice(0, 4).map(t => (
                    <span key={t} className="px-2.5 py-1 bg-[#EEF2F7] rounded text-xs text-[#4A5568]">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Not sure where to start?" sub="Talk to one of our specialists. We can help you figure out which capabilities fit your situation." btn="Talk to Us" href="/contact" />
    </>
  );
}
