import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/data";
import { PageHeader, CTA } from "@/components/ui/shared";

export const metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <>
      <PageHeader label="Industries" title="We understand the sector you work in." sub="Every industry has its own rules, pressures and constraints. We have built for most of them." />
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {industries.map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="card block overflow-hidden">
                <div className="relative h-52 md:h-60">
                  <Image src={(ind as any).image} alt={ind.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/75 via-[#0A0F1E]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="font-serif text-xl text-white mb-1">{ind.title}</h2>
                    <p className="text-sm text-white/70">{ind.subtitle}</p>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-5">{ind.description.substring(0, 160)}...</p>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {ind.stats.map((s, i) => (
                      <div key={i} className="border-l-2 border-[#4A6FA5]/30 pl-3">
                        <div className="font-serif text-xl text-[#0A0F1E]">{s.metric}</div>
                        <p className="text-xs text-[#718096] leading-snug">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#4A6FA5]">Explore <ArrowRight size={13} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Work with people who know your industry." sub="Get in touch and we will connect you with someone who has worked in your sector." btn="Get in Touch" href="/contact" />
    </>
  );
}
