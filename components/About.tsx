const WA_NUM = "6281234567890";

const BENEFITS = [
  { icon: "🌿", bg: "bg-green-500/15",   title: "100% Organik",     desc: "Tanpa pestisida & bahan kimia berbahaya" },
  { icon: "🔬", bg: "bg-blue-500/15",    title: "Teruji BPOM",      desc: "Kandungan nutrisi terverifikasi lab resmi" },
  { icon: "🚚", bg: "bg-yellow-500/15",  title: "Pengiriman Cepat", desc: "Panen subuh, dikirim pagi — segar terjamin" },
  { icon: "♻️", bg: "bg-emerald-500/15", title: "Ramah Lingkungan", desc: "Limbah baglog jadi pupuk organik premium" },
];

const IMGS = [
  { src: "https://images.unsplash.com/photo-1611069955545-12ab11e75e99?w=400&q=80&fit=crop", alt: "Kebun jamur",   h: "h-56" },
  { src: "https://images.unsplash.com/photo-1602491674275-316d95560fb1?w=400&q=80&fit=crop", alt: "Baglog jamur",  h: "h-36" },
  { src: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=400&q=80&fit=crop",   alt: "Masakan jamur", h: "h-36" },
  { src: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?w=400&q=80&fit=crop", alt: "Jamur segar",   h: "h-56" },
];

export default function About() {
  return (
    <section id="tentang" className="py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Image area */}
          <div className="relative">
            {/* Mobile: single wide image */}
            <div className="lg:hidden w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-white/[0.08]">
              <img src={IMGS[0].src} alt={IMGS[0].alt} className="w-full h-full object-cover block" loading="lazy" />
            </div>

            {/* Desktop: staggered 2-col collage */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {IMGS.slice(0, 2).map((img) => (
                  <div key={img.alt} className={`rounded-2xl overflow-hidden ${img.h} border border-white/[0.08]`}>
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover block" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="space-y-4 mt-8">
                {IMGS.slice(2).map((img) => (
                  <div key={img.alt} className={`rounded-2xl overflow-hidden ${img.h} border border-white/[0.08]`}>
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover block" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge — desktop only */}
            <div className="hidden lg:flex absolute -bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-xl shadow-green-500/30 items-center gap-3 w-max">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-bold">Dipercaya 200+ Pelanggan</span>
            </div>
          </div>

          {/* Text */}
          <div className="pt-2 lg:pt-0">
            <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-base-content/60 mb-3">
              Tentang MycoFarm
            </div>
            <h2
              className="font-bold leading-tight mb-5 text-base-content"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
            >
              Kebun Jamur <span className="text-success">Terpercaya</span> di Malang
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-4 text-sm sm:text-base">
              Sejak 2019, kami berdedikasi menghadirkan jamur tiram premium yang ditanam secara organik di
              dataran tinggi Malang. Iklim sempurna di ketinggian 500m dpl membuat setiap jamur tumbuh dengan nutrisi optimal.
            </p>
            <p className="text-base-content/70 leading-relaxed mb-7 text-sm sm:text-base">
              Metode budidaya modern teruji, tanpa pestisida kimia. Setiap baglog dibuat dari bahan pilihan dan
              diinokulasi dalam ruang steril bersertifikat.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-7">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex items-start gap-2 sm:gap-3">
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 ${b.bg} rounded-xl flex items-center justify-center text-base sm:text-xl flex-shrink-0`}>
                    {b.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-base-content">{b.title}</div>
                    <div className="text-[10px] sm:text-xs text-base-content/60 mt-0.5 leading-relaxed">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${WA_NUM}?text=Halo%20MycoFarm!%20Saya%20ingin%20tahu%20lebih%20lanjut.`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-success text-success-content px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all text-sm sm:text-base"
            >
              Hubungi Kami
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
