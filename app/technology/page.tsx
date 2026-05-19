import { PageHeader, CTA, Label } from "@/components/ui/shared";

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

      {/* AI Capabilities */}
      <section className="py-16 md:py-24 bg-[#0A0F1E]">
        <div className="wrap">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#6B8FBF]" />
            <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#6B8FBF]">AI Capabilities</span>
          </div>
          <h2 className="text-2xl md:text-4xl text-white mb-10">Advanced AI, applied to enterprise problems.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Foundation model integration", text: "We work with GPT-4, Claude, Gemini and open-source models. We handle prompt engineering, rate management, cost optimisation and enterprise security." },
              { title: "Custom model development", text: "For use cases where general models fall short, we fine-tune models on your domain data. Legal, medical and financial domains all benefit from this approach." },
              { title: "Multi-agent systems", text: "We build and deploy agent frameworks that coordinate across your enterprise systems to complete complex, multi-step tasks." },
              { title: "Retrieval and knowledge systems", text: "We connect AI to your organisation's knowledge using retrieval-augmented generation, so answers are accurate and traceable back to sources." },
              { title: "Document intelligence", text: "Reading, understanding and extracting information from complex documents at scale. Works across structured and unstructured formats." },
              { title: "AI observability", text: "Production monitoring, evaluation pipelines and drift detection so your AI systems stay accurate and reliable over time." },
            ].map(cap => (
              <div key={cap.title} className="border border-white/10 rounded-xl p-6">
                <h3 className="font-serif text-lg text-white mb-3">{cap.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{cap.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 md:py-24 bg-[#EEF2F7]">
        <div className="wrap">
          <Label>Technology Stack</Label>
          <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-10">Built on proven tools.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stack.map(s => (
              <div key={s.cat} className="card p-6">
                <h3 className="font-serif text-lg text-[#0A0F1E] mb-4">{s.cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map(item => (
                    <span key={item} className="px-2.5 py-1 bg-[#EEF2F7] rounded text-xs text-[#4A5568]">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 md:py-24 bg-[#E2E8F0]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Label>Security</Label>
              <h2 className="text-2xl md:text-4xl text-[#0A0F1E] mb-5">Security built in from the start.</h2>
              <p className="text-base md:text-lg text-[#2D3748] leading-relaxed">Security is not something we add at the end. We design for it from the first architecture decision. Every system we build reflects the sensitivity of the environment it will run in.</p>
            </div>
            <div className="flex flex-col gap-3">
              {["SOC 2 Type II Certified", "ISO 27001 Compliant", "HIPAA Compliant", "GDPR Ready", "FedRAMP Authorised", "Zero trust architecture on all deployments", "End to end encryption in transit and at rest", "Full audit logging and immutable trail"].map(item => (
                <div key={item} className="flex gap-3 items-center px-4 py-3 bg-white rounded-lg border border-[#0A0F1E]/06">
                  <div className="w-2 h-2 rounded-full bg-[#4A6FA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#2D3748]">{item}</span>
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
