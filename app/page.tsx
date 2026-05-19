import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { solutions, industries, caseStudies, insights } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85&auto=format&fit=crop" alt="Modern office building" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,15,30,0.9) 0%, rgba(10,15,30,0.7) 60%, rgba(10,15,30,0.85) 100%)" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 1, paddingTop: "clamp(80px,10vw,120px)", paddingBottom: "clamp(80px,10vw,120px)" }}>
          <div style={{ maxWidth: "800px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <div style={{ width: "32px", height: "1.5px", background: "#6B8FBF" }} />
              <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B8FBF" }}>Enterprise AI Infrastructure</span>
            </div>
            <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2.8rem,5.5vw,5rem)", color: "white", lineHeight: 1.08, letterSpacing: "-0.025em", marginBottom: "28px" }}>
              Built for organisations<br />
              <span style={{ color: "rgba(255,255,255,0.55)" }}>that cannot afford</span><br />
              to get it wrong.
            </h1>
            <p style={{ fontSize: "19px", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: "520px", marginBottom: "48px" }}>
              We build AI systems, automation platforms and digital infrastructure for enterprises in finance, healthcare, logistics, legal and many more.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", background: "white", color: "#0A0F1E", borderRadius: "8px", fontSize: "15px", fontWeight: 600 }}>Talk to Us <ArrowRight size={15} /></Link>
              <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", border: "1px solid rgba(255,255,255,0.3)", color: "white", borderRadius: "8px", fontSize: "15px", fontWeight: 500 }}>See Our Work</Link>
            </div>
          </div>
          <div style={{ marginTop: "80px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "rgba(255,255,255,0.1)", borderRadius: "12px", overflow: "hidden", maxWidth: "800px" }}>
            {[["47+", "Enterprise clients"], ["12B+", "Records processed yearly"], ["99.99%", "Uptime SLA"], ["9", "Industries served"]].map(([m, l]) => (
              <div key={l} style={{ padding: "28px", background: "rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "2rem", color: "white", marginBottom: "4px" }}>{m}</div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#EEF2F7", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
        <div className="wrap">
          <div className="flex-col-mobile" style={{ alignItems:"center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "28px", height: "1.5px", background: "#4A6FA5" }} />
                <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5" }}>What We Do</span>
              </div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,3.5vw,3rem)", color: "#0A0F1E", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "24px" }}>AI built for real enterprise environments.</h2>
              <p style={{ fontSize: "18px", color: "#2D3748", lineHeight: 1.85, marginBottom: "20px" }}>Coratech AI is an enterprise technology company. We build the systems that let complex organisations operate with more speed, accuracy and confidence.</p>
              <p style={{ fontSize: "18px", color: "#2D3748", lineHeight: 1.85, marginBottom: "32px" }}>Our work spans AI automation, data platforms, compliance systems, cloud infrastructure and digital transformation across financial services, healthcare, law, logistics and government.</p>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 500, color: "#0A0F1E", borderBottom: "1.5px solid #0A0F1E", paddingBottom: "2px" }}>About Coratech AI <ArrowRight size={14} /></Link>
            </div>
            <div style={{ position: "relative", height: "480px", borderRadius: "16px", overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop" alt="Modern enterprise workspace" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#E8EDF5" }}>
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "28px", height: "1.5px", background: "#4A6FA5" }} />
                <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5" }}>Solutions</span>
              </div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#0A0F1E", lineHeight: 1.2 }}>Everything you need in one place.</h2>
            </div>
            <Link href="/solutions" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "15px", color: "#4A5568", fontWeight: 500 }}>All solutions <ArrowRight size={14} /></Link>
          </div>
          <div className="grid-3">
            {solutions.slice(0, 6).map(s => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="card" style={{ display: "block", padding: "28px" }}>
                <div style={{ fontSize: "24px", color: "#4A6FA5", marginBottom: "16px" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "17px", color: "#0A0F1E", marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.65, marginBottom: "20px" }}>{s.tagline}</p>
                <span style={{ fontSize: "13px", fontWeight: 500, color: "#4A6FA5", display: "flex", alignItems: "center", gap: "4px" }}>Learn more <ArrowRight size={13} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries with images */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "28px", height: "1.5px", background: "#4A6FA5" }} />
                <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5" }}>Industries</span>
              </div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#0A0F1E", lineHeight: 1.2 }}>We know your sector.</h2>
            </div>
            <Link href="/industries" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "15px", color: "#4A5568", fontWeight: 500 }}>All industries <ArrowRight size={14} /></Link>
          </div>
          <div className="grid-3">
            {industries.slice(0, 6).map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="card" style={{ display: "block", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "180px" }}>
                  <Image src={(ind as any).image} alt={ind.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.38)" }} />
                  <div style={{ position: "absolute", bottom: "14px", left: "16px" }}>
                    <span style={{ fontFamily: "Georgia,serif", fontSize: "15px", color: "white", fontWeight: 400 }}>{ind.title}</span>
                  </div>
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <p style={{ fontSize: "13px", color: "#4A6FA5", fontWeight: 500, marginBottom: "8px" }}>{ind.subtitle}</p>
                  <p style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.65 }}>{ind.description.substring(0, 90)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#0A0F1E" }}>
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "28px", height: "1.5px", background: "#6B8FBF" }} />
                <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B8FBF" }}>Case Studies</span>
              </div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "white", lineHeight: 1.2 }}>Real results for real clients.</h2>
            </div>
            <Link href="/case-studies" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "15px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>All case studies <ArrowRight size={14} /></Link>
          </div>
          <div className="grid-2">
            {caseStudies.slice(0, 2).map(cs => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card-dark" style={{ display: "block", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "200px" }}>
                  <Image src={(cs as any).image} alt={cs.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.55)" }} />
                  <div style={{ position: "absolute", bottom: "16px", left: "20px" }}>
                    <span style={{ padding: "4px 12px", background: "rgba(255,255,255,0.15)", borderRadius: "20px", fontSize: "12px", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)" }}>{cs.industry}</span>
                  </div>
                </div>
                <div style={{ padding: "28px" }}>
                  <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B8FBF", marginBottom: "10px" }}>{cs.client}</p>
                  <h3 style={{ fontFamily: "Georgia,serif", fontSize: "19px", color: "white", lineHeight: 1.3, marginBottom: "12px" }}>{cs.title}</h3>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: "24px" }}>{cs.summary}</p>
                  <div className="grid-2">
                    {cs.outcomes.slice(0, 2).map((o, i) => (
                      <div key={i} style={{ borderLeft: "2px solid rgba(107,143,191,0.5)", paddingLeft: "14px" }}>
                        <div style={{ fontFamily: "Georgia,serif", fontSize: "1.8rem", color: "white", lineHeight: 1 }}>{o.metric}</div>
                        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>{o.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#EEF2F7", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "28px", height: "1.5px", background: "#4A6FA5" }} />
                <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5" }}>Insights</span>
              </div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#0A0F1E", lineHeight: 1.2 }}>What we are thinking about.</h2>
            </div>
            <Link href="/insights" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "15px", color: "#4A5568", fontWeight: 500 }}>All insights <ArrowRight size={14} /></Link>
          </div>
          <div className="grid-3">
            {insights.slice(0, 3).map(a => (
              <Link key={a.slug} href={`/insights/${a.slug}`} className="card" style={{ display: "block", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "160px" }}>
                  <Image src={(a as any).image} alt={a.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.3)" }} />
                  <div style={{ position: "absolute", top: "14px", left: "14px" }}>
                    <span style={{ padding: "3px 10px", background: "rgba(255,255,255,0.92)", borderRadius: "20px", fontSize: "12px", color: "#4A6FA5", fontWeight: 500 }}>{a.category}</span>
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <p style={{ fontSize: "13px", color: "#718096", marginBottom: "10px" }}>{a.date}</p>
                  <h3 style={{ fontFamily: "Georgia,serif", fontSize: "16px", color: "#0A0F1E", lineHeight: 1.4, marginBottom: "10px" }}>{a.title}</h3>
                  <p style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.7, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ padding: "56px 0", background: "#E2E8F0" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#718096", marginBottom: "32px" }}>Compliance and Certifications</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
            {["SOC 2 Type II", "ISO 27001", "HIPAA", "GDPR Ready", "FedRAMP", "99.99% Uptime SLA"].map(item => (
              <div key={item} style={{ fontSize: "14px", fontWeight: 500, color: "#2D3748" }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#0A0F1E" }}>
        <div className="wrap" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2rem,3.5vw,3rem)", color: "white", marginBottom: "20px", lineHeight: 1.2 }}>Ready to get started?</h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)", marginBottom: "40px", lineHeight: 1.8 }}>Tell us about your organisation and what you are trying to solve. We will take it from there.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", background: "white", color: "#0A0F1E", borderRadius: "8px", fontSize: "15px", fontWeight: 600 }}>Get in Touch <ArrowRight size={15} /></Link>
            <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", border: "1px solid rgba(255,255,255,0.2)", color: "white", borderRadius: "8px", fontSize: "15px", fontWeight: 500 }}>See Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
