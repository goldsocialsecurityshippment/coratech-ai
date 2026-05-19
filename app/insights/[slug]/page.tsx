import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { insights } from "@/lib/data";
import { CTA } from "@/components/ui/shared";

export async function generateStaticParams() {
  return insights.map(i => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const a = insights.find(x => x.slug === params.slug);
  return { title: a?.title ?? "Insight" };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const a = insights.find(x => x.slug === params.slug);
  if (!a) notFound();
  const related = insights.filter(x => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-14 md:pb-20 overflow-hidden">
        <Image src={(a as any).image} alt={a.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-[#0A0F1E]/82" />
        <div className="relative z-10 wrap">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-10">
            <ArrowLeft size={14} /> All Insights
          </Link>
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 bg-white/12 rounded-full text-xs text-white/80">{a.category}</span>
              <span className="text-xs text-white/45">{a.date} · {a.readTime}</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-white mb-5 leading-snug">{a.title}</h1>
            <p className="text-base md:text-lg text-[#6B8FBF] font-medium leading-snug">{a.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">
            <article className="max-w-2xl">
              {a.body.map((para, i) => (
                <p key={i} className="text-base md:text-lg text-[#1A202C] leading-relaxed mb-7">{para}</p>
              ))}
            </article>

            {/* Sidebar - hidden on small, visible on large */}
            <div className="hidden lg:block sticky top-24 self-start">
              <div className="card p-6 mb-4">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#718096] mb-4">About This Piece</p>
                <div className="flex flex-col gap-3">
                  {[["Category", a.category], ["Published", a.date], ["Read time", a.readTime]].map(([k, v]) => (
                    <div key={k}>
                      <p className="text-xs text-[#718096] mb-0.5">{k}</p>
                      <p className="text-sm font-medium text-[#0A0F1E]">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#E2E8F0] rounded-xl p-5">
                <p className="text-sm font-medium text-[#0A0F1E] mb-2">Talk to our team about this</p>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-4">We are happy to explore how these ideas apply to your specific situation.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#0A0F1E] border-b border-[#0A0F1E] pb-0.5">
                  Get in touch <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile CTA card */}
          <div className="lg:hidden mt-10 bg-[#E2E8F0] rounded-xl p-5">
            <p className="text-sm font-medium text-[#0A0F1E] mb-2">Discuss this with our team</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#4A6FA5]">
              Get in touch <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-[#E2E8F0] border-t border-[#0A0F1E]/07">
          <div className="wrap">
            <h2 className="font-serif text-2xl md:text-3xl text-[#0A0F1E] mb-8">Related reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map(r => (
                <Link key={r.slug} href={`/insights/${r.slug}`} className="card block overflow-hidden">
                  <div className="relative h-40">
                    <Image src={(r as any).image} alt={r.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#0A0F1E]/35" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/90 rounded-full text-xs text-[#4A6FA5] font-medium">{r.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-base text-[#0A0F1E] leading-snug mb-2">{r.title}</h3>
                    <p className="text-sm text-[#4A5568] leading-relaxed">{r.excerpt.substring(0, 110)}...</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA title="Want to discuss any of this?" sub="We are always happy to talk through how these ideas apply to your organisation." btn="Get in Touch" href="/contact" />
    </>
  );
}
