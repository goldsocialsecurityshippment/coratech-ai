import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { CTA } from "@/components/ui/shared";

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
      {/* Hero with image */}
      <section style={{ position: "relative", paddingTop: "clamp(110px,13vw,160px)", paddingBottom: "clamp(48px,6vw,80px)", overflow: "hidden" }}>
        <Image src={(cs as any).image} alt={cs.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.65) 100%)" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.45)", fontSize: "14px", marginBottom: "40px" }}>
            <ArrowLeft size={14} /> All Case Studies
          </Link>
          <div style={{ maxWidth: "700px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
              <span style={{ padding: "4px 14px", background: "rgba(255,255,255,0.1)", borderRadius: "20px", fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>{cs.industry}</span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>{cs.duration}</span>
            </div>
            <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B8FBF", marginBottom: "16px" }}>{cs.client}</p>
            <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,3.5vw,3.2rem)", color: "white", marginBottom: "24px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>{cs.title}</h1>
            <p style={{ fontSize: "19px", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, maxWidth: "580px" }}>{cs.summary}</p>
          </div>
        </div>
      </section>

      {/* Outcome strip */}
      <section style={{ background: "white", borderBottom: "1px solid rgba(15,23,42,0.08)" }}>
        <div className="wrap">
          <div className="hero-stats" style={{ borderLeft: "1px solid rgba(15,23,42,0.08)" }}>
            {cs.outcomes.map((o, i) => (
              <div key={i} style={{ padding: "36px", borderRight: "1px solid rgba(15,23,42,0.08)" }}>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "2.6rem", color: "#0A0F1E", marginBottom: "8px", lineHeight: 1 }}>{o.metric}</div>
                <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.5 }}>{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <div className="two-col-sidebar">
            <div>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "12px" }}>The Challenge</p>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "1.7rem", color: "#0A0F1E", lineHeight: 1.3 }}>What they were dealing with.</h2>
            </div>
            <p style={{ fontSize: "18px", color: "#2D3748", lineHeight: 1.9 }}>{cs.challenge}</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#E2E8F0" }}>
        <div className="wrap">
          <div className="two-col-sidebar">
            <div>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "12px" }}>The Solution</p>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "1.7rem", color: "#0A0F1E", lineHeight: 1.3 }}>What we built.</h2>
            </div>
            <div>
              <p style={{ fontSize: "18px", color: "#2D3748", lineHeight: 1.9, marginBottom: "32px" }}>{cs.solution}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {cs.technologies.map(t => (
                  <span key={t} style={{ padding: "10px 18px", background: "white", border: "1px solid rgba(15,23,42,0.1)", borderRadius: "8px", fontSize: "15px", color: "#2D3748", fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation timeline */}
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "32px" }}>How We Delivered It</p>
          <div className="grid-3">
            {[
              { phase: "01", label: "Discovery", weeks: "Weeks 1 to 4", text: "Deep dive into existing systems, data landscape and stakeholder requirements. Full architecture blueprint produced." },
              { phase: "02", label: "Build", weeks: "Weeks 5 onwards", text: "Phased development with regular reviews. Continuous integration and stakeholder sign-off at each milestone." },
              { phase: "03", label: "Launch", weeks: "Final phase", text: "Production deployment, staff training and an active optimisation period to tune performance against agreed KPIs." },
            ].map(step => (
              <div key={step.phase} className="card" style={{ padding: "28px" }}>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "2rem", color: "rgba(15,23,42,0.1)", marginBottom: "16px" }}>{step.phase}</div>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "17px", color: "#0A0F1E", marginBottom: "4px" }}>{step.label}</h3>
                <p style={{ fontSize: "13px", color: "#4A6FA5", fontWeight: 500, marginBottom: "12px" }}>{step.weeks}</p>
                <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.75 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final outcomes */}
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#0A0F1E" }}>
        <div className="wrap">
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "white", marginBottom: "48px" }}>The results.</h2>
          <div className="grid-2">
            {cs.outcomes.map((o, i) => (
              <div key={i} style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "36px" }}>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "3.2rem", color: "white", lineHeight: 1, marginBottom: "12px" }}>{o.metric}</div>
                <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Want results like these?" sub="Tell us about your organisation and what you need. We are honest about what is possible." btn="Get in Touch" href="/contact" />
    </>
  );
}
