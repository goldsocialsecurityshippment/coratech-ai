import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA, Label } from "@/components/ui/shared";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Use AI — Benefits of Artificial Intelligence for Business | Coratech AI Ghana",
  description: "Learn why artificial intelligence is transforming enterprises in Ghana and across Africa. Plain language explanation of AI benefits, cost savings, and how it applies to your industry.",
  keywords: ["why use AI Ghana", "AI benefits Africa", "artificial intelligence for business Ghana", "AI ROI Africa", "how AI helps business Accra"],
  openGraph: { title: "Why Use AI | Coratech AI Ghana", description: "Plain language guide to AI benefits for enterprises in Ghana and Africa." },
};

const benefits = [
  { icon: "clock", title: "It handles the work that eats your time", text: "Think about the tasks in your organisation that happen every single day — reading documents, entering data, sending follow-up emails, generating reports. These tasks are necessary but they do not need a human to do them. AI can handle all of it automatically, around the clock, without getting tired or making the kinds of small errors that accumulate into big problems." },
  { icon: "target", title: "It makes fewer mistakes than manual processes", text: "When humans do repetitive work mistakes happen. Not because people are careless, but because repetition breeds inattention and everyone has a bad day. AI does not. An AI system trained to extract information from a document will do it the same way every single time, whether it is processing the first document of the day or the ten thousandth." },
  { icon: "chart", title: "It scales without adding headcount", text: "If your business grows and the volume of work doubles, the traditional answer is to hire more people. That takes time, costs money and introduces new management complexity. AI scales differently. A system that handles a hundred transactions a day can handle a hundred thousand without any significant change in cost or setup." },
  { icon: "search", title: "It sees patterns humans would miss", text: "AI is exceptionally good at analysing large amounts of data and finding the patterns buried within it. A fraud detection system can monitor millions of transactions simultaneously and spot subtle behavioural signals that indicate something is wrong — signals that no human analyst team could ever catch at that scale." },
  { icon: "moon", title: "It works while you sleep", text: "AI systems do not have office hours. They do not take weekends off or go on leave. A customer query that comes in at 3am gets handled. A document that needs processing on a Sunday gets processed. For organisations operating across time zones or serving customers around the clock, this is transformative." },
  { icon: "savings", title: "The cost savings are real and measurable", text: "AI is not just about doing things faster — it is about doing them at a fundamentally different cost. When a process that took ten people can be handled by two people supported by AI, the savings are immediate and ongoing. Our clients typically see operational cost reductions of 40 to 70 percent in the specific processes where AI is deployed." },
  { icon: "trophy", title: "Your competitors are already using it", text: "Across every major industry, organisations are deploying AI to operate faster, cheaper and more accurately than their competitors. The ones moving early are building advantages that compound over time. Waiting to see how it all plays out is itself a strategic decision, and increasingly it is the losing one." },
  { icon: "people", title: "It makes your people better, not redundant", text: "What AI does is remove the parts of jobs that are repetitive and draining. A compliance analyst who spent 70 percent of their day on manual document review can now spend that time on the judgment calls, the relationship management and the strategic work that actually requires a human. People do better work when they are not exhausted by repetition." },
];

function Icon({ name }: { name: string }) {
  const s = { width: 20, height: 20, stroke: "#4A6FA5", fill: "none", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "clock") return <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
  if (name === "target") return <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
  if (name === "chart") return <svg viewBox="0 0 24 24" style={s}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
  if (name === "search") return <svg viewBox="0 0 24 24" style={s}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
  if (name === "moon") return <svg viewBox="0 0 24 24" style={s}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
  if (name === "savings") return <svg viewBox="0 0 24 24" style={s}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
  if (name === "trophy") return <svg viewBox="0 0 24 24" style={s}><polyline points="8 21 12 17 16 21"/><line x1="12" y1="17" x2="12" y2="11"/><path d="M7 4H4a2 2 0 0 0-2 2v1a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V6a2 2 0 0 0-2-2h-3"/><rect x="7" y="2" width="10" height="6" rx="1"/></svg>;
  if (name === "people") return <svg viewBox="0 0 24 24" style={s}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
  return null;
}

export default function WhyAIPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop" alt="Technology" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E]/95 to-[#0A0F1E]/80" />
        <div className="relative z-10 wrap max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-px bg-[#6B8FBF]" />
            <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#6B8FBF]">Why Use AI</span>
          </div>
          <h1 className="text-3xl md:text-5xl text-white mb-6 leading-snug">
            AI is not just for tech companies.<br />
            <span className="text-white/50">It is for any organisation</span><br />
            that wants to operate better.
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl">Artificial intelligence sounds complicated. The benefits are actually very straightforward. Here is what it does, why it matters and how it can help your organisation.</p>
        </div>
      </section>

      {/* What is AI */}
      <section className="py-16 md:py-24 bg-white border-b border-[#0A0F1E]/07">
        <div className="wrap max-w-3xl">
          <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-7">In plain terms, what is AI?</h2>
          <p className="text-base md:text-lg text-[#2D3748] leading-relaxed mb-5">Artificial intelligence is software that can learn from data and use what it has learned to make decisions, answer questions, spot patterns and automate tasks — things that used to require a human to do.</p>
          <p className="text-base md:text-lg text-[#2D3748] leading-relaxed mb-5">It is not magic. It is not a robot. It is a very capable tool that, when built properly, can take over significant amounts of repetitive, analytical and administrative work from your team — and do that work faster, more accurately and at a fraction of the cost.</p>
          <p className="text-base md:text-lg text-[#2D3748] leading-relaxed">The key phrase is "built properly." AI that is poorly designed creates more problems than it solves. That is exactly why specialist implementation matters. Done well, AI is one of the most powerful operational advantages available to any organisation today.</p>
        </div>
      </section>

      {/* 8 Benefits */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <Label>The Benefits</Label>
          <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-12">Eight things AI does that change how organisations work.</h2>
          <div className="flex flex-col gap-0">
            {benefits.map((b, i) => (
              <div key={i} className={`flex gap-5 md:gap-8 py-8 md:py-10 ${i < benefits.length - 1 ? "border-b border-[#0A0F1E]/08" : ""}`}>
                <div className="w-10 h-10 rounded-lg bg-[#4A6FA5]/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={b.icon} />
                </div>
                <div>
                  <h3 className="font-serif text-lg md:text-xl text-[#0A0F1E] mb-3">{b.title}</h3>
                  <p className="text-base text-[#2D3748] leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By sector */}
      <section className="py-16 md:py-24 bg-[#E2E8F0]">
        <div className="wrap">
          <Label>By Sector</Label>
          <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-10">Where AI is making a real difference right now.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Finance", use: "Fraud detection, compliance monitoring, automated reporting and loan processing." },
              { name: "Healthcare", use: "Clinical documentation, patient record management, billing automation and diagnostics support." },
              { name: "Legal", use: "Contract review, due diligence, legal research and document management." },
              { name: "Logistics", use: "Demand forecasting, route optimisation, warehouse management and customs processing." },
              { name: "Government", use: "Citizen service automation, permit processing, data management and compliance." },
              { name: "Education", use: "Admissions processing, student performance monitoring and administrative automation." },
            ].map(ind => (
              <div key={ind.name} className="card p-6">
                <h3 className="font-serif text-lg text-[#0A0F1E] mb-3">{ind.name}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{ind.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap max-w-3xl">
          <Label>Common Questions</Label>
          <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-10">Things people often wonder about.</h2>
          <div className="flex flex-col gap-0">
            {[
              { q: "Is AI safe to trust with sensitive business data?", a: "Yes, when implemented correctly. Proper AI systems are built with strict data security, access controls and audit trails. We build all our systems to enterprise security standards including SOC 2, HIPAA and GDPR requirements. Your data does not go anywhere it should not." },
              { q: "How long does it take to see results?", a: "Faster than most people expect. Many automations we build start delivering measurable results within weeks of deployment. Larger transformation programmes take longer but are designed in phases so you see value throughout, not just at the end." },
              { q: "Do we need to understand AI to use it?", a: "Not at all. You need to understand your own business and what you want it to do better. We handle everything else. Our job is to translate your operational challenges into technology that works — and to explain it in plain language throughout." },
              { q: "What if something goes wrong?", a: "Every system we build includes monitoring, alerting and human oversight mechanisms. AI systems do not operate without guardrails — they are designed to flag uncertainty and escalate edge cases. If something unexpected happens, we know immediately and we fix it." },
              { q: "Is AI affordable for smaller organisations?", a: "The cost of AI has come down dramatically in recent years. Many implementations that would have cost millions five years ago can now be delivered for a fraction of that. We always design solutions that are proportionate to the return they will generate." },
            ].map((item, i) => (
              <div key={i} className={`py-8 ${i < 4 ? "border-b border-[#0A0F1E]/08" : ""}`}>
                <h3 className="font-serif text-lg md:text-xl text-[#0A0F1E] mb-4">{item.q}</h3>
                <p className="text-base text-[#2D3748] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner matters */}
      <section className="py-16 md:py-24 bg-[#0A0F1E]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-px bg-[#6B8FBF]" />
                <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#6B8FBF]">Why It Matters Who Builds It</span>
              </div>
              <h2 className="text-2xl md:text-4xl text-white mb-6">Good AI does not happen by accident.</h2>
              <p className="text-base text-white/65 leading-relaxed mb-5">Most AI projects that fail do so not because the technology was wrong but because the implementation was poor. Bad data. Unclear objectives. No governance.</p>
              <p className="text-base text-white/65 leading-relaxed mb-8">Coratech AI has built production AI systems for enterprises across finance, healthcare, legal and logistics. We know what works and how to get from idea to operational reality without the false starts.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0A0F1E] rounded-lg text-[15px] font-semibold hover:bg-white/90 transition-all">
                Talk to Us <ArrowRight size={15} />
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { metric: "70%", label: "Average reduction in manual processing time" },
                { metric: "99.2%", label: "Accuracy rate on AI-powered document processing" },
                { metric: "3x", label: "Average throughput improvement for automated workflows" },
                { metric: "40%", label: "Typical reduction in operational costs where AI is deployed" },
              ].map((stat, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-5 flex gap-5 items-center">
                  <div className="font-serif text-3xl text-white flex-shrink-0">{stat.metric}</div>
                  <p className="text-sm text-white/55 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA title="Ready to see what AI can do for your organisation?" sub="Let us walk you through what is possible. No jargon, no pressure, just a straight conversation." btn="Get in Touch" href="/contact" />
    </>
  );
}
