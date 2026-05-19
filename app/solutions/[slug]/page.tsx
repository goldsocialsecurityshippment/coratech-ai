import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { solutions } from "@/lib/data";
import { CTA, Label } from "@/components/ui/shared";

export async function generateStaticParams() {
  return solutions.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const s = solutions.find(x => x.slug === params.slug);
  return { title: s?.title ?? "Solution" };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = solutions.find(x => x.slug === params.slug);
  if (!s) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-40 pb-14 md:pb-20 bg-[#0A0F1E]">
        <div className="wrap">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-white/70 transition-colors mb-10">
            <ArrowLeft size={14} /> All Solutions
          </Link>
          <div className="max-w-2xl">
            <div className="text-4xl text-[#6B8FBF] mb-5">{s.icon}</div>
            <h1 className="text-3xl md:text-5xl text-white mb-5">{s.title}</h1>
            <p className="text-base md:text-lg text-white/65 leading-relaxed">{s.description}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-[#0A0F1E]/08">
        <div className="wrap">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#0A0F1E]/10 rounded-xl overflow-hidden">
            {s.benefits.map((b, i) => (
              <div key={i} className="p-6 md:p-8 bg-white">
                <div className="font-serif text-3xl md:text-4xl text-[#0A0F1E] mb-2 leading-none">{b.metric}</div>
                <p className="text-sm text-[#4A5568]">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Label>Capabilities</Label>
              <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-5">What this solution delivers.</h2>
              <p className="text-base md:text-lg text-[#2D3748] leading-relaxed">Every capability is built with enterprise scale in mind. Reliability, security and long term maintainability come first.</p>
            </div>
            <div>
              {s.capabilities.map((cap, i) => (
                <div key={i} className="flex gap-4 py-4 border-b border-[#0A0F1E]/07 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-[#4A6FA5] flex-shrink-0 mt-2" />
                  <span className="text-base text-[#2D3748] leading-relaxed">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24 bg-[#E2E8F0]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Label>Technology</Label>
              <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-4">Built on tools that are proven to work.</h2>
              <p className="text-base md:text-lg text-[#2D3748] leading-relaxed">We choose technologies for their track record and longevity. Nothing experimental in production enterprise systems.</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-3 mb-8">
                {s.technologies.map(t => (
                  <span key={t} className="px-4 py-2.5 bg-white border border-[#0A0F1E]/10 rounded-lg text-sm font-medium text-[#2D3748]">{t}</span>
                ))}
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#718096] mb-3">Industries we serve</p>
              <div className="flex flex-wrap gap-2">
                {s.industries.map(ind => (
                  <span key={ind} className="px-3 py-1.5 bg-[#4A6FA5]/10 rounded-full text-sm text-[#4A6FA5] font-medium">{ind}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <Label>How We Work</Label>
          <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-10">A proven delivery approach.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", title: "Discovery", text: "We spend time understanding your systems, your team and what you actually need before we design anything." },
              { n: "02", title: "Design", text: "We produce detailed architecture plans and working prototypes so you can validate the approach before we build." },
              { n: "03", title: "Build", text: "Development happens in structured phases with regular reviews so you always know where things stand." },
              { n: "04", title: "Launch and improve", text: "We manage deployment and stay close during the optimisation period to make sure everything performs." },
            ].map(step => (
              <div key={step.n} className="card p-6">
                <div className="font-serif text-3xl text-[#0A0F1E]/15 mb-4">{step.n}</div>
                <h3 className="font-serif text-lg text-[#0A0F1E] mb-3">{step.title}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title={`Ready to build ${s.title} into your organisation?`} sub="Let us know what you are working on and we will connect you with the right people." btn="Get in Touch" href="/contact" dark />
    </>
  );
}
