import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { insights } from "@/lib/data";
import { CTA } from "@/components/ui/shared";

export async function generateStaticParams() {
  return insights.map(i => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const a = insights.find(x => x.slug === params.slug);
  return { title: a?.title ?? "Insight" };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const a = insights.find(x => x.slug === params.slug);
  if (!a) notFound();
  const related = insights.filter(x => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      {/* Hero with image */}
      <section style={{ position: "relative", paddingTop: "clamp(110px,13vw,160px)", paddingBottom: "clamp(48px,6vw,80px)", overflow: "hidden" }}>
        <Image src={(a as any).image} alt={a.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,15,30,0.85) 0%, rgba(10,15,30,0.75) 100%)" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/insights" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.5)", fontSize: "14px", marginBottom: "40px" }}>
            <ArrowLeft size={14} /> All Insights
          </Link>
          <div style={{ maxWidth: "720px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
              <span style={{ padding: "4px 12px", background: "rgba(255,255,255,0.12)", borderRadius: "20px", fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>{a.category}</span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)" }}>{a.date} · {a.readTime}</span>
            </div>
            <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,3.5vw,3rem)", color: "white", marginBottom: "20px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>{a.title}</h1>
            <p style={{ fontSize: "19px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{a.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <div className="sidebar-layout" style={{ alignItems:"start" }}>
            <article>
              {a.body.map((para, i) => (
                <p key={i} style={{ fontSize: "18px", color: "#1A202C", lineHeight: 1.9, marginBottom: "28px" }}>{para}</p>
              ))}
            </article>

            {/* Sidebar */}
            <div className="hide-mobile" style={{ position: "sticky", top: "96px" }}>
              <div className="card" style={{ padding: "28px", marginBottom: "16px" }}>
                <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#718096", marginBottom: "16px" }}>About This Piece</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[["Category", a.category], ["Published", a.date], ["Read time", a.readTime]].map(([k, v]) => (
                    <div key={k}>
                      <p style={{ fontSize: "12px", color: "#718096", marginBottom: "2px" }}>{k}</p>
                      <p style={{ fontSize: "14px", fontWeight: 500, color: "#0A0F1E" }}>{v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "#E2E8F0", borderRadius: "12px", padding: "24px" }}>
                <p style={{ fontSize: "15px", fontWeight: 500, color: "#0A0F1E", marginBottom: "10px" }}>Talk to our team about this</p>
                <p style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.7, marginBottom: "16px" }}>We are happy to explore how any of this applies to your specific situation.</p>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 500, color: "#0A0F1E", borderBottom: "1.5px solid #0A0F1E", paddingBottom: "2px" }}>
                  Get in touch <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#E2E8F0", borderTop: "1px solid rgba(15,23,42,0.07)" }}>
          <div className="wrap">
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "1.8rem", color: "#0A0F1E", marginBottom: "32px" }}>Related reading</h2>
            <div className="grid-2">
              {related.map(r => (
                <Link key={r.slug} href={`/insights/${r.slug}`} className="card" style={{ display: "block", overflow: "hidden" }}>
                  <div style={{ position: "relative", height: "160px" }}>
                    <Image src={(r as any).image} alt={r.title} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.35)" }} />
                    <div style={{ position: "absolute", top: "12px", left: "14px" }}>
                      <span style={{ padding: "3px 10px", background: "rgba(255,255,255,0.9)", borderRadius: "20px", fontSize: "12px", color: "#4A6FA5", fontWeight: 500 }}>{r.category}</span>
                    </div>
                  </div>
                  <div style={{ padding: "22px 24px" }}>
                    <h3 style={{ fontFamily: "Georgia,serif", fontSize: "16px", color: "#0A0F1E", lineHeight: 1.4, marginBottom: "8px" }}>{r.title}</h3>
                    <p style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.7 }}>{r.excerpt.substring(0, 110)}...</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA title="Want to discuss any of this?" sub="We are always happy to talk through how these ideas apply to your organisation." btn="Get in Touch" href="/contact" />
    </>
  );
}
