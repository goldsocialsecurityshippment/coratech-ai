import { PageHeader, CTA } from "@/components/ui/shared";

export const metadata = { title: "Technology" };

const stack = [
  { cat: "AI and Machine Learning", items: ["GPT-4 and Claude", "LangChain and LangGraph", "AutoGen", "Hugging Face", "PyTorch", "scikit-learn"] },
  { cat: "Data Infrastructure", items: ["Snowflake", "dbt", "Apache Kafka", "Apache Airflow", "Databricks", "Fivetran"] },
  { cat: "Cloud and Infrastructure", items: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Terraform", "Docker"] },
  { cat: "Application Development", items: ["Next.js", "Node.js", "Go", "Python", "PostgreSQL", "GraphQL"] },
  { cat: "Security and Compliance", items: ["Vault", "Okta", "AWS GovCloud", "OpenPolicyAgent", "Sentry"] },
  { cat: "Observability", items: ["Datadog", "Prometheus", "Grafana", "PagerDuty", "OpenTelemetry"] },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHeader label="Technology" title="The tools and capabilities behind what we build." sub="We choose our technologies carefully. Proven tools, strong communities and long-term reliability matter more than novelty." />

      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#0A0F1E" }}>
        <div className="wrap">
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B8FBF", marginBottom: "32px" }}>AI Capabilities</p>
          <div className="grid-3">
            {[
              { title: "Foundation model integration", text: "We work with GPT-4, Claude, Gemini and open-source models. We handle prompt engineering, rate management, cost optimisation and enterprise security." },
              { title: "Custom model development", text: "For use cases where general models fall short, we fine-tune models on your domain data. Legal, medical and financial domains all benefit from this approach." },
              { title: "Multi-agent systems", text: "We build and deploy agent frameworks that coordinate across your enterprise systems to complete complex, multi-step tasks." },
              { title: "Retrieval and knowledge systems", text: "We connect AI to your organisation's knowledge using retrieval-augmented generation, so answers are accurate and traceable back to sources." },
              { title: "Document intelligence", text: "Reading, understanding and extracting information from complex documents at scale. Works across structured and unstructured formats." },
              { title: "AI observability", text: "Production monitoring, evaluation pipelines and drift detection so your AI systems stay accurate and reliable over time." },
            ].map(cap => (
              <div key={cap.title} style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "28px" }}>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "17px", color: "white", marginBottom: "12px" }}>{cap.title}</h3>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{cap.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#EEF2F7" }}>
        <div className="wrap">
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "32px" }}>Technology Stack</p>
          <div className="grid-3">
            {stack.map(s => (
              <div key={s.cat} style={{ background: "white", borderRadius: "12px", border: "1px solid rgba(15,23,42,0.06)", padding: "28px" }}>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "17px", color: "#0A0F1E", marginBottom: "16px" }}>{s.cat}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {s.items.map(item => (
                    <span key={item} style={{ padding: "5px 12px", background: "#EEF2F7", borderRadius: "6px", fontSize: "13px", color: "#4A5568" }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(48px,7vw,80px) 0", background: "#E2E8F0" }}>
        <div className="wrap">
          <div className="flex-col-mobile" style={{ alignItems:"start" }}>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A6FA5", marginBottom: "16px" }}>Security</p>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#0A0F1E", marginBottom: "20px", lineHeight: 1.2 }}>Security built in from the start.</h2>
              <p style={{ fontSize: "17px", color: "#2D3748", lineHeight: 1.85 }}>Security is not something we add at the end. We design for it from the first architecture decision. Every system we build reflects the sensitivity of the environment it will run in.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["SOC 2 Type II Certified", "ISO 27001 Compliant", "HIPAA Compliant", "GDPR Ready", "FedRAMP Authorised", "Zero trust architecture on all deployments", "End to end encryption in transit and at rest", "Full audit logging and immutable trail"].map(item => (
                <div key={item} style={{ display: "flex", gap: "12px", alignItems: "center", padding: "14px 18px", background: "white", borderRadius: "8px", border: "1px solid rgba(15,23,42,0.06)" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4A6FA5", flexShrink: 0 }} />
                  <span style={{ fontSize: "15px", color: "#2D3748", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA title="Want to talk about technical requirements?" sub="Our engineering team can review your current setup and tell you honestly where we can help." btn="Get in Touch" href="/contact" dark />
    </>
  );
}
