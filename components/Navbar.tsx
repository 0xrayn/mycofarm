"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WA_NUM = "6281234567890";

const THEMES = [
  { id: "forest",   label: "Forest – Hijau Alam",  bg: "linear-gradient(135deg,#1B4332,#2d6a4f)" },
  { id: "black",    label: "Dark Onyx",             bg: "linear-gradient(135deg,#111,#222)" },
  { id: "luxury",   label: "Luxury Gold",           bg: "linear-gradient(135deg,#1a1a2e,#c9a84c)" },
  { id: "night",    label: "Midnight Blue",         bg: "linear-gradient(135deg,#0f172a,#1e3a5f)" },
  { id: "lemonade", label: "Fresh Light",           bg: "linear-gradient(135deg,#f0fdf4,#d1fae5)" },
];

// Each item has a page route AND a home-page section id
const NAV_ITEMS = [
  { href: "/",                sectionId: "beranda",   label: "Beranda" },
  { href: "/tentang",         sectionId: "tentang",   label: "Tentang Kami" },
  { href: "/produk",          sectionId: "produk",    label: "Produk" },
  { href: "/proses-budidaya", sectionId: "budidaya",  label: "Proses Budidaya" },
  { href: "/galeri",          sectionId: "galeri",    label: "Galeri" },
  { href: "/kontak",          sectionId: "kontak",    label: "Kontak" },
];

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("forest");
  const [themeLabel, setThemeLabel] = useState("Tema");

  const isLightTheme = activeTheme === "lemonade";

  useEffect(() => {
    const saved = localStorage.getItem("mf-theme");
    if (saved) {
      try {
        const { t, label } = JSON.parse(saved);
        document.documentElement.setAttribute("data-theme", t);
        setActiveTheme(t);
        setThemeLabel(label.split("–")[0].trim());
      } catch {}
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close theme dropdown when clicking outside
  useEffect(() => {
    if (!themeOpen) return;
    const close = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-theme-dd]")) setThemeOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [themeOpen]);

  const applyTheme = (t: string, label: string) => {
    document.documentElement.setAttribute("data-theme", t);
    setActiveTheme(t);
    setThemeLabel(label.split("–")[0].trim());
    localStorage.setItem("mf-theme", JSON.stringify({ t, label }));
    setThemeOpen(false);
  };

  // Smart nav handler: scroll to section on home, let Link navigate on other pages
  const handleNavClick = useCallback(
    (e: React.MouseEvent, item: typeof NAV_ITEMS[0]) => {
      setMobileOpen(false);
      if (isHome) {
        e.preventDefault();
        if (item.sectionId === "beranda") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(item.sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }
      // On sub-pages: let Next.js handle navigation normally
    },
    [isHome]
  );

  const isActive = (item: typeof NAV_ITEMS[0]) => {
    if (isHome) return false;
    return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  };

  // Navbar background: transparent on hero, themed bg when scrolled or on sub-pages
  const showBg = scrolled || !isHome;
  const navBg = showBg
    ? "bg-base-100/90 backdrop-blur-2xl shadow-sm border-b border-base-300/50"
    : "bg-transparent border-b border-transparent";

  // Text colors adapt to whether we're on transparent or opaque bg + theme
  const linkColor = showBg
    ? "text-base-content/80 hover:text-base-content"
    : "text-white/80 hover:text-white";
  const linkActiveColor = showBg ? "text-success" : "text-white";
  const iconColor = showBg
    ? isLightTheme ? "text-base-content" : "text-base-content"
    : "text-white";

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (isHome) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }
            setMobileOpen(false);
          }}
          className="flex items-center gap-2.5 group flex-shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <ellipse cx="20" cy="15" rx="18" ry="9" fill="#4ade80" opacity=".9" />
              <ellipse cx="20" cy="13" rx="14" ry="6.5" fill="#16a34a" />
              <ellipse cx="20" cy="17" rx="13" ry="5" fill="#d1fae5" opacity=".4" />
              <rect x="18" y="17" width="4" height="19" rx="2" fill="#86efac" />
              <ellipse cx="20" cy="36" rx="6" ry="2.5" fill="#166534" opacity=".4" />
            </svg>
          </div>
          <div className="flex flex-col justify-center gap-[2px]">
            <div
              className={`font-bold text-base sm:text-lg leading-tight transition-colors ${showBg ? "text-base-content" : "text-white"}`}
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.02em" }}
            >
              MycoFarm
            </div>
            <div className="text-[10px] sm:text-xs text-green-400 leading-tight opacity-70">Malang · Est. 2019</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={isHome ? `#${item.sectionId}` : item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative font-medium text-sm transition-colors duration-300
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-success
                  after:transition-all after:duration-300 hover:after:w-full
                  ${isActive(item)
                    ? `${linkActiveColor} after:w-full`
                    : `${linkColor} after:w-0`
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

          {/* Theme dropdown */}
          <div className="relative" data-theme-dd>
            <button
              onClick={() => setThemeOpen((v) => !v)}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl border text-xs font-medium transition-all
                ${showBg
                  ? "border-base-300 text-base-content/70 hover:bg-base-200"
                  : "border-white/20 text-white/80 hover:bg-white/10"
                }`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <span className="hidden sm:inline">{themeLabel}</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {themeOpen && (
              <div className="absolute top-[calc(100%+10px)] right-0 bg-base-100 border border-base-300 rounded-2xl p-3 w-52 z-[200] shadow-2xl">
                <p className="text-[10px] text-base-content/40 uppercase tracking-widest mb-2 px-2">Pilih Tema</p>
                <div className="space-y-0.5">
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => applyTheme(t.id, t.label)}
                      className={`flex items-center gap-2 w-full px-2 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer
                        ${activeTheme === t.id
                          ? "bg-base-200 text-base-content font-semibold"
                          : "text-base-content/70 hover:bg-base-200"
                        }`}
                    >
                      <span className="w-4 h-4 rounded-full flex-shrink-0 border border-base-300" style={{ background: t.bg }} />
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA - WhatsApp */}
          <a
            href={`https://wa.me/${WA_NUM}?text=Halo%20MycoFarm!`}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-4 xl:px-5 py-2.5 rounded-xl transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-green-500/30"
          >
            <WaIcon />
            <span>Pesan Sekarang</span>
          </a>

          {/* Hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${showBg ? "text-base-content hover:bg-base-200" : "text-white hover:bg-white/10"}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
      } bg-base-100/95 backdrop-blur-xl border-t border-base-300/50`}>
        <div className="px-4 py-3 space-y-0.5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={isHome ? `#${item.sectionId}` : item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`flex items-center gap-2 py-3 px-3 rounded-xl transition-colors text-sm font-medium
                ${isActive(item)
                  ? "text-success bg-success/10"
                  : "text-base-content/80 hover:text-base-content hover:bg-base-200"
                }`}
            >
              {isActive(item) && <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />}
              {item.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <a
              href={`https://wa.me/${WA_NUM}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              <WaIcon />
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
