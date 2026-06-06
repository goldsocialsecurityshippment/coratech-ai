import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/data";
import { PageHeader } from "@/components/ui/shared";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — AI and Enterprise Technology Perspectives | Coratech AI Ghana",
  description: "Practical perspectives on artificial intelligence, automation and enterprise technology from the Coratech AI team in Ghana. Research, analysis and industry commentary.",
  keywords: ["AI insights Africa", "enterprise technology blog Ghana", "artificial intelligence news Africa", "AI research Ghana", "digital transformation insights Africa"],
  openGraph: { title: "Insights — AI Perspectives | Coratech AI Ghana", description: "Research and analysis on AI and enterprise technology from Ghana." },
};

export default function InsightsPage() {
  const [first, ...rest] = insights;
  return (
    <>
      <PageHeader label="Insights" title="What we are thinking about." sub="Practical perspectives on AI, automation and enterprise technology from the Coratech AI team." />
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          {/* Featured */}
          <Link href={`/insights/${first.slug}`} className="card block overflow-hidden mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-56 md:h-auto min-h-[220px]">
                <Image src={(first as any).image} alt={first.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-[#0A0F1E]/50" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-block px-3 py-1 bg-white/15 rounded-full text-xs text-white mb-3">{first.category}</span>
                  <h2 className="font-serif text-xl md:text-2xl text-white leading-snug">{first.title}</h2>
                </div>
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-medium text-[#4A6FA5] mb-4">{first.subtitle}</p>
                  <p className="text-base text-[#4A5568] leading-relaxed mb-6">{first.excerpt}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#718096]">{first.date} · {first.readTime}</span>
                  <span className="flex items-center gap-2 text-sm font-medium text-[#4A6FA5]">Read <ArrowRight size={13} /></span>
                </div>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map(a => (
              <Link key={a.slug} href={`/insights/${a.slug}`} className="card block overflow-hidden">
                <div className="relative h-44">
                  <Image src={(a as any).image} alt={a.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[#0A0F1E]/35" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/90 rounded-full text-xs text-[#4A6FA5] font-medium">{a.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#718096] mb-2">{a.date} · {a.readTime}</p>
                  <h3 className="font-serif text-base text-[#0A0F1E] leading-snug mb-3">{a.title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed line-clamp-3">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
