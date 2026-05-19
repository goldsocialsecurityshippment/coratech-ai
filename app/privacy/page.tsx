import { PageHeader } from "@/components/ui/shared";
export const metadata = { title: "Privacy Policy" };
const sections = [
  { title: "What we collect", text: "We collect information you provide directly, including when you fill out our contact form or reach out by email. This includes your name, email address, company and any details you include in your messages. We also collect standard web analytics data like page visits and browser type." },
  { title: "How we use it", text: "We use your information to respond to enquiries, provide our services and improve our website. We do not sell your information to third parties or use it for purposes unrelated to our work with you." },
  { title: "Data security", text: "We take security seriously. All data is encrypted in transit and at rest. We maintain strict access controls and conduct regular security reviews. No system is completely immune to risk but we work hard to minimise it." },
  { title: "Your rights", text: "Depending on where you are, you may have rights to access, correct or delete your personal information. To exercise any of these rights, email us at privacy@coratechai.com and we will respond within 30 days." },
  { title: "Cookies", text: "We use cookies for basic analytics. You can control these through your browser settings. Disabling cookies may affect some features of the site." },
  { title: "Get in touch", text: "If you have questions about how we handle your data, email privacy@coratechai.com or write to us at Coratech AI, 50 California Street, Suite 1500, San Francisco, CA 94111." },
];
export default function PrivacyPage() {
  return (
    <>
      <PageHeader label="Legal" title="Privacy Policy" sub="Last updated January 2025" />
      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap" style={{ maxWidth: "720px" }}>
          <p style={{ fontSize: "18px", color: "#2D3748", lineHeight: 1.85, marginBottom: "48px" }}>We are straightforward about privacy. Here is what we collect, how we use it and what your rights are.</p>
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
