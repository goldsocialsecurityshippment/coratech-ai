import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { CTA, Label } from "@/components/ui/shared";

export async function generateStaticParams() {
  return caseStudies.map(cs => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find(x => x.slug === params.slug);
  return { title: cs?.title ?? "Case Study" };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find(x => x.slug === params.slug);
  if (!cs) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-14 md:pb-20 overflow-hidden">
        <Image src={(cs as any).image} alt={cs.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E]/95 to-[#0A0F1E]/65" />
        <div className="relative z-10 wrap">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-white/70 transition-colors mb-10">
            <ArrowLeft size={14} /> All Case Studies
          </Link>
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/75">{cs.industry}</span>
              <span className="text-xs text-white/35">{cs.duration}</span>
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#6B8FBF] mb-3">{cs.client}</p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-white mb-5 leading-snug">{cs.title}</h1>
            <p className="text-base md:text-lg text-white/65 leading-relaxed">{cs.summary}</p>
          </div>
        </div>
      </section>

      {/* Outcomes strip */}
      <section className="bg-white border-b border-[#0A0F1E]/08">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#0A0F1E]/08">
            {cs.outcomes.map((o, i) => (
              <div key={i} className="p-5 md:p-8">
                <div className="font-serif text-2xl md:text-4xl text-[#0A0F1E] mb-2 leading-none">{o.metric}</div>
                <p className="text-sm text-[#4A5568] leading-snug">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
            <div>
              <Label>The Challenge</Label>
              <h2 className="text-xl md:text-2xl text-[#0A0F1E] leading-snug">What they were dealing with.</h2>
            </div>
            <p className="text-base md:text-lg text-[#2D3748] leading-relaxed">{cs.challenge}</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-24 bg-[#E2E8F0]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
            <div>
              <Label>The Solution</Label>
              <h2 className="text-xl md:text-2xl text-[#0A0F1E] leading-snug">What we built.</h2>
            </div>
            <div>
              <p className="text-base md:text-lg text-[#2D3748] leading-relaxed mb-8">{cs.solution}</p>
              <div className="flex flex-wrap gap-3">
                {cs.technologies.map(t => (
                  <span key={t} className="px-4 py-2 bg-white border border-[#0A0F1E]/10 rounded-lg text-sm text-[#2D3748] font-medium">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <Label>How We Delivered It</Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { phase: "01", label: "Discovery", weeks: "Weeks 1 to 4", text: "Deep dive into existing systems, data landscape and requirements. Full architecture blueprint produced." },
              { phase: "02", label: "Build", weeks: "Weeks 5 onwards", text: "Phased development with regular reviews. Continuous integration and stakeholder sign-off at each milestone." },
              { phase: "03", label: "Launch", weeks: "Final phase", text: "Production deployment, training and an active optimisation period to tune performance against agreed KPIs." },
            ].map(step => (
              <div key={step.phase} className="card p-6">
                <div className="font-serif text-3xl text-[#0A0F1E]/12 mb-3">{step.phase}</div>
                <h3 className="font-serif text-lg text-[#0A0F1E] mb-1">{step.label}</h3>
                <p className="text-sm font-medium text-[#4A6FA5] mb-3">{step.weeks}</p>
                <p className="text-sm text-[#4A5568] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 bg-[#0A0F1E]">
        <div className="wrap">
          <h2 className="text-2xl md:text-4xl text-white mb-10">The results.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cs.outcomes.map((o, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-6 md:p-8">
                <div className="font-serif text-4xl md:text-5xl text-white leading-none mb-4">{o.metric}</div>
                <p className="text-base text-white/60 leading-relaxed">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Want results like these?" sub="Tell us about your organisation and what you need." btn="Get in Touch" href="/contact" />
    </>
  );
}
