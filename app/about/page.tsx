import type { Metadata } from "next";
import Image from "next/image";
import { CTA, Label } from "@/components/ui/shared";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Coratech AI — Enterprise Technology Company | Accra, Ghana",
  description: "Coratech AI is an enterprise technology company based in Accra, Ghana. We build AI systems and digital infrastructure for organisations across Africa and beyond. Part of Canmore Digital.",
  keywords: ["AI company Ghana", "enterprise AI Accra", "Canmore Digital Ghana", "technology company Ghana"],
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-14 md:pb-20 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80&auto=format&fit=crop" alt="Modern office" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-[#0A0F1E]/80" />
        <div className="relative z-10 wrap max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#6B8FBF]" />
            <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#6B8FBF]">About Us</span>
          </div>
          <h1 className="text-3xl md:text-5xl text-white mb-5">We are a technology company that takes the work seriously.</h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">Founded in Accra, Ghana. Operations across London and beyond. Part of Canmore Digital.</p>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Label>Who We Are</Label>
              <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-5">A team that builds things that last.</h2>
              <p className="text-base md:text-lg text-[#2D3748] leading-relaxed mb-5">We started Coratech AI because we kept seeing the same problem. Businesses in Africa wanted to use modern technology but the companies offering it either did not understand the local context or were too expensive to work with.</p>
              <p className="text-base md:text-lg text-[#2D3748] leading-relaxed mb-5">So we built a company that does things differently. We work with a small number of clients at a time. We spend time understanding the actual problem before we start building. And we stay around after we launch.</p>
              <p className="text-base md:text-lg text-[#2D3748] leading-relaxed">We are not the right fit for every project and we are honest about that. When we take on a client, we are fully committed to getting it right.</p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { title: "How we think", text: "Technology that breaks or needs constant fixing is not good technology. We build for reliability first and everything else second." },
                { title: "How we work", text: "We talk to the people who will actually use what we build. Not just the executives, but the staff on the ground. That changes what we make." },
                { title: "What we commit to", text: "When we say something will work, we mean it. If something goes wrong after we launch, we fix it." },
              ].map(item => (
                <div key={item.title} className="border-l-4 border-[#4A6FA5] pl-5">
                  <h3 className="font-serif text-lg text-[#0A0F1E] mb-2">{item.title}</h3>
                  <p className="text-base text-[#4A5568] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80&auto=format&fit=crop" alt="Team at work" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#0A0F1E]/83" />
        <div className="relative z-10 wrap text-center max-w-2xl mx-auto">
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-relaxed italic">"We want every business in Africa to have access to the kind of technology that helps them compete on a global level."</p>
          <p className="text-sm text-white/40 mt-6">What drives us</p>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <Label>By The Numbers</Label>
          <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-10">A track record we are proud of.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { metric: "47+", label: "Businesses we have worked with" },
              { metric: "10", label: "Industries we serve" },
              { metric: "99.99%", label: "Uptime across our systems" },
              { metric: "40%", label: "Average cost reduction for clients" },
              { metric: "70%", label: "Less manual work for our clients" },
              { metric: "8", label: "Countries with active clients" },
              { metric: "3x", label: "Average throughput improvement" },
              { metric: "99.2%", label: "AI processing accuracy rate" },
            ].map((s, i) => (
              <div key={i} className="card p-6">
                <div className="font-serif text-3xl md:text-4xl text-[#0A0F1E] mb-2 leading-none">{s.metric}</div>
                <p className="text-sm text-[#4A5568] leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-[#E2E8F0]">
        <div className="wrap">
          <Label>What We Believe</Label>
          <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-10">The things we will not compromise on.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map(v => (
              <div key={v.title} className="card p-6">
                <h3 className="font-serif text-lg text-[#0A0F1E] mb-3">{v.title}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-24 bg-[#0A0F1E]">
        <div className="wrap">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#6B8FBF]" />
            <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#6B8FBF]">Why Work With Us</span>
          </div>
          <h2 className="text-2xl md:text-4xl text-white mb-10">What makes us different.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "We think long term", text: "We are not interested in building something impressive that falls apart six months later. Every decision we make is about whether this will still work well in three years." },
              { title: "We are straight with you", text: "If something is not going to work the way you are hoping, we will tell you. We would rather lose a project than damage a relationship by overpromising." },
              { title: "We have done this before", text: "We have built systems for banks, hospitals, law firms and logistics companies. We know the compliance requirements and the things that usually go wrong." },
              { title: "We do not disappear", text: "A lot of technology companies vanish after handover. We stick around. When things change or something needs fixing, we are still there." },
              { title: "The people you meet do the work", text: "There is no bait and switch. The team you talk to at the start is the team that builds your product." },
              { title: "We understand African markets", text: "We are based in Ghana and we have worked across the continent. We understand the infrastructure, the regulations and the business environment here." },
            ].map(item => (
              <div key={item.title} className="border border-white/10 rounded-xl p-6">
                <h3 className="font-serif text-lg text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canmore */}
      <section className="py-10 bg-[#E2E8F0] border-t border-[#0A0F1E]/07 text-center">
        <div className="wrap">
          <p className="text-base text-[#4A5568]">Coratech AI is part of <span className="font-semibold text-[#0A0F1E]">Canmore Digital</span>.</p>
        </div>
      </section>

      <CTA title="Want to work with us?" sub="Send us a message and let us have a straight conversation about what you need." btn="Get in Touch" href="/contact" dark />
    </>
  );
}
