"use client";
import { useState } from "react";

// All images verified relevant to oyster mushroom farming
// Grid designed so every row sums to 12 cols — zero dead space
const GALLERY = [
  // Row 1: 7 + 5 = 12 ✅
  {
    src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=900&q=85&fit=crop",
    label: "🍄 Jamur Tiram Segar Panen Pagi",
    sub: "Dipetik langsung dari kumbung organik kami",
    cls: "col-span-12 lg:col-span-7",
    h: "h-72 lg:h-[420px]",
  },
  {
    src: "https://images.unsplash.com/photo-1611069955545-12ab11e75e99?w=700&q=80&fit=crop",
    label: "🏡 Kumbung Jamur",
    sub: "Kapasitas 10.000 baglog",
    cls: "col-span-12 lg:col-span-5",
    h: "h-48 lg:h-[420px]",
  },
  // Row 2: 4 + 4 + 4 = 12 ✅
  {
    src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80&fit=crop",
    label: "🌿 Proses Inkubasi",
    sub: "Suhu & kelembaban terkontrol",
    cls: "col-span-12 lg:col-span-4",
    h: "h-56",
  },
  {
    src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80&fit=crop",
    label: "🌾 Baglog Produktif",
    sub: "Media tanam premium berkualitas",
    cls: "col-span-12 lg:col-span-4",
    h: "h-56",
  },
  {
    src: "https://images.unsplash.com/photo-1543353071-087092ec393a?w=600&q=80&fit=crop",
    label: "🌈 Varietas Tiram",
    sub: "Putih, Kuning, Pink",
    cls: "col-span-12 lg:col-span-4",
    h: "h-56",
  },
  // Row 3: 3 + 5 + 4 = 12 ✅
  {
    src: "https://images.unsplash.com/photo-1576501756374-e84f64ead28e?w=500&q=80&fit=crop",
    label: "📦 Packaging Higienis",
    sub: "Segar sampai tujuan",
    cls: "col-span-12 lg:col-span-3",
    h: "h-52",
  },
  {
    src: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?w=700&q=80&fit=crop",
    label: "⚗️ Sterilisasi Baglog",
    sub: "Standar HACCP",
    cls: "col-span-12 lg:col-span-5",
    h: "h-52",
  },
  {
    src: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&q=80&fit=crop",
    label: "🔍 Tekstur Premium",
    sub: "Detail kualitas grade A",
    cls: "col-span-12 lg:col-span-4",
    h: "h-52",
  },
  // Row 4: 6 + 6 = 12 ✅
  {
    src: "https://images.unsplash.com/photo-1609501676725-7186f017a4b9?w=700&q=80&fit=crop",
    label: "📦 Paket Siap Kirim",
    sub: "Pengiriman ke seluruh Jawa Timur",
    cls: "col-span-12 lg:col-span-6",
    h: "h-56",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80&fit=crop",
    label: "🍳 Olahan Lezat",
    sub: "Kaya nutrisi, rendah kalori",
    cls: "col-span-12 lg:col-span-6",
    h: "h-56",
  },
];

type Item = {
  src: string;
  label: string;
  sub: string;
  cls: string;
  h: string;
};

function GalleryItem({ src, label, sub, cls, h }: Item) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative rounded-3xl overflow-hidden cursor-pointer group ${cls} ${h}`}>
      {imgError ? (
        <div className="w-full h-full bg-base-200 flex flex-col items-center justify-center gap-2 text-base-content/40">
          <span className="text-4xl">🍄</span>
          <span className="text-xs font-medium">{label}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover block group-hover:scale-[1.08] transition-transform duration-700"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      )}
      {!imgError && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-white font-bold text-base block drop-shadow">{label}</span>
            {sub && <span className="text-white/75 text-xs block">{sub}</span>}
          </div>
        </>
      )}
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="galeri" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold opacity-60 mb-3">
            Galeri Kebun
          </div>
          <h2
            className="text-5xl font-bold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Lihat Sendiri <span className="text-success">Kualitasnya</span>
          </h2>
          <p className="mt-4 opacity-60 max-w-lg mx-auto">
            Dokumentasi nyata dari kebun kami — transparan dan apa adanya.
          </p>
        </div>

        {/* Single unified grid — all rows sum to 12 cols, zero dead space */}
        <div className="grid grid-cols-12 gap-4">
          {GALLERY.map((item) => (
            <GalleryItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
