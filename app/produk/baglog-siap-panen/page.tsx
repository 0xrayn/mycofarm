import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Baglog Siap Panen — MycoFarm",
  description: "Miselium sudah penuh, siap mengeluarkan pin head dalam 7–14 hari. Cocok untuk pemula yang ingin langsung panen. Kapasitas 1 baglog menghasilkan 400–600g jamur selama masa aktif.",
};

const WA_NUM = "6281234567890";
const waText = encodeURIComponent("Halo MycoFarm! Saya ingin memesan Baglog Siap Panen.");

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-8 flex items-center gap-2 text-sm opacity-50">
        <Link href="/produk" className="hover:text-success transition-colors">Produk</Link>
        <span>/</span>
        <span className="text-success">Baglog Siap Panen</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="rounded-3xl overflow-hidden border border-white/10 aspect-square">
          <img
            src="https://images.unsplash.com/photo-1602491674275-316d95560fb1?w=900&q=85&fit=crop"
            alt="Baglog Siap Panen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:sticky lg:top-24">
          <span className="inline-block text-xs font-bold tracking-widest uppercase bg-success/20 text-success px-3 py-1 rounded-full mb-4">Populer</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Baglog Siap Panen
          </h1>
          <p className="opacity-70 leading-relaxed mb-6 text-base">Miselium sudah penuh, siap mengeluarkan pin head dalam 7–14 hari. Cocok untuk pemula yang ingin langsung panen. Kapasitas 1 baglog menghasilkan 400–600g jamur selama masa aktif.</p>
          <div className="text-3xl font-bold text-success mb-8">Rp 7.500/pcs</div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WA_NUM}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold py-4 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/30"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pesan via WhatsApp
            </a>
            <Link
              href="/produk"
              className="px-6 py-4 rounded-2xl border border-white/15 text-sm font-medium hover:bg-white/10 transition-all text-center"
            >
              Lihat Semua
            </Link>
          </div>
          <div className="mt-8 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
            <div className="text-xs font-bold tracking-widest uppercase opacity-40 mb-3">Keunggulan</div>
            <ul className="space-y-2 text-sm opacity-70">
              <li className="flex items-center gap-2"><span className="text-success">✓</span> Dipanen segar setiap hari</li>
              <li className="flex items-center gap-2"><span className="text-success">✓</span> 100% organik tanpa pestisida</li>
              <li className="flex items-center gap-2"><span className="text-success">✓</span> Pengiriman ke seluruh Jawa Timur</li>
              <li className="flex items-center gap-2"><span className="text-success">✓</span> Konsultasi gratis setelah beli</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
