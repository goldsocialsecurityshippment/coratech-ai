import Image from "next/image";
import { CTA, Label } from "@/components/ui/shared";
import { teamMembers, values } from "@/lib/data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Coratech AI — Enterprise Technology Company | Accra, Ghana",
  description: "Coratech AI is founded in Accra, Ghana by Lawrencia Peasah Yeboah and Ernest Kwame Adjei. We build enterprise AI and digital infrastructure for organisations across Africa, London and beyond. Part of Canmore Digital.",
  keywords: ["Coratech AI founders", "AI company Ghana", "enterprise AI Accra", "Lawrencia Peasah Yeboah", "Ernest Kwame Adjei", "Canmore Digital Ghana", "AI startup Ghana", "technology company Accra"],
  openGraph: { title: "About Coratech AI | Accra Ghana", description: "Founded in Accra, Ghana. Building enterprise AI for Africa and beyond." },
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
            <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#6B8FBF]">Company</span>
          </div>
          <h1 className="text-3xl md:text-5xl text-white mb-5">We build the infrastructure that makes enterprises more capable.</h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">Coratech AI is an enterprise technology company founded in Accra, Ghana, with operations across London and beyond. Part of Canmore Digital.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Label>Mission</Label>
              <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-5">Making complex organisations operate better.</h2>
              <p className="text-base md:text-lg text-[#2D3748] leading-relaxed mb-5">The organisations that shape the world — financial institutions, healthcare networks, government agencies, logistics operators — operate at a scale and complexity that demands technology designed specifically for them. We build that technology.</p>
              <p className="text-base md:text-lg text-[#2D3748] leading-relaxed">We work with a small number of clients at a time because deep relationships produce better outcomes. We invest in understanding how an organisation actually works before we write a line of code.</p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { title: "Our philosophy", text: "Enterprise technology should be built for longevity, not novelty. We prioritise reliability and maintainability above everything else." },
                { title: "Our approach", text: "We spend time with clients before we propose anything. We want to understand the actual problem, not just the brief." },
                { title: "Our commitment", text: "The systems we build run critical operations. We accept that responsibility and design accordingly." },
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

      {/* Vision */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80&auto=format&fit=crop" alt="Team collaboration" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#0A0F1E]/83" />
        <div className="relative z-10 wrap text-center max-w-2xl mx-auto">
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-relaxed italic">
            "A world in which every complex organisation operates with the precision, speed and intelligence that their missions require."
          </p>
          <p className="text-sm text-white/40 mt-6">Our vision</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-[#E2E8F0]">
        <div className="wrap">
          <Label>Our Values</Label>
          <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-10">What we stand for.</h2>
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

      {/* Founders */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <Label>Leadership</Label>
          <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-10">The people who founded Coratech AI.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {teamMembers.map(m => (
              <div key={m.name} className="card overflow-hidden">
                <div className="relative h-72 md:h-80">
                  <Image src={(m as any).photo} alt={m.name} fill className="object-cover object-top" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[#0A0F1E] mb-1">{m.name}</h3>
                  <p className="text-sm text-[#4A6FA5] font-medium mb-4">{m.title}</p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Coratech */}
      <section className="py-16 md:py-24 bg-[#0A0F1E]">
        <div className="wrap">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#6B8FBF]" />
            <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#6B8FBF]">Why Choose Coratech AI</span>
          </div>
          <h2 className="text-2xl md:text-4xl text-white mb-10">Why organisations choose to work with us.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "We build for the long term", text: "We do not optimise for impressive demos. We build systems that work reliably, scale properly and are maintainable years down the line." },
              { title: "We are honest about what is possible", text: "AI is genuinely powerful but it is not magic. We tell clients what is realistic, what the risks are and what it will actually take." },
              { title: "We know enterprise environments", text: "We have built production AI systems for banks, hospitals, law firms and logistics companies. We understand the compliance requirements and organisational complexity." },
              { title: "We stay involved", text: "We do not hand over a system and disappear. We stay close through deployment, optimisation and the inevitable changes that come after go-live." },
              { title: "Senior people work on your project", text: "You will not be handed off to junior consultants after the sales process. The people you speak with at the start are the people who do the work." },
              { title: "We bring African enterprise perspective", text: "Founded in Ghana, we understand the specific challenges and opportunities of building enterprise technology for African markets." },
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
          <p className="text-base text-[#4A5568]">Coratech AI is part of <span className="font-semibold text-[#0A0F1E]">Canmore Digital</span> — a technology group building the digital infrastructure of the future.</p>
        </div>
      </section>

      <CTA title="Want to work with us?" sub="Get in touch and let us have a straightforward conversation about what you need." btn="Get in Touch" href="/contact" dark />
    </>
  );
}
