import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
      <div style={{ width: "28px", height: "1.5px", background: "#4A6FA5" }} />
      <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5" }}>{children}</span>
    </div>
  );
}

export function PageHeader({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <section style={{ paddingTop: "144px", paddingBottom: "80px", background: "#EEF2F7", borderBottom: "1px solid rgba(15,23,42,0.08)" }}>
      <div className="wrap">
        <div style={{ maxWidth: "720px" }}>
          <Label>{label}</Label>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2.2rem,4vw,3.8rem)", color: "#0A0F1E", marginBottom: "20px", lineHeight: 1.1, letterSpacing: "-0.025em" }}>{title}</h1>
          {sub && <p style={{ fontSize: "18px", color: "#4A5568", lineHeight: 1.8, maxWidth: "560px" }}>{sub}</p>}
        </div>
      </div>
    </section>
  );
}

export function CTA({ title, sub, btn, href, dark }: { title: string; sub?: string; btn: string; href: string; dark?: boolean }) {
  return (
    <section style={{ padding: "96px 0", background: dark ? "#0A0F1E" : "#E2E8F0" }}>
      <div className="wrap" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.8rem)", color: dark ? "white" : "#0A0F1E", marginBottom: "16px", lineHeight: 1.2 }}>{title}</h2>
        {sub && <p style={{ fontSize: "17px", color: dark ? "rgba(255,255,255,0.6)" : "#4A5568", marginBottom: "40px", lineHeight: 1.8 }}>{sub}</p>}
        <Link href={href} style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          padding: "14px 32px", borderRadius: "8px", fontSize: "15px", fontWeight: 500,
          background: dark ? "white" : "#0A0F1E",
          color: dark ? "#0A0F1E" : "white",
          textDecoration: "none",
        }}>{btn} <ArrowRight size={15} /></Link>
      </div>
    </section>
  );
}

export function StatBar({ stats }: { stats: { metric: string; label: string }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: "1px", background: "rgba(15,23,42,0.08)", borderRadius: "12px", overflow: "hidden" }}>
      {stats.map((s, i) => (
        <div key={i} style={{ padding: "32px", background: "white" }}>
          <div style={{ fontFamily: "Georgia,serif", fontSize: "2.4rem", color: "#0A0F1E", marginBottom: "6px", lineHeight: 1 }}>{s.metric}</div>
          <p style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.5 }}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
