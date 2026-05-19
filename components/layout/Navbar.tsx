"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Why Use AI", href: "/why-ai" },
  { label: "Company", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const isHome = path === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const solid = scrolled || !isHome;

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: solid ? "rgba(238,242,247,0.96)" : "transparent",
      backdropFilter: solid ? "blur(12px)" : "none",
      borderBottom: solid ? "1px solid rgba(15,23,42,0.08)" : "none",
      transition: "all 0.4s ease",
    }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: solid ? "#0A0F1E" : "white", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s" }}>
            <span style={{ fontFamily: "Georgia,serif", fontSize: "15px", color: solid ? "white" : "#0A0F1E" }}>C</span>
          </div>
          <span style={{ fontWeight: 500, fontSize: "15px", letterSpacing: "-0.01em", color: solid ? "#0A0F1E" : "white", transition: "color 0.3s" }}>Coratech AI</span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden-mobile">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: "8px 14px", borderRadius: "8px", fontSize: "14px",
              color: solid ? (path.startsWith(l.href) ? "#0A0F1E" : "#4A5568") : (path.startsWith(l.href) ? "white" : "rgba(255,255,255,0.8)"),
              background: path.startsWith(l.href) ? (solid ? "rgba(15,23,42,0.07)" : "rgba(255,255,255,0.12)") : "transparent",
              fontWeight: path.startsWith(l.href) ? 500 : 400,
              transition: "all 0.2s",
            }}>{l.label}</Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link href="/contact" style={{ padding: "9px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: 500, background: solid ? "#0A0F1E" : "white", color: solid ? "white" : "#0A0F1E", transition: "all 0.3s" }} className="hidden-mobile">Get in Touch</Link>
          <button onClick={() => setOpen(!open)} style={{ padding: "6px", borderRadius: "6px", background: "transparent", border: "none", cursor: "pointer", color: solid ? "#0A0F1E" : "white" }} className="show-mobile">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: "#EEF2F7", borderTop: "1px solid rgba(15,23,42,0.08)", padding: "16px 0 24px" }}>
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{ padding: "12px 16px", borderRadius: "8px", fontSize: "16px", color: path.startsWith(l.href) ? "#0A0F1E" : "#4A5568", background: path.startsWith(l.href) ? "rgba(15,23,42,0.07)" : "transparent", fontWeight: path.startsWith(l.href) ? 500 : 400 }}>{l.label}</Link>
            ))}
            <Link href="/contact" style={{ marginTop: "12px", padding: "14px 16px", borderRadius: "8px", background: "#0A0F1E", color: "white", fontSize: "16px", fontWeight: 500, textAlign: "center" }}>Get in Touch</Link>
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 900px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 901px) { .show-mobile { display: none !important; } }
      `}</style>
    </header>
  );
}
