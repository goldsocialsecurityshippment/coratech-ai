"use client";
import { useState } from "react";
import { ArrowRight, Mail, Phone, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", role: "", type: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  };

  const inp = "w-full px-4 py-3 bg-white border border-[#0A0F1E]/15 rounded-lg text-base text-[#0A0F1E] outline-none focus:border-[#4A6FA5] focus:ring-1 focus:ring-[#4A6FA5] transition-colors font-sans";
  const lbl = "block text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2";

  return (
    <>
      <section className="pt-28 md:pt-40 pb-12 md:pb-16 bg-[#EEF2F7] border-b border-[#0A0F1E]/08">
        <div className="wrap max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#4A6FA5]" />
            <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#4A6FA5]">Contact</span>
          </div>
          <h1 className="text-3xl md:text-5xl text-[#0A0F1E] mb-5">Let us talk.</h1>
          <p className="text-base md:text-lg text-[#4A5568] leading-relaxed">Tell us about your organisation and what you are trying to solve. We respond within one business day.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">

            {/* Form */}
            {status === "sent" ? (
              <div className="card p-10 md:p-16 text-center">
                <div className="w-14 h-14 rounded-full bg-[#EEF2F7] flex items-center justify-center mx-auto mb-6">
                  <div className="w-5 h-5 rounded-full bg-[#4A6FA5]" />
                </div>
                <h2 className="font-serif text-3xl text-[#0A0F1E] mb-3">Thank you.</h2>
                <p className="text-base text-[#4A5568] leading-relaxed">We have received your message and will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className={lbl}>First name</label><input className={inp} placeholder="Your name" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} required /></div>
                  <div><label className={lbl}>Last name</label><input className={inp} placeholder="Your surname" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} required /></div>
                </div>
                <div><label className={lbl}>Work email</label><input type="email" className={inp} placeholder="you@yourcompany.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required /></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className={lbl}>Organisation</label><input className={inp} placeholder="Your company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} required /></div>
                  <div><label className={lbl}>Your role</label><input className={inp} placeholder="Your title" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} /></div>
                </div>
                <div>
                  <label className={lbl}>What is this about?</label>
                  <select className={inp} value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} required>
                    <option value="">Choose one</option>
                    <option>AI Automation</option><option>AI Agents</option><option>Enterprise Software</option>
                    <option>Data Intelligence</option><option>Compliance Systems</option><option>Cloud Infrastructure</option>
                    <option>Digital Transformation</option><option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className={lbl}>Tell us more</label>
                  <textarea className={`${inp} resize-none`} rows={5} placeholder="Describe what you are working on and what you are hoping to achieve..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                </div>
                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">Something went wrong. Please email us directly at hello@coratech.com</div>
                )}
                <div>
                  <button type="submit" disabled={status === "sending"} className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold transition-all ${status === "sending" ? "bg-[#4A5568] cursor-not-allowed" : "bg-[#0A0F1E] hover:bg-[#1a2744]"} text-white`}>
                    {status === "sending" ? <><Loader2 size={15} className="animate-spin" /> Sending...</> : <>Send Message <ArrowRight size={15} /></>}
                  </button>
                  <p className="text-xs text-[#718096] mt-3">We typically respond within one business day. Everything you share is confidential.</p>
                </div>
              </form>
            )}

            {/* Sidebar */}
            <div className="flex flex-col gap-4">
              <div className="card p-6">
                <h3 className="font-serif text-lg text-[#0A0F1E] mb-5">Reach us directly</h3>
                <div className="flex gap-3 items-start mb-4">
                  <Mail size={16} className="text-[#4A6FA5] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#718096] mb-1">Email</p>
                    <a href="mailto:hello@coratech.com" className="text-base font-medium text-[#0A0F1E] hover:text-[#4A6FA5] transition-colors">hello@coratech.com</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone size={16} className="text-[#4A6FA5] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#718096] mb-1">Phone</p>
                    <a href="tel:+233536026175" className="text-base text-[#0A0F1E] block mb-1">+233 53 602 6175</a>
                    <a href="tel:+447832956639" className="text-base text-[#0A0F1E] block">+44 783 295 6639</a>
                  </div>
                </div>
              </div>

              <div className="bg-[#E2E8F0] rounded-xl p-5">
                <p className="text-sm font-semibold text-[#0A0F1E] mb-3">What happens next</p>
                {["We respond within one business day", "A relaxed introductory call", "No pressure, no hard sell", "Senior people from day one"].map(item => (
                  <div key={item} className="flex gap-2.5 mb-3 last:mb-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4A6FA5] flex-shrink-0 mt-1.5" />
                    <p className="text-sm text-[#4A5568]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="card p-5">
                <p className="text-xs text-[#718096] mb-1">Based in</p>
                <p className="text-base font-medium text-[#0A0F1E] mb-0.5">Accra, Ghana</p>
                <p className="text-sm text-[#718096] mb-3">Operations across London and beyond</p>
                <div className="pt-3 border-t border-[#0A0F1E]/07">
                  <p className="text-xs text-[#718096]">Part of <span className="font-medium text-[#4A5568]">Canmore Digital</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
