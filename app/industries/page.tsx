import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/data";
import { PageHeader, CTA } from "@/components/ui/shared";

export const metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        label="Industries"
        title="We understand the sector you work in."
        sub="Every industry has its own rules, pressures and constraints. We have built for most of them and we bring that experience to every engagement."
      />
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <div className="grid-2">
            {industries.map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="card" style={{ display: "block", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "220px" }}>
                  <Image src={(ind as any).image} alt={ind.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,30,0.75) 0%, rgba(10,15,30,0.2) 60%)" }} />
                  <div style={{ position: "absolute", bottom: "20px", left: "24px", right: "24px" }}>
                    <h2 style={{ fontFamily: "Georgia,serif", fontSize: "20px", color: "white", marginBottom: "4px" }}>{ind.title}</h2>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>{ind.subtitle}</p>
                  </div>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.78, marginBottom: "20px" }}>{ind.description.substring(0, 160)}...</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginBottom: "20px" }}>
                    {ind.stats.map((s, i) => (
                      <div key={i} style={{ borderLeft: "2px solid rgba(74,111,165,0.3)", paddingLeft: "12px" }}>
                        <div style={{ fontFamily: "Georgia,serif", fontSize: "1.5rem", color: "#0A0F1E" }}>{s.metric}</div>
                        <p style={{ fontSize: "12px", color: "#718096", lineHeight: 1.4 }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 500, color: "#4A6FA5" }}>Explore <ArrowRight size={13} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Work with people who know your industry." sub="Get in touch and we will connect you with someone who has worked in your sector." btn="Get in Touch" href="/contact" />
    </>
  );
}
