"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const WA_NUM = "6281234567890";

const THEMES = [
  { id: "forest", label: "Forest – Hijau Alam", bg: "linear-gradient(135deg,#1B4332,#2d6a4f)" },
  { id: "black", label: "Dark Onyx", bg: "linear-gradient(135deg,#111,#222)" },
  { id: "luxury", label: "Luxury Gold", bg: "linear-gradient(135deg,#1a1a2e,#c9a84c)" },
  { id: "night", label: "Midnight Blue", bg: "linear-gradient(135deg,#0f172a,#1e3a5f)" },
  { id: "lemonade", label: "Fresh Light", bg: "linear-gradient(135deg,#f0fdf4,#d1fae5)" },
];

const NAV_LINKS = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#produk", label: "Produk" },
  { href: "#budidaya", label: "Budidaya" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("forest");
  const [themeLabel, setThemeLabel] = useState("Tema");

  useEffect(() => {
    const saved = localStorage.getItem("mf-theme");
    if (saved) {
      const { t, label } = JSON.parse(saved);
      document.documentElement.setAttribute("data-theme", t);
      setActiveTheme(t);
      setThemeLabel(label.split("–")[0].trim());
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setTheme = (t: string, label: string) => {
    document.documentElement.setAttribute("data-theme", t);
    setActiveTheme(t);
    setThemeLabel(label.split("–")[0].trim());
    localStorage.setItem("mf-theme", JSON.stringify({ t, label }));
    setThemeOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-black/60 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#beranda" className="flex items-center gap-3 group">
          <div className="w-9 h-9">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <ellipse cx="20" cy="15" rx="18" ry="9" fill="#4ade80" opacity=".9" />
              <ellipse cx="20" cy="13" rx="14" ry="6.5" fill="#16a34a" />
              <ellipse cx="20" cy="17" rx="13" ry="5" fill="#d1fae5" opacity=".4" />
              <rect x="18" y="17" width="4" height="19" rx="2" fill="#86efac" />
              <ellipse cx="20" cy="36" rx="6" ry="2.5" fill="#166534" opacity=".4" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-lg leading-none" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.02em" }}>
              MycoFarm
            </div>
            <div className="text-xs text-green-400 leading-none opacity-70">Malang · Est. 2019</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8 text-white/80">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative font-medium text-sm hover:text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-success after:transition-all after:duration-300 hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme dropdown */}
          <div className="relative">
            <button
              onClick={() => setThemeOpen((v) => !v)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/15 text-white/80 hover:bg-white/10 text-xs font-medium transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <span>{themeLabel}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {themeOpen && (
              <div className="absolute top-[calc(100%+12px)] right-0 bg-black/80 backdrop-blur-2xl border border-white/12 rounded-2xl p-4 w-56 z-[200]">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-3 px-2">Pilih Tema</p>
                <div className="space-y-1">
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id, t.label)}
                      className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                        activeTheme === t.id ? "bg-white/15 text-white" : "text-white/80 hover:bg-white/10"
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full flex-shrink-0 border-2 border-transparent" style={{ background: t.bg }} />
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/${WA_NUM}?text=Halo%20MycoFarm!`}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-green-500/30"
          >
            <WaIcon />
            Pesan Sekarang
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-white/80 border-b border-white/5 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WA_NUM}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-semibold"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
