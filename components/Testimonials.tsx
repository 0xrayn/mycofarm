const TESTIMONIALS = [
  {
    name: "Ibu Sari Indah",
    role: "Pemilik Warung Makan, Malang",
    avatar: "https://i.pravatar.cc/56?img=5",
    color: "success",
    text: "Sudah langganan 2 tahun lebih. Jamurnya selalu segar dan fresh pagi-pagi sudah diantarkan. Pelanggan warung saya sangat suka menu jamur tiram kami sekarang!",
  },
  {
    name: "Budi Santoso",
    role: "Reseller, Kota Batu",
    avatar: "https://i.pravatar.cc/56?img=12",
    color: "info",
    text: "Baglog dari MycoFarm konsisten banget kualitasnya. Berat standar, miselium rata sempurna, panen perdana selalu lebat. Sudah rekomendasikan ke belasan teman pebisnis jamur.",
  },
  {
    name: "dr. Dewi Kusuma",
    role: "Dokter & Food Enthusiast",
    avatar: "https://i.pravatar.cc/56?img=9",
    color: "secondary",
    text: "Sebagai dokter, saya sangat merekomendasikan jamur tiram MycoFarm. Organik, bebas pestisida, dan kandungan nutrisinya sangat baik. Pasien saya pun ikut rutin konsumsi!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold opacity-60 mb-3">Testimoni</div>
          <h2 className="text-5xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Apa Kata <span className="text-success">Pelanggan</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:-translate-y-1.5 hover:bg-white/[0.07] transition-all duration-400"
            >
              <div
                className="absolute top-3 left-5 text-[4rem] leading-none opacity-[0.15] pointer-events-none select-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >&ldquo;</div>
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={`w-14 h-14 rounded-full object-cover border-2 border-${t.color}/30`}
                />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs opacity-50">{t.role}</div>
                  <div className="flex gap-0.5 mt-1 text-warning text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-sm opacity-75 leading-relaxed italic">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
