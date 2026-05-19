import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { solutions } from "@/lib/data";
import { CTA, StatBar } from "@/components/ui/shared";

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
      <section style={{ paddingTop: "clamp(100px,12vw,144px)", paddingBottom: "clamp(48px,6vw,80px)", background: "#0A0F1E" }}>
        <div className="wrap">
          <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.5)", fontSize: "14px", marginBottom: "40px" }}>
            <ArrowLeft size={14} /> All Solutions
          </Link>
          <div style={{ maxWidth: "720px" }}>
            <div style={{ fontSize: "36px", color: "#6B8FBF", marginBottom: "20px" }}>{s.icon}</div>
            <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2.4rem,4.5vw,4rem)", color: "white", marginBottom: "24px", lineHeight: 1.1, letterSpacing: "-0.025em" }}>{s.title}</h1>
            <p style={{ fontSize: "19px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>{s.description}</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 0", background: "white", borderBottom: "1px solid rgba(15,23,42,0.08)" }}>
        <div className="wrap"><StatBar stats={s.benefits} /></div>
      </section>

      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <div className="flex-col-mobile">
            <div>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "16px" }}>What We Deliver</p>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#0A0F1E", marginBottom: "24px", lineHeight: 1.2 }}>Core capabilities.</h2>
              <p style={{ fontSize: "17px", color: "#2D3748", lineHeight: 1.85 }}>Every capability is built with enterprise scale in mind. Reliability, security and long term maintainability come first.</p>
            </div>
            <div>
              {s.capabilities.map((cap, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "18px 0", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4A6FA5", flexShrink: 0, marginTop: "8px" }} />
                  <span style={{ fontSize: "17px", color: "#2D3748", lineHeight: 1.7 }}>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#E2E8F0" }}>
        <div className="wrap">
          <div className="flex-col-mobile" style={{ alignItems:"start" }}>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "16px" }}>Technology</p>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#0A0F1E", marginBottom: "16px", lineHeight: 1.2 }}>Built on tools that are proven to work.</h2>
              <p style={{ fontSize: "17px", color: "#2D3748", lineHeight: 1.8 }}>We choose technologies for their track record and longevity. Nothing experimental in production enterprise systems.</p>
            </div>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
                {s.technologies.map(t => (
                  <span key={t} style={{ padding: "10px 18px", background: "white", border: "1px solid rgba(15,23,42,0.1)", borderRadius: "8px", fontSize: "15px", color: "#2D3748", fontWeight: 500 }}>{t}</span>
                ))}
              </div>
              <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#718096", marginBottom: "12px" }}>Industries we serve</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {s.industries.map(ind => (
                  <span key={ind} style={{ padding: "6px 14px", background: "rgba(74,111,165,0.1)", borderRadius: "20px", fontSize: "14px", color: "#4A6FA5", fontWeight: 500 }}>{ind}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "32px" }}>How We Work</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
            {[
              { n: "01", title: "Discovery", text: "We spend time understanding your systems, your team and what you actually need before we design anything." },
              { n: "02", title: "Design", text: "We produce detailed architecture plans and working prototypes so you can validate the approach before we build." },
              { n: "03", title: "Build", text: "Development happens in structured phases with regular reviews so you always know where things stand." },
              { n: "04", title: "Launch and improve", text: "We manage the deployment and stay close during the optimisation period to make sure everything performs." },
            ].map(step => (
              <div key={step.n} style={{ padding: "28px", background: "white", borderRadius: "12px", border: "1px solid rgba(15,23,42,0.06)" }}>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "2rem", color: "rgba(15,23,42,0.15)", marginBottom: "16px" }}>{step.n}</div>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "17px", color: "#0A0F1E", marginBottom: "10px" }}>{step.title}</h3>
                <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.7 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title={`Ready to build ${s.title} into your organisation?`} sub="Let us know what you are working on and we will connect you with the right people." btn="Get in Touch" href="/contact" dark />
    </>
  );
}
