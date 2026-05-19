import Link from "next/link";

export function Footer() {
  const cols = [
    {
      heading: "Solutions",
      links: [
        ["AI Automation", "/solutions/ai-automation"],
        ["AI Agents", "/solutions/ai-agents"],
        ["Enterprise Software", "/solutions/enterprise-software"],
        ["Data Intelligence", "/solutions/data-intelligence"],
        ["Compliance Systems", "/solutions/compliance-systems"],
        ["Cloud Infrastructure", "/solutions/cloud-infrastructure"],
      ],
    },
    {
      heading: "Industries",
      links: [
        ["Financial Services", "/industries/finance"],
        ["Healthcare", "/industries/healthcare"],
        ["Legal Services", "/industries/legal"],
        ["Logistics", "/industries/logistics"],
        ["Government", "/industries/government"],
        ["Real Estate", "/industries/real-estate"],
      ],
    },
    {
      heading: "Company",
      links: [
        ["About", "/about"],
        ["Why Use AI", "/why-ai"],
        ["Case Studies", "/case-studies"],
        ["Insights", "/insights"],
        ["Technology", "/technology"],
        ["Contact", "/contact"],
      ],
    },
  ];

  return (
    <footer style={{ background: "#0A0F1E", color: "white" }}>
      <style>{`
        .footer-link { font-size:14px; color:rgba(255,255,255,0.55); transition:color 0.2s; display:block; }
        .footer-link:hover { color:white; }
      `}</style>
      <div className="wrap" style={{ paddingTop: "72px", paddingBottom: "48px" }}>
        <div className="footer-grid" style={{ paddingBottom: "48px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "32px", background: "white", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "Georgia,serif", fontSize: "15px", color: "#0A0F1E" }}>C</span>
              </div>
              <span style={{ fontWeight: 500, fontSize: "15px" }}>Coratech AI</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.75, maxWidth: "260px", marginBottom: "24px" }}>
              Enterprise AI and technology infrastructure for organisations that cannot afford to get it wrong.
            </p>

            {/* Location */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "8px" }}>Based in</p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>Accra, Ghana</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>Operations across London and beyond</p>
            </div>

            {/* Contact */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "8px" }}>Contact</p>
              <a href="mailto:hello@coratech.com" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "4px" }}>hello@coratech.com</a>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>+233 53 602 6175</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>+44 783 295 6639</p>
            </div>

            {/* Canmore */}
            <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>Part of <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Canmore Digital</span></p>
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.heading}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>{col.heading}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {col.links.map(([label, href]) => (
                  <Link key={href} href={href} className="footer-link">{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Coratech AI. Part of Canmore Digital. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/privacy" style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>Privacy</Link>
            <Link href="/terms" style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
