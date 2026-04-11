import Budidaya from "@/components/Budidaya";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proses Budidaya — MycoFarm",
  description: "Pelajari proses budidaya jamur tiram MycoFarm dari pembuatan baglog hingga panen.",
};

export default function ProsesBudidayaPage() {
  return (
    <>
      <div className="py-16 text-center border-b border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold opacity-50 mb-3">
            Transparansi Kami
          </div>
          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Proses <span className="text-success">Budidaya</span>
          </h1>
          <p className="mt-4 opacity-60 text-base max-w-lg mx-auto leading-relaxed">
            Dari serbuk kayu hingga jamur segar di meja makan Anda — kami terbuka soal setiap langkahnya.
          </p>
        </div>
      </div>
      <Budidaya />
    </>
  );
}
