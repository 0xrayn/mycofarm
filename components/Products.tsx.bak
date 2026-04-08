"use client";
import { useState } from "react";

const WA_NUM = "6281234567890";

const WaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SEGAR = [
  {
    title: "Jamur Tiram Putih", badge: "Bestseller", badgeClass: "bg-success/20 text-success",
    desc: "Segar dipanen subuh. Tekstur lembut bersih, rasa gurih alami. Cocok untuk semua masakan.",
    price: "Rp 15.000", unit: "/kg", priceClass: "text-success",
    btnClass: "bg-success text-success-content",
    img: "https://images.unsplash.com/photo-1549781568-eb67ed0da6a9?w=500&q=80&fit=crop",
    waText: "Halo!%20Mau%20pesan%20Jamur%20Tiram%20Putih%20segar.",
  },
  {
    title: "Jamur Tiram Kuning", badge: "Premium", badgeClass: "bg-warning/20 text-warning",
    desc: "Golden Oyster Mushroom — warna menawan, aroma harum khas. Pilihan chef restoran bintang.",
    price: "Rp 25.000", unit: "/kg", priceClass: "text-warning",
    btnClass: "bg-warning text-warning-content",
    img: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=500&q=80&fit=crop",
    waText: "Halo!%20Mau%20pesan%20Jamur%20Tiram%20Kuning.",
  },
  {
    title: "Jamur Tiram Pink", badge: "Langka", badgeClass: "bg-secondary/20 text-secondary",
    desc: "Pink Oyster Mushroom — eksotis dan visual menawan. Rasa ringan manis, tampilan memukau.",
    price: "Rp 35.000", unit: "/kg", priceClass: "text-secondary",
    btnClass: "bg-secondary text-secondary-content",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80&fit=crop",
    waText: "Halo!%20Mau%20pesan%20Jamur%20Tiram%20Pink.",
  },
];

const BAGLOG = [
  {
    title: "Baglog Siap Panen", badge: "Populer", badgeClass: "bg-success/20 text-success",
    desc: "Miselium sudah penuh, siap mengeluarkan pin head dalam 7–14 hari. Cocok untuk pemula.",
    price: "Rp 7.500", unit: "/pcs", priceClass: "text-success",
    btnClass: "bg-success text-success-content",
    img: "https://images.unsplash.com/photo-1602491674275-316d95560fb1?w=500&q=80&fit=crop",
    waText: "Mau%20pesan%20baglog%20siap%20panen.",
  },
  {
    title: "Baglog Fresh", badge: null,
    desc: "Baru inokulasi, perlu 30–45 hari inkubasi. Lebih ekonomis, media segar = panen lebih banyak.",
    price: "Rp 5.000", unit: "/pcs", priceClass: "text-info",
    btnClass: "bg-info text-info-content",
    img: null,
    waText: "Mau%20pesan%20baglog%20fresh.",
  },
  {
    title: "Starter Kit Lengkap", badge: "Rekomendasi", badgeClass: "bg-success/20 text-success",
    desc: "50 baglog siap panen + panduan lengkap + konsultasi gratis. Sempurna untuk mulai usaha.",
    price: "Rp 350.000", unit: "/paket", priceClass: "text-success",
    btnClass: "bg-success text-success-content",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80&fit=crop",
    waText: "Mau%20pesan%20Starter%20Kit%20Jamur%20Tiram.",
  },
];

const OLAHAN = [
  { title: "Keripik Jamur", sub: "Renyah, gurih, halal", price: "Rp 25.000", unit: "/200g", priceClass: "text-success", btnClass: "bg-success/15 text-success hover:bg-success hover:text-success-content", img: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400&q=80&fit=crop", waText: "Mau%20pesan%20Keripik%20Jamur%20Tiram." },
  { title: "Abon Jamur", sub: "Kaya protein, rendah kalori", price: "Rp 35.000", unit: "/150g", priceClass: "text-warning", btnClass: "bg-warning/15 text-warning hover:bg-warning hover:text-warning-content", img: null, emoji: "🍖", waText: "Mau%20pesan%20Abon%20Jamur%20Tiram." },
  { title: "Nugget Jamur", sub: "Frozen, siap goreng", price: "Rp 30.000", unit: "/250g", priceClass: "text-error", btnClass: "bg-error/15 text-error hover:bg-error hover:text-error-content", img: "https://images.unsplash.com/photo-1606851091851-e8c8c0fca5ba?w=400&q=80&fit=crop", waText: "Mau%20pesan%20Nugget%20Jamur%20Tiram." },
  { title: "Sate Jamur", sub: "Bumbu kacang & kecap", price: "Rp 20.000", unit: "/pack", priceClass: "text-secondary", btnClass: "bg-secondary/15 text-secondary hover:bg-secondary hover:text-secondary-content", img: null, emoji: "🍢", waText: "Mau%20pesan%20Sate%20Jamur%20Tiram." },
];

function ProductCard({ p, size = "lg" }: { p: any; size?: "lg" | "sm" }) {
  return (
    <div className="relative rounded-[20px] overflow-hidden bg-white/[0.03] border border-white/[0.08] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_32px_64px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.12)] group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[inherit]" />
      <div className={`${size === "lg" ? "h-60" : "h-44"} overflow-hidden bg-base-200`}>
        {p.img ? (
          <img src={p.img} alt={p.title} className={`w-full h-full object-cover block group-hover:scale-105 transition-transform duration-700`} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">{p.emoji || "🍄"}</div>
        )}
      </div>
      <div className={size === "lg" ? "p-6" : "p-4"}>
        {size === "lg" ? (
          <>
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg">{p.title}</h3>
              {p.badge && <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${p.badgeClass}`}>{p.badge}</span>}
            </div>
            <p className="text-sm opacity-60 mb-5 leading-relaxed">{p.desc}</p>
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-5" />
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs opacity-40">Mulai dari</div>
                <div className={`text-2xl font-black ${p.priceClass}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {p.price}<span className="text-sm font-normal opacity-60">{p.unit}</span>
                </div>
              </div>
              <a href={`https://wa.me/${WA_NUM}?text=${p.waText}`} target="_blank" rel="noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all ${p.btnClass}`}>
                <WaIcon /> Pesan
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="font-bold text-sm mb-1">{p.title}</div>
            <div className="text-xs opacity-50 mb-3">{p.sub}</div>
            <div className={`font-black text-base ${p.priceClass}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {p.price}<span className="text-xs font-normal opacity-60">{p.unit}</span>
            </div>
            <a href={`https://wa.me/${WA_NUM}?text=${p.waText}`} target="_blank" rel="noreferrer"
              className={`mt-3 w-full flex justify-center py-2 rounded-lg text-xs font-semibold transition-all ${p.btnClass}`}>
              Pesan
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default function Products() {
  const [tab, setTab] = useState<"segar" | "baglog" | "olahan">("segar");

  return (
    <section id="produk" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold opacity-60 mb-3">Produk Unggulan</div>
          <h2 className="text-5xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Pilih yang <span className="text-success">Terbaik</span>
          </h2>
          <p className="mt-4 opacity-60 max-w-lg mx-auto">Dari jamur segar panen harian hingga produk olahan siap saji — semuanya hadir dengan standar kualitas premium.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-base-200 p-1.5 rounded-2xl gap-1">
            {(["segar", "baglog", "olahan"] as const).map((t) => (
              <button key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === t ? "bg-success text-success-content" : "opacity-60 hover:opacity-100"}`}>
                {t === "segar" ? "🍄 Jamur Segar" : t === "baglog" ? "🌾 Baglog" : "🥗 Olahan"}
              </button>
            ))}
          </div>
        </div>

        {/* Panes */}
        {tab === "segar" && (
          <div className="grid md:grid-cols-3 gap-8 animate-[fadeIn_0.4s_ease]">
            {SEGAR.map((p) => <ProductCard key={p.title} p={p} size="lg" />)}
          </div>
        )}
        {tab === "baglog" && (
          <div className="grid md:grid-cols-3 gap-8 animate-[fadeIn_0.4s_ease]">
            {BAGLOG.map((p) => <ProductCard key={p.title} p={p} size="lg" />)}
          </div>
        )}
        {tab === "olahan" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-[fadeIn_0.4s_ease]">
            {OLAHAN.map((p) => <ProductCard key={p.title} p={p} size="sm" />)}
          </div>
        )}
      </div>
    </section>
  );
}
