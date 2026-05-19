"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Why Use AI", href: "/why-ai" },
  { label: "Company", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const isHome = path === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const solid = scrolled || !isHome;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${solid ? "bg-[#EEF2F7]/95 backdrop-blur-md border-b border-[#0A0F1E]/10" : "bg-transparent"}`}>
      <div className="wrap flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-300 ${solid ? "bg-[#0A0F1E]" : "bg-white"}`}>
            <span className={`font-serif text-sm transition-colors duration-300 ${solid ? "text-white" : "text-[#0A0F1E]"}`}>C</span>
          </div>
          <span className={`font-medium text-[15px] tracking-tight transition-colors duration-300 ${solid ? "text-[#0A0F1E]" : "text-white"}`}>Coratech AI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
              path.startsWith(l.href)
                ? solid ? "text-[#0A0F1E] bg-[#0A0F1E]/07 font-medium" : "text-white bg-white/15 font-medium"
                : solid ? "text-[#4A5568] hover:text-[#0A0F1E] hover:bg-[#0A0F1E]/05" : "text-white/80 hover:text-white hover:bg-white/10"
            }`}>{l.label}</Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className={`hidden lg:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${solid ? "bg-[#0A0F1E] text-white hover:bg-[#1a2744]" : "bg-white text-[#0A0F1E] hover:bg-white/90"}`}>
            Get in Touch
          </Link>
          <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-lg transition-colors ${solid ? "text-[#0A0F1E] hover:bg-[#0A0F1E]/07" : "text-white hover:bg-white/10"}`}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#EEF2F7] border-t border-[#0A0F1E]/08">
          <div className="wrap py-4 flex flex-col gap-1">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={`px-4 py-3 rounded-lg text-base transition-colors ${path.startsWith(l.href) ? "text-[#0A0F1E] bg-[#0A0F1E]/07 font-medium" : "text-[#4A5568]"}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-3 px-4 py-3 bg-[#0A0F1E] text-white rounded-lg text-base font-medium text-center">
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
