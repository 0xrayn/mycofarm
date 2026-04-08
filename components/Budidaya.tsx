const WA_NUM = "6281234567890";

const STEPS = [
  {
    num: "01", color: "success", emoji: "🧪",
    title: "Pembuatan Baglog",
    desc: "Campuran serbuk kayu sengon, dedak, dan kapur dolomit disterilisasi pada 121°C selama 4 jam untuk membunuh kontaminan.",
    hoverBorder: "hover:border-success/30",
  },
  {
    num: "02", color: "info", emoji: "💉",
    title: "Inokulasi Bibit",
    desc: "Bibit F2 berkualitas tinggi ditanam secara aseptis di ruang laminar flow bersertifikat untuk menghindari kontaminasi.",
    hoverBorder: "hover:border-info/30",
  },
  {
    num: "03", color: "warning", emoji: "🌡️",
    title: "Inkubasi 30–45 Hari",
    desc: "Diinkubasi pada suhu 22–28°C, kelembaban 70–80% hingga miselium memenuhi seluruh media baglog secara merata.",
    hoverBorder: "hover:border-warning/30",
  },
  {
    num: "04", color: "success", emoji: "🌿",
    title: "Panen Optimal",
    desc: "Dipanen subuh hari saat tudung masih menutup sempurna. Penanganan pasca panen higienis menjaga kesegaran hingga 7 hari.",
    hoverBorder: "hover:border-success/30",
  },
];

export default function Budidaya() {
  return (
    <section id="budidaya" className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold opacity-60 mb-3">Proses Budidaya</div>
          <h2 className="text-5xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Dari Spora <span className="text-success">ke Piring</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className={`relative bg-base-100 rounded-2xl p-7 border border-white/5 ${s.hoverBorder} hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Big number bg */}
              <div className="absolute top-[-20px] left-[-10px] text-[5rem] font-black opacity-[0.07] leading-none pointer-events-none select-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.num}</div>
              <div className={`w-12 h-12 bg-${s.color}/20 rounded-2xl flex items-center justify-center text-2xl mb-5 relative z-10`}>{s.emoji}</div>
              <div className={`text-xs text-${s.color} font-bold tracking-widest mb-2 uppercase`}>Step {s.num}</div>
              <h3 className="font-bold text-base mb-3">{s.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=75&fit=crop"
            alt="Kebun"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 bg-gradient-to-r from-green-900/80 to-emerald-800/60 p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-3 text-white">Ingin Memulai Usaha Budidaya Jamur?</h3>
                <p className="text-white/60 max-w-lg">Kami buka program pelatihan & kemitraan lengkap. Mulai dari nol, kami dampingi hingga panen pertama Anda.</p>
              </div>
              <a
                href={`https://wa.me/${WA_NUM}?text=Halo!%20Saya%20ingin%20bergabung%20program%20pelatihan%20budidaya%20jamur%20tiram.`}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 flex items-center gap-3 bg-white text-green-900 font-bold px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-xl transition-all whitespace-nowrap"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Daftar Pelatihan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
