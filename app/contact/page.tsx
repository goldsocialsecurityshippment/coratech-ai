"use client";
import { useState } from "react";
import { ArrowRight, Mail, Phone, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    company: "", role: "", type: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const inp: React.CSSProperties = {
    width: "100%", padding: "12px 16px", background: "white",
    border: "1px solid rgba(15,23,42,0.15)", borderRadius: "8px",
    fontSize: "16px", color: "#0A0F1E", outline: "none", fontFamily: "inherit",
  };
  const lbl: React.CSSProperties = {
    display: "block", fontSize: "13px", fontWeight: 500,
    color: "#4A5568", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section style={{ paddingTop: "144px", paddingBottom: "72px", background: "#EEF2F7", borderBottom: "1px solid rgba(15,23,42,0.08)" }}>
        <div className="wrap" style={{ maxWidth: "640px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1.5px", background: "#4A6FA5" }} />
            <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5" }}>Contact</span>
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2.4rem,4vw,3.6rem)", color: "#0A0F1E", marginBottom: "20px", lineHeight: 1.1, letterSpacing: "-0.025em" }}>Let us talk.</h1>
          <p style={{ fontSize: "18px", color: "#4A5568", lineHeight: 1.8 }}>Tell us about your organisation and what you are trying to solve. We respond within one business day.</p>
        </div>
      </section>

      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <div className="sidebar-layout" style={{ alignItems: "start" }}>

            {/* Form */}
            {status === "sent" ? (
              <div className="card" style={{ padding: "64px", textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#EEF2F7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#4A6FA5" }} />
                </div>
                <h2 style={{ fontFamily: "Georgia,serif", fontSize: "2rem", color: "#0A0F1E", marginBottom: "12px" }}>Thank you.</h2>
                <p style={{ fontSize: "17px", color: "#4A5568", lineHeight: 1.8 }}>
                  We have received your message and will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div className="grid-2">
                  <div>
                    <label style={lbl}>First name</label>
                    <input style={inp} placeholder="Your name" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} required />
                  </div>
                  <div>
                    <label style={lbl}>Last name</label>
                    <input style={inp} placeholder="Your surname" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} required />
                  </div>
                </div>

                <div>
                  <label style={lbl}>Work email</label>
                  <input type="email" style={inp} placeholder="you@yourcompany.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>

                <div className="grid-2">
                  <div>
                    <label style={lbl}>Organisation</label>
                    <input style={inp} placeholder="Your company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} required />
                  </div>
                  <div>
                    <label style={lbl}>Your role</label>
                    <input style={inp} placeholder="Your title" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label style={lbl}>What is this about?</label>
                  <select style={inp} value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} required>
                    <option value="">Choose one</option>
                    <option>AI Automation</option>
                    <option>AI Agents</option>
                    <option>Enterprise Software</option>
                    <option>Data Intelligence</option>
                    <option>Compliance Systems</option>
                    <option>Cloud Infrastructure</option>
                    <option>Digital Transformation</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={lbl}>Tell us more</label>
                  <textarea
                    style={{ ...inp, resize: "none" }}
                    rows={6}
                    placeholder="Describe what you are working on, the scale of your organisation and what you are hoping to achieve..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                {status === "error" && (
                  <div style={{ padding: "14px 18px", background: "#fff1f1", border: "1px solid #fecaca", borderRadius: "8px", fontSize: "14px", color: "#991b1b" }}>
                    Something went wrong sending your message. Please email us directly at hello@coratech.com
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      padding: "14px 28px", background: status === "sending" ? "#4A5568" : "#0A0F1E",
                      color: "white", borderRadius: "8px", fontSize: "15px", fontWeight: 600,
                      border: "none", cursor: status === "sending" ? "not-allowed" : "pointer",
                      transition: "background 0.2s",
                    }}
                  >
                    {status === "sending" ? (
                      <>Sending... <Loader2 size={15} style={{ animation: "spin 1s linear infinite" }} /></>
                    ) : (
                      <>Send Message <ArrowRight size={15} /></>
                    )}
                  </button>
                  <p style={{ fontSize: "13px", color: "#718096", marginTop: "14px" }}>
                    We typically respond within one business day. Everything you share is confidential.
                  </p>
                </div>

                <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
              </form>
            )}

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="card" style={{ padding: "28px" }}>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "17px", color: "#0A0F1E", marginBottom: "20px" }}>Reach us directly</h3>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
                  <Mail size={16} color="#4A6FA5" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <p style={{ fontSize: "13px", color: "#718096", marginBottom: "2px" }}>Email</p>
                    <a href="mailto:hello@coratech.com" style={{ fontSize: "15px", color: "#0A0F1E", fontWeight: 500 }}>hello@coratech.com</a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <Phone size={16} color="#4A6FA5" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <p style={{ fontSize: "13px", color: "#718096", marginBottom: "4px" }}>Phone</p>
                    <a href="tel:+233536026175" style={{ fontSize: "15px", color: "#0A0F1E", display: "block", marginBottom: "4px" }}>+233 53 602 6175</a>
                    <a href="tel:+447832956639" style={{ fontSize: "15px", color: "#0A0F1E", display: "block" }}>+44 783 295 6639</a>
                  </div>
                </div>
              </div>

              <div style={{ background: "#E2E8F0", borderRadius: "12px", padding: "24px" }}>
                <p style={{ fontSize: "15px", fontWeight: 500, color: "#0A0F1E", marginBottom: "16px" }}>What happens next</p>
                {[
                  "We respond within one business day",
                  "A relaxed introductory call to understand your needs",
                  "No pressure, no hard sell",
                  "Senior people involved from day one",
                ].map(item => (
                  <div key={item} style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4A6FA5", flexShrink: 0, marginTop: "8px" }} />
                    <p style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: "24px" }}>
                <p style={{ fontSize: "13px", color: "#718096", marginBottom: "6px" }}>Based in</p>
                <p style={{ fontSize: "15px", fontWeight: 500, color: "#0A0F1E", marginBottom: "2px" }}>Accra, Ghana</p>
                <p style={{ fontSize: "13px", color: "#718096" }}>Operations across London and beyond</p>
                <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid rgba(15,23,42,0.07)" }}>
                  <p style={{ fontSize: "13px", color: "#718096" }}>Part of <span style={{ fontWeight: 500, color: "#4A5568" }}>Canmore Digital</span></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
