import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { solutions, industries, insights } from "@/lib/data";
import { Label } from "@/components/ui/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coratech AI — Enterprise AI and Technology Infrastructure | Accra, Ghana",
  description: "Coratech AI is a Ghana-based enterprise technology company. We help businesses save time, cut costs and grow by building AI systems that actually work.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85&auto=format&fit=crop" alt="Modern enterprise office building" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E]/90 via-[#0A0F1E]/70 to-[#0A0F1E]/85" />
        <div className="relative z-10 wrap w-full pt-28 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#6B8FBF]" />
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6B8FBF]">Enterprise AI from Ghana</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-[1.08]">
              We help businesses<br />
              <span className="text-white/50">work smarter</span><br />
              using AI.
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
              We build AI systems, automation tools and digital infrastructure for organisations in finance, healthcare, logistics, legal and many more industries across Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#0A0F1E] rounded-lg text-[15px] font-semibold hover:bg-white/90 transition-all">
                Talk to Us <ArrowRight size={15} />
              </Link>
              <Link href="/solutions" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded-lg text-[15px] font-medium hover:border-white/60 transition-all">
                See What We Build
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden max-w-2xl">
            {[["47+", "Clients served"], ["12B+", "Records processed yearly"], ["99.99%", "Uptime SLA"], ["9+", "Industries"]]
              .map(([m, l]) => (
              <div key={l} className="p-5 md:p-7 bg-white/06">
                <div className="font-serif text-2xl md:text-3xl text-white mb-1">{m}</div>
                <p className="text-xs text-white/50">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 md:py-24 bg-[#EEF2F7] border-b border-[#0A0F1E]/07">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Label>What We Do</Label>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0F1E] mb-6">AI that solves real business problems.</h2>
              <p className="text-base md:text-lg text-[#2D3748] leading-relaxed mb-5">We are a technology company based in Accra, Ghana. We work with businesses that want to use AI to cut down on manual work, serve customers faster and make better decisions.</p>
              <p className="text-base md:text-lg text-[#2D3748] leading-relaxed mb-8">We have worked across banking, healthcare, law, logistics and government. We know how these industries work and we build technology that fits them properly.</p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[15px] font-medium text-[#0A0F1E] border-b-2 border-[#0A0F1E] pb-0.5 hover:text-[#4A6FA5] hover:border-[#4A6FA5] transition-colors">
                About us <ArrowRight size={14} />
              </Link>
            </div>
            <div className="relative h-72 md:h-96 lg:h-[480px] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop" alt="Modern enterprise workspace with technology" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-24 bg-[#E8EDF5]">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <Label>What We Build</Label>
              <h2 className="text-3xl md:text-4xl text-[#0A0F1E]">Tools that make a real difference.</h2>
            </div>
            <Link href="/solutions" className="flex items-center gap-2 text-sm text-[#4A5568] font-medium whitespace-nowrap hover:text-[#0A0F1E] transition-colors">All solutions <ArrowRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.slice(0, 6).map(s => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="card p-6 md:p-7 block">
                <div className="text-2xl text-[#4A6FA5] mb-4">{s.icon}</div>
                <h3 className="font-serif text-base md:text-lg text-[#0A0F1E] mb-2">{s.title}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-5">{s.tagline}</p>
                <span className="text-sm font-medium text-[#4A6FA5] flex items-center gap-1">Find out more <ArrowRight size={13} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <Label>Industries</Label>
              <h2 className="text-3xl md:text-4xl text-[#0A0F1E]">We know your sector.</h2>
            </div>
            <Link href="/industries" className="flex items-center gap-2 text-sm text-[#4A5568] font-medium whitespace-nowrap hover:text-[#0A0F1E] transition-colors">All industries <ArrowRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.slice(0, 6).map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="card block overflow-hidden">
                <div className="relative h-44">
                  <Image src={(ind as any).image} alt={`${ind.title} AI solutions Ghana`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[#0A0F1E]/38" />
                  <div className="absolute bottom-3 left-4">
                    <span className="font-serif text-base text-white">{ind.title}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm font-medium text-[#4A6FA5] mb-2">{ind.subtitle}</p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{ind.description.substring(0, 90)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-16 md:py-24 bg-[#EEF2F7] border-b border-[#0A0F1E]/07">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <Label>Insights</Label>
              <h2 className="text-3xl md:text-4xl text-[#0A0F1E]">Thinking out loud.</h2>
            </div>
            <Link href="/insights" className="flex items-center gap-2 text-sm text-[#4A5568] font-medium whitespace-nowrap hover:text-[#0A0F1E] transition-colors">All articles <ArrowRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {insights.slice(0, 3).map(a => (
              <Link key={a.slug} href={`/insights/${a.slug}`} className="card block overflow-hidden">
                <div className="relative h-40">
                  <Image src={(a as any).image} alt={a.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[#0A0F1E]/30" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/90 rounded-full text-xs text-[#4A6FA5] font-medium">{a.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#718096] mb-2">{a.date}</p>
                  <h3 className="font-serif text-base text-[#0A0F1E] leading-snug mb-2">{a.title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed line-clamp-2">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0A0F1E]">
        <div className="wrap text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-5">Want to see what AI can do for your business?</h2>
          <p className="text-base md:text-lg text-white/60 mb-10 leading-relaxed">Tell us what you are working on. We will have an honest conversation about whether and how we can help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#0A0F1E] rounded-lg text-[15px] font-semibold hover:bg-white/90 transition-all">
              Get in Touch <ArrowRight size={15} />
            </Link>
            <Link href="/why-ai" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white rounded-lg text-[15px] font-medium hover:border-white/50 transition-all">
              Why Use AI
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
