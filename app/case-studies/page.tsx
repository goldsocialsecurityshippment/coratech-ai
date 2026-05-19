import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { PageHeader, CTA } from "@/components/ui/shared";

export const metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        label="Case Studies"
        title="Real problems. Real results."
        sub="We let the work speak for itself. Here are some of the problems we have solved and the outcomes we delivered."
      />
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {caseStudies.map(cs => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card" style={{ display: "block", overflow: "hidden" }}>
              <div className="case-study-card">
                {/* Image */}
                <div style={{ position: "relative" }}>
                  <Image src={(cs as any).image} alt={cs.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.35)" }} />
                  <div style={{ position: "absolute", bottom: "20px", left: "20px" }}>
                    <span style={{ padding: "5px 14px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", borderRadius: "20px", fontSize: "13px", color: "white" }}>{cs.industry}</span>
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "14px" }}>
                      <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5" }}>{cs.client}</p>
                      <span style={{ fontSize: "13px", color: "#718096" }}>{cs.duration}</span>
                    </div>
                    <h2 style={{ fontFamily: "Georgia,serif", fontSize: "22px", color: "#0A0F1E", lineHeight: 1.3, marginBottom: "14px" }}>{cs.title}</h2>
                    <p style={{ fontSize: "16px", color: "#4A5568", lineHeight: 1.8, marginBottom: "24px" }}>{cs.summary}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                      {cs.technologies.slice(0, 4).map(t => (
                        <span key={t} style={{ padding: "4px 12px", background: "#EEF2F7", borderRadius: "6px", fontSize: "13px", color: "#4A5568" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="grid-4">
                    {cs.outcomes.map((o, i) => (
                      <div key={i} style={{ borderLeft: "2px solid #4A6FA5", paddingLeft: "12px" }}>
                        <div style={{ fontFamily: "Georgia,serif", fontSize: "1.5rem", color: "#0A0F1E", lineHeight: 1 }}>{o.metric}</div>
                        <p style={{ fontSize: "12px", color: "#718096", marginTop: "4px", lineHeight: 1.4 }}>{o.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTA title="Your organisation could be next." sub="Get in touch and tell us what you are trying to solve. We are honest about whether we can help and how." btn="Get in Touch" href="/contact" dark />
    </>
  );
}
