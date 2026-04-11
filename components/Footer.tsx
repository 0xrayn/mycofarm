import Link from "next/link";

const WA_NUM = "6281234567890";

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Produk", href: "/produk" },
  { label: "Proses Budidaya", href: "/proses-budidaya" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

const PRODUCTS = [
  { label: "Jamur Tiram Putih", href: "/produk/jamur-tiram-putih" },
  { label: "Jamur Tiram Kuning", href: "/produk/jamur-tiram-kuning" },
  { label: "Jamur Tiram Pink", href: "/produk/jamur-tiram-pink" },
  { label: "Baglog Siap Panen", href: "/produk/baglog-siap-panen" },
  { label: "Starter Kit", href: "/produk/starter-kit" },
  { label: "Produk Olahan", href: "/produk/olahan" },
];

export default function Footer() {
  return (
    <footer className="bg-base-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <ellipse cx="20" cy="15" rx="18" ry="9" fill="#4ade80" opacity=".9" />
                <ellipse cx="20" cy="13" rx="14" ry="6.5" fill="#16a34a" />
                <rect x="18" y="17" width="4" height="19" rx="2" fill="#86efac" />
              </svg>
              <span className="text-xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>MycoFarm</span>
            </div>
            <p className="text-sm opacity-50 leading-relaxed mb-5">Budidaya & Supplier Jamur Tiram Premium Malang. Organik, Segar, Berkualitas sejak 2019.</p>
            <div className="flex gap-3">
              <a href={`https://wa.me/${WA_NUM}`} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <div className="text-xs font-bold tracking-widest uppercase opacity-40 mb-4">Navigasi</div>
            <ul className="space-y-2.5 text-sm opacity-60">
              {NAV_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:opacity-100 hover:text-success transition-all">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Produk */}
          <div>
            <div className="text-xs font-bold tracking-widest uppercase opacity-40 mb-4">Produk</div>
            <ul className="space-y-2.5 text-sm opacity-60">
              {PRODUCTS.map((p) => (
                <li key={p.href}><Link href={p.href} className="hover:opacity-100 hover:text-success transition-all">{p.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <div className="text-xs font-bold tracking-widest uppercase opacity-40 mb-4">Kontak</div>
            <ul className="space-y-2.5 text-sm opacity-60">
              <li>📱 +62 812-3456-7890</li>
              <li>📧 hello@mycofarm.id</li>
              <li>📍 Malang, Jawa Timur</li>
              <li className="pt-2">
                <a href={`https://wa.me/${WA_NUM}`} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-green-500 hover:text-white transition-all">
                  Chat Sekarang
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-40">
          <div className="text-center md:text-left">
            <p>© 2026 MycoFarm. All rights reserved. | PIRT No. 2062717010052-22</p>
            <p className="mt-1">Jl. Sumber Sari No. 88, Lowokwaru, Malang, Jawa Timur 65145</p>
          </div>
          <div className="text-center">
            <p>Dibuat oleh{" "}
              <a href="https://rayn.web.id" target="_blank" rel="noreferrer" className="text-success/70 hover:text-success transition-colors font-medium underline underline-offset-2">
                rayn.web.id
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
