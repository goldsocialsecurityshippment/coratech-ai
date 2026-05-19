import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/data";
import { PageHeader } from "@/components/ui/shared";

export const metadata = { title: "Insights" };

export default function InsightsPage() {
  const [first, ...rest] = insights;
  return (
    <>
      <PageHeader
        label="Insights"
        title="What we are thinking about."
        sub="Practical perspectives on AI, automation and enterprise technology from the Coratech AI team."
      />
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          {/* Featured article */}
          <Link href={`/insights/${first.slug}`} className="card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden", marginBottom: "24px" }}>
            <div style={{ position: "relative", minHeight: "320px" }}>
              <Image src={(first as any).image} alt={first.title} fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.5)" }} />
              <div style={{ position: "absolute", bottom: "24px", left: "28px", right: "28px" }}>
                <span style={{ display: "inline-block", padding: "4px 12px", background: "rgba(255,255,255,0.15)", borderRadius: "20px", fontSize: "12px", color: "white", marginBottom: "12px" }}>{first.category}</span>
                <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "white", lineHeight: 1.3 }}>{first.title}</h2>
              </div>
            </div>
            <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "15px", color: "#4A6FA5", fontWeight: 500, marginBottom: "16px" }}>{first.subtitle}</p>
                <p style={{ fontSize: "16px", color: "#4A5568", lineHeight: 1.8, marginBottom: "24px" }}>{first.excerpt}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "14px", color: "#718096" }}>{first.date} · {first.readTime}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 500, color: "#4A6FA5" }}>Read <ArrowRight size={13} /></span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid-3">
            {rest.map(a => (
              <Link key={a.slug} href={`/insights/${a.slug}`} className="card" style={{ display: "block", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "180px" }}>
                  <Image src={(a as any).image} alt={a.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.35)" }} />
                  <div style={{ position: "absolute", top: "14px", left: "14px" }}>
                    <span style={{ padding: "3px 10px", background: "rgba(255,255,255,0.92)", borderRadius: "20px", fontSize: "12px", color: "#4A6FA5", fontWeight: 500 }}>{a.category}</span>
                  </div>
                </div>
                <div style={{ padding: "22px 24px" }}>
                  <p style={{ fontSize: "13px", color: "#718096", marginBottom: "10px" }}>{a.date} · {a.readTime}</p>
                  <h3 style={{ fontFamily: "Georgia,serif", fontSize: "16px", color: "#0A0F1E", lineHeight: 1.4, marginBottom: "10px" }}>{a.title}</h3>
                  <p style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.7, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
