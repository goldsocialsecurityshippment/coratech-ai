import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { industries } from "@/lib/data";
import { CTA, StatBar } from "@/components/ui/shared";

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
      {/* Hero with image */}
      <section style={{ position: "relative", paddingTop: "clamp(110px,13vw,160px)", paddingBottom: "clamp(48px,6vw,80px)", overflow: "hidden" }}>
        <Image src={(ind as any).image} alt={ind.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.7) 100%)" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/industries" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.5)", fontSize: "14px", marginBottom: "40px" }}>
            <ArrowLeft size={14} /> All Industries
          </Link>
          <div style={{ maxWidth: "640px" }}>
            <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2.4rem,4.5vw,4rem)", color: "white", marginBottom: "16px", lineHeight: 1.1, letterSpacing: "-0.025em" }}>{ind.title}</h1>
            <p style={{ fontSize: "19px", color: "rgba(255,255,255,0.7)", fontWeight: 400, marginBottom: "48px", lineHeight: 1.7 }}>{ind.subtitle}</p>
            <StatBar stats={ind.stats} />
          </div>
        </div>
      </section>

      {/* Overview and challenges */}
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <div className="flex-col-mobile">
            <div>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "16px" }}>Overview</p>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#0A0F1E", marginBottom: "24px", lineHeight: 1.2 }}>How we see this sector.</h2>
              <p style={{ fontSize: "18px", color: "#2D3748", lineHeight: 1.85 }}>{ind.description}</p>
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "16px" }}>Key Challenges</p>
              <h3 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.5rem,2.5vw,1.9rem)", color: "#0A0F1E", marginBottom: "24px", lineHeight: 1.3 }}>What organisations in this space are dealing with.</h3>
              <div>
                {ind.challenges.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", padding: "18px 0", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "1.5px solid #94A3B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "12px", color: "#4A6FA5", fontWeight: 600 }}>{i + 1}</div>
                    <span style={{ fontSize: "17px", color: "#2D3748", lineHeight: 1.75 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#E2E8F0" }}>
        <div className="wrap">
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "16px" }}>What We Build</p>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#0A0F1E", marginBottom: "40px", lineHeight: 1.2 }}>How we can help your organisation.</h2>
          <div className="grid-2">
            {ind.solutions.map((sol, i) => (
              <div key={i} className="card" style={{ padding: "24px", display: "flex", gap: "16px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#4A6FA5", flexShrink: 0, marginTop: "7px" }} />
                <p style={{ fontSize: "17px", color: "#2D3748", lineHeight: 1.75 }}>{sol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "32px" }}>Typical Workflow</p>
          <div className="grid-3">
            {[
              { phase: "01", title: "Intake and classification", text: "Documents, requests and data come in from multiple sources and get automatically sorted and routed to the right process." },
              { phase: "02", title: "Processing and enrichment", text: "The system reads, extracts and validates information, applying your business logic and pulling in external data where needed." },
              { phase: "03", title: "Review and action", text: "Routine cases are handled automatically. Anything that genuinely needs a human gets flagged and prioritised for review." },
            ].map(step => (
              <div key={step.phase} className="card" style={{ padding: "28px" }}>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "2rem", color: "rgba(15,23,42,0.12)", marginBottom: "16px" }}>{step.phase}</div>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "17px", color: "#0A0F1E", marginBottom: "12px" }}>{step.title}</h3>
                <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.75 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title={`Ready to transform how your ${ind.title.toLowerCase()} organisation operates?`} sub="Let us know what you are working on and we will put you in touch with someone who knows your space." btn="Get in Touch" href="/contact" dark />
    </>
  );
}
