import Gallery from "@/components/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri — MycoFarm",
  description: "Dokumentasi foto kebun jamur tiram MycoFarm — kumbung, proses budidaya, dan produk segar.",
};

export default function GaleriPage() {
  return (
    <>
      <div className="py-16 text-center border-b border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold opacity-50 mb-3">
            Dokumentasi Visual
          </div>
          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Galeri <span className="text-success">MycoFarm</span>
          </h1>
          <p className="mt-4 opacity-60 text-base max-w-lg mx-auto leading-relaxed">
            Foto-foto asli dari kebun kami. Tidak ada editan berlebihan — hanya kualitas nyata.
          </p>
        </div>
      </div>
      <Gallery />
    </>
  );
}
