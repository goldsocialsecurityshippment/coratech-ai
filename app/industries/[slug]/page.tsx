import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { industries } from "@/lib/data";
import { CTA, Label } from "@/components/ui/shared";

export async function generateStaticParams() {
  return industries.map(i => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const ind = industries.find(x => x.slug === params.slug);
  return { title: ind?.title ?? "Industry" };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const ind = industries.find(x => x.slug === params.slug);
  if (!ind) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-14 md:pb-20 overflow-hidden">
        <Image src={(ind as any).image} alt={ind.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E]/92 to-[#0A0F1E]/65" />
        <div className="relative z-10 wrap">
          <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-10">
            <ArrowLeft size={14} /> All Industries
          </Link>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl text-white mb-4">{ind.title}</h1>
            <p className="text-base md:text-lg text-white/70 mb-10">{ind.subtitle}</p>
            <div className="grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden">
              {ind.stats.map((s, i) => (
                <div key={i} className="p-5 md:p-7 bg-white/08">
                  <div className="font-serif text-2xl md:text-3xl text-white mb-1">{s.metric}</div>
                  <p className="text-xs text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Challenges */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Label>Overview</Label>
              <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-5">How we see this sector.</h2>
              <p className="text-base md:text-lg text-[#2D3748] leading-relaxed">{ind.description}</p>
            </div>
            <div>
              <Label>Key Challenges</Label>
              <h3 className="text-xl md:text-3xl text-[#0A0F1E] mb-5">What organisations in this space deal with.</h3>
              <div>
                {ind.challenges.map((c, i) => (
                  <div key={i} className="flex gap-4 py-4 border-b border-[#0A0F1E]/07 last:border-0">
                    <div className="w-6 h-6 rounded-full border-2 border-[#94A3B8] flex items-center justify-center flex-shrink-0 text-xs text-[#4A6FA5] font-semibold">{i + 1}</div>
                    <span className="text-base text-[#2D3748] leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-24 bg-[#E2E8F0]">
        <div className="wrap">
          <Label>What We Build</Label>
          <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-10">How we can help.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ind.solutions.map((sol, i) => (
              <div key={i} className="card p-5 flex gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#4A6FA5] flex-shrink-0 mt-1.5" />
                <p className="text-base text-[#2D3748] leading-relaxed">{sol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <Label>Typical Workflow</Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { phase: "01", title: "Intake and classification", text: "Documents and requests come in and get automatically sorted and routed to the right process." },
              { phase: "02", title: "Processing and enrichment", text: "The system reads, extracts and validates information, applying your business logic and rules." },
              { phase: "03", title: "Review and action", text: "Routine cases are handled automatically. Anything that needs a human gets flagged immediately." },
            ].map(step => (
              <div key={step.phase} className="card p-6">
                <div className="font-serif text-3xl text-[#0A0F1E]/12 mb-4">{step.phase}</div>
                <h3 className="font-serif text-lg text-[#0A0F1E] mb-3">{step.title}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title={`Ready to transform how your ${ind.title.toLowerCase()} organisation operates?`} sub="Let us know what you are working on and we will put you in touch with someone who knows your space." btn="Get in Touch" href="/contact" dark />
    </>
  );
}
