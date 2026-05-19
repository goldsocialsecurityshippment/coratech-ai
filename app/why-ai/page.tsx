import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/ui/shared";

export const metadata = { title: "Why Use AI" };

const benefits = [
  {
    icon: "clock",
    title: "It handles the work that eats your time",
    text: "Think about the tasks in your organisation that happen every single day without fail — reading documents, entering data, sending follow-up emails, generating reports, moving information from one system to another. These tasks are necessary but they do not need a human to do them. AI can handle all of it automatically, around the clock, without getting tired or making the kinds of small errors that accumulate into big problems. Your people get that time back and can use it for work that actually requires human judgment.",
  },
  {
    icon: "target",
    title: "It makes fewer mistakes than manual processes",
    text: "When humans do repetitive work — reading contracts, processing applications, entering data — mistakes happen. Not because people are careless, but because repetition breeds inattention and everyone has a bad day. AI does not. An AI system trained to extract information from a document will do it the same way every single time, whether it is processing the first document of the day or the ten thousandth. For organisations where accuracy matters — finance, healthcare, legal, compliance — this is not a nice-to-have. It is fundamental.",
  },
  {
    icon: "chart",
    title: "It scales without adding headcount",
    text: "If your business grows and the volume of work doubles, the traditional answer is to hire more people. That takes time, costs money and introduces new management complexity. AI scales differently. A system that handles a hundred transactions a day can handle a hundred thousand without any significant change in cost or setup. This means your organisation can grow faster, take on more clients and expand into new markets without the usual friction that comes with scaling a team.",
  },
  {
    icon: "search",
    title: "It sees patterns humans would miss",
    text: "AI is exceptionally good at analysing large amounts of data and finding the patterns buried within it. A fraud detection system can monitor millions of transactions simultaneously and spot the subtle behavioural signals that indicate something is wrong — signals that no human analyst team could ever catch at that scale. A demand forecasting system can process hundreds of variables — weather, economic indicators, historical behaviour, competitor activity — and produce predictions that are far more accurate than any spreadsheet model. AI does not guess. It learns from the data and applies what it has learned consistently.",
  },
  {
    icon: "moon",
    title: "It works while you sleep",
    text: "AI systems do not have office hours. They do not take weekends off or go on leave. A customer query that comes in at 3am gets handled. A document that needs processing on a Sunday gets processed. A compliance alert that triggers outside business hours gets flagged immediately. For organisations operating across time zones or serving customers around the clock, this is transformative. You stop losing business to the hours when your team is unavailable.",
  },
  {
    icon: "savings",
    title: "The cost savings are real and measurable",
    text: "AI is not just about doing things faster — it is about doing them at a fundamentally different cost. When a process that took ten people can be handled by two people supported by AI, the savings are immediate and ongoing. Our clients typically see operational cost reductions of 40 to 70 percent in the specific processes where AI is deployed. And unlike other cost-cutting measures, this usually comes alongside an improvement in quality and speed, not a trade-off against them.",
  },
  {
    icon: "trophy",
    title: "Your competitors are already using it",
    text: "This is simply true. Across every major industry, organisations are deploying AI to operate faster, cheaper and more accurately than their competitors. The ones moving early are building advantages that compound over time — better data, more refined models, more efficient operations. Waiting to see how it all plays out is itself a strategic decision, and increasingly it is the losing one. The question is not whether to adopt AI but when and how to do it well.",
  },
  {
    icon: "people",
    title: "It makes your people better, not redundant",
    text: "The fear that AI will replace jobs is understandable but largely misplaced in the enterprise context. What AI does is remove the parts of jobs that are repetitive, draining and frankly a waste of skilled people. A compliance analyst who spent 70 percent of their day on manual document review can now spend that time on the judgment calls, the relationship management and the strategic work that actually requires a human. People do better work when they are not exhausted by repetition. AI makes that possible.",
  },
];

const industries = [
  { name: "Finance", use: "Fraud detection, compliance monitoring, automated reporting and loan processing." },
  { name: "Healthcare", use: "Clinical documentation, patient record management, billing automation and diagnostics support." },
  { name: "Legal", use: "Contract review, due diligence, legal research and document management." },
  { name: "Logistics", use: "Demand forecasting, route optimisation, warehouse management and customs processing." },
  { name: "Government", use: "Citizen service automation, permit processing, data management and compliance." },
  { name: "Real Estate", use: "Property valuation, transaction management, tenant services and portfolio analytics." },
];


function BenefitIcon({ name }: { name: string }) {
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
      <section style={{ position: "relative", paddingTop: "clamp(110px,13vw,160px)", paddingBottom: "clamp(64px,8vw,100px)", overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop"
          alt="Technology and data"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.8) 100%)" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ width: "28px", height: "1.5px", background: "#6B8FBF" }} />
            <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B8FBF" }}>Why Use AI</span>
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2.4rem,4.5vw,4rem)", color: "white", marginBottom: "28px", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
            AI is not just for tech companies.<br />
            <span style={{ color: "rgba(255,255,255,0.55)" }}>It is for any organisation</span><br />
            that wants to operate better.
          </h1>
          <p style={{ fontSize: "19px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: "620px" }}>
            Artificial intelligence sounds complicated. The benefits are actually very straightforward. Here is what it does, why it matters and how it can help your specific organisation.
          </p>
        </div>
      </section>

      {/* Simple intro */}
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "white", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
        <div className="wrap" style={{ maxWidth: "820px" }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#0A0F1E", marginBottom: "28px", lineHeight: 1.2 }}>
            In plain terms, what is AI?
          </h2>
          <p style={{ fontSize: "18px", color: "#2D3748", lineHeight: 1.9, marginBottom: "24px" }}>
            Artificial intelligence is software that can learn from data and use what it has learned to make decisions, answer questions, spot patterns and automate tasks — things that used to require a human to do.
          </p>
          <p style={{ fontSize: "18px", color: "#2D3748", lineHeight: 1.9, marginBottom: "24px" }}>
            It is not magic. It is not a robot. It is a very capable tool that, when built properly, can take over significant amounts of repetitive, analytical and administrative work from your team — and do that work faster, more accurately and at a fraction of the cost.
          </p>
          <p style={{ fontSize: "18px", color: "#2D3748", lineHeight: 1.9 }}>
            The key phrase is "built properly." AI that is poorly designed, trained on the wrong data or deployed without the right guardrails creates more problems than it solves. That is exactly why specialist implementation matters. Done well, AI is one of the most powerful operational advantages available to any organisation today.
          </p>
        </div>
      </section>

      {/* 8 benefits */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "12px" }}>The Benefits</p>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#0A0F1E", marginBottom: "56px", lineHeight: 1.2 }}>
            Eight things AI does that change how organisations work.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {benefits.map((b, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "48px 1fr",
                gap: "28px", alignItems: "start",
                padding: "40px 0",
                borderBottom: i < benefits.length - 1 ? "1px solid rgba(15,23,42,0.08)" : "none",
              }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "rgba(74,111,165,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <BenefitIcon name={b.icon} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "Georgia,serif", fontSize: "20px", color: "#0A0F1E", marginBottom: "14px", lineHeight: 1.3 }}>{b.title}</h3>
                  <p style={{ fontSize: "17px", color: "#2D3748", lineHeight: 1.85 }}>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#E2E8F0" }}>
        <div className="wrap">
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "12px" }}>By Sector</p>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#0A0F1E", marginBottom: "48px", lineHeight: 1.2 }}>
            Where AI is making a real difference right now.
          </h2>
          <div className="grid-3">
            {industries.map(ind => (
              <div key={ind.name} className="card" style={{ padding: "28px" }}>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "18px", color: "#0A0F1E", marginBottom: "12px" }}>{ind.name}</h3>
                <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.8 }}>{ind.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common concerns */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#EEF2F7" }}>
        <div className="wrap" style={{ maxWidth: "820px" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "12px" }}>Common Questions</p>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#0A0F1E", marginBottom: "48px", lineHeight: 1.2 }}>
            Things people often wonder about.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                q: "Is AI safe to trust with sensitive business data?",
                a: "Yes, when implemented correctly. Proper AI systems are built with strict data security, access controls and audit trails. We build all our systems to enterprise security standards including SOC 2, HIPAA and GDPR requirements depending on the sector. Your data does not go anywhere it should not.",
              },
              {
                q: "How long does it take to see results?",
                a: "Faster than most people expect. Many of the automations we build start delivering measurable results within weeks of deployment. A document processing workflow, for example, shows its impact immediately — the time savings are visible from day one. Larger transformation programmes take longer but are designed in phases so you see value throughout, not just at the end.",
              },
              {
                q: "Do we need to understand AI to use it?",
                a: "Not at all. You need to understand your own business and what you want it to do better. We handle everything else. Our job is to translate your operational challenges into technology that works — and to explain it in plain language throughout. You will never be left wondering what is happening or why.",
              },
              {
                q: "What if something goes wrong?",
                a: "Every system we build includes monitoring, alerting and human oversight mechanisms. AI systems do not operate without guardrails — they are designed to flag uncertainty, escalate edge cases to humans and maintain full logs of every decision. If something unexpected happens, we know about it immediately and we fix it.",
              },
              {
                q: "Is AI affordable for smaller organisations?",
                a: "The cost of AI has come down dramatically in recent years. Many implementations that would have cost millions five years ago can now be delivered for a fraction of that. We work with organisations at different stages and sizes and always design solutions that are proportionate to the return they will generate. The question to ask is not whether you can afford it — it is whether you can afford not to.",
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: "36px 0", borderBottom: i < 4 ? "1px solid rgba(15,23,42,0.08)" : "none" }}>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "19px", color: "#0A0F1E", marginBottom: "14px", lineHeight: 1.3 }}>{item.q}</h3>
                <p style={{ fontSize: "17px", color: "#2D3748", lineHeight: 1.85 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The right partner */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#0A0F1E" }}>
        <div className="wrap">
          <div className="flex-col-mobile" style={{ alignItems:"center" }}>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B8FBF", marginBottom: "16px" }}>Why It Matters Who Builds It</p>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "white", marginBottom: "24px", lineHeight: 1.2 }}>
                Good AI does not happen by accident.
              </h2>
              <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: "20px" }}>
                Most AI projects that fail do so not because the technology was wrong but because the implementation was poor. Bad data. Unclear objectives. No governance. No plan for what happens when the system encounters something unexpected.
              </p>
              <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: "32px" }}>
                Coratech AI has built production AI systems for enterprises across finance, healthcare, legal and logistics. We know what works, what does not and how to get from idea to operational reality without the false starts.
              </p>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", background: "white", color: "#0A0F1E", borderRadius: "8px", fontSize: "15px", fontWeight: 600 }}>
                Talk to Us <ArrowRight size={15} />
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { metric: "70%", label: "Average reduction in manual processing time across our client deployments" },
                { metric: "99.2%", label: "Accuracy rate on AI-powered document processing tasks" },
                { metric: "3x", label: "Average throughput improvement for automated workflows" },
                { metric: "40%", label: "Typical reduction in operational costs where AI is deployed" },
              ].map((stat, i) => (
                <div key={i} style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "24px 28px", display: "flex", gap: "20px", alignItems: "center" }}>
                  <div style={{ fontFamily: "Georgia,serif", fontSize: "2.2rem", color: "white", flexShrink: 0, lineHeight: 1 }}>{stat.metric}</div>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to see what AI can do for your organisation?"
        sub="Let us walk you through what is possible. No jargon, no pressure, just a straight conversation about your situation and how we can help."
        btn="Get in Touch"
        href="/contact"
      />
    </>
  );
}
