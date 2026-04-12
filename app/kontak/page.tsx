import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak — MycoFarm",
  description: "Hubungi MycoFarm untuk pemesanan jamur tiram, baglog, atau starter kit.",
};

export default function KontakPage() {
  return (
    <>
      <div className="py-16 sm:py-20 text-center border-b border-base-300/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-base-content/40 mb-3">
            Kami Siap Membantu
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-base-content"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Hubungi <span className="text-success">Kami</span>
          </h1>
          <p className="mt-4 text-base-content/60 text-base max-w-lg mx-auto leading-relaxed">
            Ada pertanyaan soal produk, pesanan, atau ingin jadi mitra? Kami selalu siap membantu.
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
}
