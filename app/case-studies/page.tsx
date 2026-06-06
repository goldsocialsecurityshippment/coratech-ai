import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { PageHeader, CTA } from "@/components/ui/shared";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Enterprise AI Results and Client Outcomes | Coratech AI Ghana",
  description: "See how Coratech AI has helped banks, hospitals, law firms, logistics companies and retailers across Africa and beyond improve operations with AI. Real results, real numbers.",
  keywords: ["AI case studies Africa", "enterprise AI results Ghana", "AI implementation examples Africa", "digital transformation results Ghana", "AI ROI Africa"],
  openGraph: { title: "Case Studies — Real AI Results | Coratech AI Ghana", description: "Real results from AI implementations across finance, healthcare, legal and logistics in Africa." },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader label="Case Studies" title="Real problems. Real results." sub="We let the work speak for itself. Here are some of the problems we have solved and the outcomes we delivered." />
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap flex flex-col gap-5">
          {caseStudies.map(cs => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card block overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[380px_1fr]">
                <div className="relative h-52 md:h-auto">
                  <Image src={(cs as any).image} alt={cs.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[#0A0F1E]/35" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-xs text-white">{cs.industry}</span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <p className="text-xs font-semibold tracking-widest uppercase text-[#4A6FA5]">{cs.client}</p>
                      <span className="text-xs text-[#718096]">{cs.duration}</span>
                    </div>
                    <h2 className="font-serif text-xl md:text-2xl text-[#0A0F1E] leading-snug mb-3">{cs.title}</h2>
                    <p className="text-sm md:text-base text-[#4A5568] leading-relaxed mb-5">{cs.summary}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {cs.technologies.slice(0, 4).map(t => (
                        <span key={t} className="px-2.5 py-1 bg-[#EEF2F7] rounded text-xs text-[#4A5568]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cs.outcomes.map((o, i) => (
                      <div key={i} className="border-l-2 border-[#4A6FA5] pl-3">
                        <div className="font-serif text-xl md:text-2xl text-[#0A0F1E] leading-none">{o.metric}</div>
                        <p className="text-xs text-[#718096] mt-1 leading-snug">{o.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTA title="Your organisation could be next." sub="Get in touch and tell us what you are trying to solve." btn="Get in Touch" href="/contact" dark />
    </>
  );
}
