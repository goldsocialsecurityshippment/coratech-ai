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
            <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#4A6FA5]">Get in Touch</span>
          </div>
          <h1 className="text-3xl md:text-5xl text-[#0A0F1E] mb-5">Let us talk.</h1>
          <p className="text-base md:text-lg text-[#4A5568] leading-relaxed">Tell us what your business is trying to solve. We will get back to you within one working day.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
            {status === "sent" ? (
              <div className="card p-10 md:p-16 text-center">
                <div className="w-14 h-14 rounded-full bg-[#EEF2F7] flex items-center justify-center mx-auto mb-6">
                  <div className="w-5 h-5 rounded-full bg-[#4A6FA5]" />
                </div>
                <h2 className="font-serif text-3xl text-[#0A0F1E] mb-3">Message received.</h2>
                <p className="text-base text-[#4A5568] leading-relaxed">We will be in touch within one working day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className={lbl}>First name</label><input className={inp} placeholder="Your name" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} required /></div>
                  <div><label className={lbl}>Last name</label><input className={inp} placeholder="Your surname" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} required /></div>
                </div>
                <div><label className={lbl}>Work email</label><input type="email" className={inp} placeholder="you@yourcompany.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required /></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className={lbl}>Company</label><input className={inp} placeholder="Your company name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} required /></div>
                  <div><label className={lbl}>Your role</label><input className={inp} placeholder="Your job title" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} /></div>
                </div>
                <div>
                  <label className={lbl}>What do you need help with?</label>
                  <select className={inp} value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} required>
                    <option value="">Choose one</option>
                    <option>AI Automation</option><option>AI Agents</option><option>Enterprise Software</option>
                    <option>Data Intelligence</option><option>Compliance Systems</option><option>Cloud Infrastructure</option>
                    <option>Digital Transformation</option><option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className={lbl}>Tell us more</label>
                  <textarea className={`${inp} resize-none`} rows={5} placeholder="Give us some context. What does your business do, what is the problem you are trying to fix and what would a good result look like for you?" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                </div>
                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">Something went wrong sending the form. You can email us directly at hello@coratechai.com</div>
                )}
                <div>
                  <button type="submit" disabled={status === "sending"} className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold transition-all ${status === "sending" ? "bg-[#4A5568] cursor-not-allowed" : "bg-[#0A0F1E] hover:bg-[#1a2744]"} text-white`}>
                    {status === "sending" ? <><Loader2 size={15} className="animate-spin" /> Sending...</> : <>Send Message <ArrowRight size={15} /></>}
                  </button>
                  <p className="text-xs text-[#718096] mt-3">We usually respond within one working day. Everything you share stays confidential.</p>
                </div>
              </form>
            )}

            <div className="flex flex-col gap-4">
              <div className="card p-6">
                <h3 className="font-serif text-lg text-[#0A0F1E] mb-5">Other ways to reach us</h3>
                <div className="flex gap-3 items-start mb-5">
                  <Mail size={16} className="text-[#4A6FA5] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#718096] mb-1">Email</p>
                    <a href="mailto:hello@coratechai.com" className="text-base font-medium text-[#0A0F1E] hover:text-[#4A6FA5] transition-colors">hello@coratechai.com</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone size={16} className="text-[#4A6FA5] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#718096] mb-2">Phone / WhatsApp</p>
                    <a href="https://wa.me/233536026175" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base text-[#0A0F1E] hover:text-[#25D366] transition-colors mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      +233 53 602 6175
                    </a>
                    <a href="https://wa.me/447832956639" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base text-[#0A0F1E] hover:text-[#25D366] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      +44 783 295 6639
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#E2E8F0] rounded-xl p-5">
                <p className="text-sm font-semibold text-[#0A0F1E] mb-3">What to expect</p>
                {["We respond within one working day", "A short call to understand your situation", "No pressure, no pitch decks", "Honest advice from the start"].map(item => (
                  <div key={item} className="flex gap-2.5 mb-3 last:mb-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4A6FA5] flex-shrink-0 mt-1.5" />
                    <p className="text-sm text-[#4A5568]">{item}</p>
                  </div>
                ))}
              </div>
              <div className="card p-5">
                <p className="text-xs text-[#718096] mb-1">Where we are based</p>
                <p className="text-base font-medium text-[#0A0F1E] mb-0.5">Accra, Ghana</p>
                <p className="text-sm text-[#718096] mb-3">With operations across London and beyond</p>
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
