import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/data";
import { PageHeader, CTA } from "@/components/ui/shared";

export const metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <PageHeader label="Solutions" title="Everything you need to build smarter operations." sub="From AI automation to cloud infrastructure, we cover every part of the technology stack that enterprise organisations need." />
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <div className="grid-2">
            {solutions.map(s => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="card" style={{ display: "block", padding: "36px" }}
                
                >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                  <div style={{ fontSize: "28px", color: "#4A6FA5" }}>{s.icon}</div>
                  <ArrowRight size={16} color="rgba(15,23,42,0.2)" />
                </div>
                <h2 style={{ fontFamily: "Georgia,serif", fontSize: "20px", color: "#0A0F1E", marginBottom: "8px" }}>{s.title}</h2>
                <p style={{ fontSize: "15px", color: "#4A6FA5", fontWeight: 500, marginBottom: "12px" }}>{s.tagline}</p>
                <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.75, marginBottom: "20px" }}>{s.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {s.technologies.slice(0, 4).map(t => (
                    <span key={t} style={{ padding: "4px 10px", background: "#EEF2F7", borderRadius: "6px", fontSize: "13px", color: "#4A5568" }}>{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Not sure where to start?" sub="Talk to one of our specialists. We can help you figure out which combination of capabilities fits your situation." btn="Talk to Us" href="/contact" />
    </>
  );
}
