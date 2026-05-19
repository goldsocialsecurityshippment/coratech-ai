import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/ui/shared";
import { teamMembers, values } from "@/lib/data";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "clamp(100px,12vw,144px)", paddingBottom: "clamp(48px,6vw,80px)", overflow: "hidden" }}>
        <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80&auto=format&fit=crop" alt="Modern office" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.78)" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 1, maxWidth: "760px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1.5px", background: "#6B8FBF" }} />
            <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B8FBF" }}>Company</span>
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(2.4rem,4.5vw,4rem)", color: "white", marginBottom: "24px", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
            We build the infrastructure that makes enterprises more capable.
          </h1>
          <p style={{ fontSize: "19px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
            Coratech AI is an enterprise technology company founded in Accra, Ghana, with operations across London and beyond. Part of Canmore Digital.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <div className="flex-col-mobile" style={{ alignItems:"start" }}>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "16px" }}>Mission</p>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#0A0F1E", marginBottom: "24px", lineHeight: 1.2 }}>Making complex organisations operate better.</h2>
              <p style={{ fontSize: "18px", color: "#2D3748", lineHeight: 1.85, marginBottom: "20px" }}>
                The organisations that shape the world — financial institutions, healthcare networks, government agencies, logistics operators — operate at a scale and complexity that demands technology designed specifically for them. We build that technology.
              </p>
              <p style={{ fontSize: "18px", color: "#2D3748", lineHeight: 1.85 }}>
                We work with a small number of clients at a time because deep relationships produce better outcomes. We invest in understanding how an organisation actually works before we write a line of code.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { title: "Our philosophy", text: "Enterprise technology should be built for longevity, not novelty. We prioritise reliability and maintainability above everything else." },
                { title: "Our approach", text: "We spend time with clients before we propose anything. We want to understand the actual problem, not just the brief." },
                { title: "Our commitment", text: "The systems we build run critical operations. We accept that responsibility and design accordingly." },
              ].map(item => (
                <div key={item.title} style={{ borderLeft: "3px solid #4A6FA5", paddingLeft: "24px" }}>
                  <h3 style={{ fontFamily: "Georgia,serif", fontSize: "18px", color: "#0A0F1E", marginBottom: "10px" }}>{item.title}</h3>
                  <p style={{ fontSize: "16px", color: "#4A5568", lineHeight: 1.8 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ position: "relative", padding: "clamp(56px,8vw,96px) 0", overflow: "hidden" }}>
        <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80&auto=format&fit=crop" alt="Team collaboration" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.82)" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "white", lineHeight: 1.6, fontStyle: "italic" }}>
            "A world in which every complex organisation operates with the precision, speed and intelligence that their missions require."
          </p>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.4)", marginTop: "24px" }}>Our vision</p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#E2E8F0" }}>
        <div className="wrap">
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "12px" }}>Our Values</p>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#0A0F1E", marginBottom: "48px", lineHeight: 1.2 }}>What we stand for.</h2>
          <div className="grid-3">
            {values.map(v => (
              <div key={v.title} className="card" style={{ padding: "28px" }}>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "17px", color: "#0A0F1E", marginBottom: "12px" }}>{v.title}</h3>
                <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.8 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "12px" }}>Leadership</p>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#0A0F1E", marginBottom: "48px", lineHeight: 1.2 }}>The people who founded Coratech AI.</h2>
          <div className="grid-2" style={{ maxWidth: "860px" }}>
            {teamMembers.map(m => (
              <div key={m.name} className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", height: "300px" }}>
                  <Image src={(m as any).photo} alt={m.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                </div>
                <div style={{ padding: "28px" }}>
                  <h3 style={{ fontFamily: "Georgia,serif", fontSize: "20px", color: "#0A0F1E", marginBottom: "4px" }}>{m.name}</h3>
                  <p style={{ fontSize: "14px", color: "#4A6FA5", fontWeight: 500, marginBottom: "16px" }}>{m.title}</p>
                  <p style={{ fontSize: "16px", color: "#4A5568", lineHeight: 1.8 }}>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Coratech AI */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "#0A0F1E" }}>
        <div className="wrap">
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B8FBF", marginBottom: "12px" }}>Why Choose Coratech AI</p>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "white", marginBottom: "48px", lineHeight: 1.2 }}>
            Why organisations choose to work with us.
          </h2>
          <div className="grid-2">
            {[
              {
                title: "We build for the long term",
                text: "We do not optimise for impressive demos. We build systems that work reliably, scale properly and are maintainable years down the line. Our clients come back to us because what we build does not break.",
              },
              {
                title: "We are honest about what is possible",
                text: "AI is genuinely powerful but it is not magic. We tell clients what is realistic, what the risks are and what it will actually take. If we do not think we can help you, we will say so.",
              },
              {
                title: "We know enterprise environments",
                text: "We have built production AI systems for banks, hospitals, law firms and logistics companies. We understand the compliance requirements, the security standards and the organisational complexity that comes with enterprise work.",
              },
              {
                title: "We stay involved",
                text: "We do not hand over a system and disappear. We stay close through deployment, optimisation and the inevitable changes that come after go-live. Our relationship with clients is long-term by design.",
              },
              {
                title: "Senior people work on your project",
                text: "You will not be handed off to junior consultants after the sales process. The people you speak with at the start are the people who do the work.",
              },
              {
                title: "We bring African enterprise perspective",
                text: "Founded in Ghana, we understand the specific challenges, opportunities and contexts of building enterprise technology for African markets — and we bring that understanding to every engagement.",
              },
            ].map(item => (
              <div key={item.title} style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "28px" }}>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "17px", color: "white", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canmore Digital note */}
      <section style={{ padding: "48px 0", background: "#E2E8F0", borderTop: "1px solid rgba(15,23,42,0.07)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "16px", color: "#4A5568" }}>
            Coratech AI is part of <span style={{ fontWeight: 600, color: "#0A0F1E" }}>Canmore Digital</span> — a technology group building the digital infrastructure of the future.
          </p>
        </div>
      </section>

      <CTA title="Want to work with us?" sub="Get in touch and let us have a straightforward conversation about what you need." btn="Get in Touch" href="/contact" dark />
    </>
  );
}
