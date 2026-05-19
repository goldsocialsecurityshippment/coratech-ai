import Link from "next/link";

export function Footer() {
  const cols = [
    { heading: "Solutions", links: [["AI Automation", "/solutions/ai-automation"], ["AI Agents", "/solutions/ai-agents"], ["Enterprise Software", "/solutions/enterprise-software"], ["Data Intelligence", "/solutions/data-intelligence"], ["Compliance Systems", "/solutions/compliance-systems"], ["Cloud Infrastructure", "/solutions/cloud-infrastructure"]] },
    { heading: "Industries", links: [["Financial Services", "/industries/finance"], ["Healthcare", "/industries/healthcare"], ["Legal Services", "/industries/legal"], ["Logistics", "/industries/logistics"], ["Government", "/industries/government"], ["Education", "/industries/education"]] },
    { heading: "Company", links: [["About", "/about"], ["Why Use AI", "/why-ai"], ["Case Studies", "/case-studies"], ["Insights", "/insights"], ["Technology", "/technology"], ["Contact", "/contact"]] },
  ];

  return (
    <footer className="bg-[#0A0F1E] text-white">
      <div className="wrap pt-14 pb-10 md:pt-20 md:pb-14">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="font-serif text-sm text-[#0A0F1E]">C</span>
              </div>
              <span className="font-medium text-[15px]">Coratech AI</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">Enterprise AI and technology infrastructure for organisations that cannot afford to get it wrong.</p>
            <div className="mb-4">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/30 mb-2">Based in</p>
              <p className="text-sm text-white/60">Accra, Ghana</p>
              <p className="text-xs text-white/35 mt-1">Operations across London and beyond</p>
            </div>
            <div className="mb-4">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/30 mb-2">Contact</p>
              <a href="mailto:hello@coratech.com" className="text-sm text-white/60 block mb-1 hover:text-white transition-colors">hello@coratech.com</a>
              <p className="text-xs text-white/40">+233 53 602 6175</p>
              <p className="text-xs text-white/40">+44 783 295 6639</p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-white/30">Part of <span className="text-white/50 font-medium">Canmore Digital</span></p>
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.heading}>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/30 mb-5">{col.heading}</p>
              <div className="flex flex-col gap-3">
                {col.links.map(([label, href]) => (
                  <Link key={href} href={href} className="text-sm text-white/55 hover:text-white transition-colors">{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center sm:text-left">© {new Date().getFullYear()} Coratech AI. Part of Canmore Digital. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
