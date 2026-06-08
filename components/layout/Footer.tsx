import Link from "next/link";

export function Footer() {
  const cols = [
    { heading: "What We Build", links: [["AI Automation", "/solutions/ai-automation"], ["AI Agents", "/solutions/ai-agents"], ["Enterprise Software", "/solutions/enterprise-software"], ["Data Intelligence", "/solutions/data-intelligence"], ["Compliance Systems", "/solutions/compliance-systems"], ["Cloud Infrastructure", "/solutions/cloud-infrastructure"]] },
    { heading: "Industries", links: [["Financial Services", "/industries/finance"], ["Healthcare", "/industries/healthcare"], ["Legal Services", "/industries/legal"], ["Logistics", "/industries/logistics"], ["Government", "/industries/government"], ["Education", "/industries/education"]] },
    { heading: "Company", links: [["About", "/about"], ["Why Use AI", "/why-ai"], ["Case Studies", "/case-studies"], ["Insights", "/insights"], ["Technology", "/technology"], ["Contact", "/contact"]] },
  ];

  return (
    <footer className="bg-[#0A0F1E] text-white">
      <div className="wrap pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="font-serif text-sm text-[#0A0F1E]">C</span>
              </div>
              <span className="font-medium text-[15px]">Coratech AI</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">We help businesses save time, improve their operations and grow by building AI tools that actually work.</p>
            <div className="mb-4">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/30 mb-2">Based in</p>
              <p className="text-sm text-white/60">Accra, Ghana</p>
              <p className="text-xs text-white/35 mt-1">Operations across London and beyond</p>
            </div>
            <div className="mb-4">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/30 mb-2">Contact</p>
              <a href="mailto:hello@coratechai.com" className="text-sm text-white/60 block mb-2 hover:text-white transition-colors">hello@coratechai.com</a>
              <a href="https://wa.me/233536026175" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-white/40 hover:text-[#25D366] transition-colors mb-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                +233 53 602 6175
              </a>
              <a href="https://wa.me/447832956639" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-white/40 hover:text-[#25D366] transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                +44 783 295 6639
              </a>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-white/30">Part of <span className="text-white/50 font-medium">Canmore Digital</span></p>
            </div>
          </div>
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
