import { PageHeader } from "@/components/ui/shared";
export const metadata = { title: "Terms of Service" };
const sections = [
  { title: "Using our website", text: "By using this website you agree to use it lawfully. You may not use it to harm others, infringe intellectual property rights or interfere with our systems." },
  { title: "Our content", text: "Everything on this site including text, graphics and the Coratech AI name and logo belongs to us. You may not reproduce or use it without written permission." },
  { title: "Professional services", text: "Any engagement for professional services is governed by a separate written agreement. Information on this site does not constitute a warranty of specific outcomes." },
  { title: "Disclaimers", text: "This site is provided as-is. We make no warranties about uptime, accuracy or fitness for any particular purpose." },
  { title: "Liability", text: "Our liability for any claims arising from your use of this site is limited to the maximum extent permitted by law." },
  { title: "Governing law", text: "These terms are governed by the laws of California. Disputes are resolved in the courts of San Francisco County." },
  { title: "Questions", text: "For questions about these terms, email legal@coratechai.com." },
];
export default function TermsPage() {
  return (
    <>
      <PageHeader label="Legal" title="Terms of Service" sub="Last updated January 2025" />
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap" style={{ maxWidth: "720px" }}>
          <p style={{ fontSize: "18px", color: "#2D3748", lineHeight: 1.85, marginBottom: "48px" }}>Please read these terms before using our website. They are written to be clear and human, not buried in legalese.</p>
          {sections.map((s, i) => (
            <div key={i} style={{ paddingBottom: "40px", marginBottom: "40px", borderBottom: i < sections.length - 1 ? "1px solid rgba(15,23,42,0.08)" : "none" }}>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "1.4rem", color: "#0A0F1E", marginBottom: "16px" }}>{s.title}</h2>
              <p style={{ fontSize: "17px", color: "#2D3748", lineHeight: 1.85 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
