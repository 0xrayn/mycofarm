const WA_NUM = "6281234567890";

const HEALTH_BENEFITS = [
  {
    icon: "🫀", bg: "bg-red-500/15",
    title: "Jantung Sehat",
    desc: "Lovastatin alami menurunkan kolesterol LDL dan menjaga tekanan darah tetap optimal.",
  },
  {
    icon: "🛡️", bg: "bg-blue-500/15",
    title: "Imunitas Kuat",
    desc: "Beta-glukan adalah imunomodulator alami yang memperkuat sistem kekebalan tubuh secara signifikan.",
  },
  {
    icon: "⚖️", bg: "bg-green-500/15",
    title: "Ideal untuk Diet",
    desc: "Hanya 33 kal/100g, tinggi serat, bebas kolesterol — diet bisa tetap lezat bersama jamur tiram.",
  },
  {
    icon: "🧠", bg: "bg-purple-500/15",
    title: "Fungsi Otak",
    desc: "Kaya vitamin B-kompleks yang mendukung fungsi saraf dan kesehatan kognitif jangka panjang.",
  },
  {
    icon: "🦴", bg: "bg-orange-500/15",
    title: "Tulang & Sendi",
    desc: "Mengandung Vitamin D, kalsium, dan fosfor untuk menjaga kepadatan tulang dan kesehatan sendi.",
  },
  {
    icon: "🩸", bg: "bg-pink-500/15",
    title: "Anti Anemia",
    desc: "Kandungan zat besi dan asam folat yang tinggi membantu pembentukan sel darah merah yang sehat.",
  },
];

export default function HealthBenefits() {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Intro column */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold opacity-60 mb-3">
              Manfaat Kesehatan
            </div>
            <h2
              className="text-4xl font-bold leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Mengapa Konsumsi{" "}
              <span className="text-success">Jamur Tiram?</span>
            </h2>
            <p className="mt-4 opacity-60 text-sm leading-relaxed">
              Jamur tiram adalah superfood alami yang telah diakui dunia medis sebagai salah satu pangan
              fungsional terbaik.
            </p>
            <a
              href={`https://wa.me/${WA_NUM}?text=Halo%20MycoFarm!%20Saya%20tertarik%20manfaat%20kesehatan%20jamur%20tiram.`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-success text-sm font-semibold group"
            >
              Konsultasi Lebih Lanjut
              <svg
                width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"
                viewBox="0 0 24 24"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Benefits grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            {HEALTH_BENEFITS.map((b, i) => (
              <div
                key={b.title}
                className="flex gap-4 p-5 bg-base-100 rounded-2xl border border-white/5 hover:border-success/25 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className={`w-14 h-14 ${b.bg} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
                  {b.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{b.title}</h4>
                  <p className="text-xs opacity-60 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
