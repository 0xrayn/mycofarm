const MAIN_GRID = [
  {
    src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=85&fit=crop",
    label: "🍄 Jamur Tiram Segar Panen Pagi",
    sub: "Dipetik langsung dari kumbung organik kami",
    cls: "col-span-12 lg:col-span-7 row-span-2 h-64 lg:h-auto",
  },
  {
    src: "https://images.unsplash.com/photo-1611069955545-12ab11e75e99?w=600&q=80&fit=crop",
    label: "🏡 Kumbung Jamur",
    sub: "Kumbung modern berkapasitas 10.000 baglog",
    cls: "col-span-12 lg:col-span-5 h-44 lg:h-auto",
  },
  {
    src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&q=80&fit=crop",
    label: "🌿 Proses Inkubasi",
    sub: "",
    cls: "col-span-6 lg:col-span-3 h-44",
  },
  {
    src: "https://images.unsplash.com/photo-1576501756374-e84f64ead28e?w=400&q=80&fit=crop",
    label: "📦 Packaging Higienis",
    sub: "",
    cls: "col-span-6 lg:col-span-2 h-44",
  },
  {
    src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80&fit=crop",
    label: "🌾 Baglog Produktif",
    sub: "",
    cls: "col-span-12 lg:col-span-3 h-44",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80&fit=crop",
    label: "🍳 Masakan Lezat",
    sub: "",
    cls: "col-span-12 lg:col-span-4 h-44",
  },
  {
    src: "https://images.unsplash.com/photo-1609501676725-7186f017a4b9?w=500&q=80&fit=crop",
    label: "📦 Paket Siap Kirim",
    sub: "",
    cls: "col-span-12 lg:col-span-4 h-44",
  },
  {
    src: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=500&q=80&fit=crop",
    label: "🔍 Detail Tekstur Premium",
    sub: "",
    cls: "col-span-12 lg:col-span-4 h-44",
  },
];

const EXTRA_GRID = [
  {
    src: "https://images.unsplash.com/photo-1543353071-087092ec393a?w=700&q=80&fit=crop",
    label: "🌈 Varietas Jamur Tiram",
    sub: "Putih, Kuning, Pink",
  },
  {
    src: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?w=700&q=80&fit=crop",
    label: "⚗️ Proses Sterilisasi Baglog",
    sub: "Standar HACCP",
  },
];

function GalleryItem({ src, label, sub, cls }: { src: string; label: string; sub: string; cls: string }) {
  return (
    <div className={`relative rounded-3xl overflow-hidden cursor-pointer group ${cls}`}>
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover block group-hover:scale-[1.08] transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-white font-bold text-base block">{label}</span>
        {sub && <span className="text-white/70 text-xs block">{sub}</span>}
      </div>
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
          <h2 className="text-5xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Lihat Sendiri <span className="text-success">Kualitasnya</span>
          </h2>
          <p className="mt-4 opacity-60 max-w-lg mx-auto">
            Dokumentasi nyata dari kebun kami — transparan dan apa adanya.
          </p>
        </div>

        {/* Main masonry grid */}
        <div className="grid grid-cols-12 grid-rows-3 gap-4 lg:h-[680px]">
          {MAIN_GRID.map((item) => (
            <GalleryItem key={item.label} {...item} />
          ))}
        </div>

        {/* Extra 2-col row */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {EXTRA_GRID.map((item) => (
            <div key={item.label} className="relative h-52 rounded-3xl overflow-hidden cursor-pointer group">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover block group-hover:scale-[1.08] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-bold text-base block">{item.label}</span>
                <span className="text-white/60 text-xs block">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
