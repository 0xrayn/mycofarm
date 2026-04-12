import Budidaya from "@/components/Budidaya";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proses Budidaya — MycoFarm",
  description: "Lihat langkah-langkah proses budidaya jamur tiram organik MycoFarm dari sterilisasi hingga panen.",
};

export default function BudidayaPage() {
  return (
    <>
      <div className="py-16 sm:py-20 text-center border-b border-base-300/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-base-content/40 mb-3">
            Dari Benih ke Panen
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-base-content"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Proses <span className="text-success">Budidaya</span>
          </h1>
          <p className="mt-4 text-base-content/60 text-base max-w-lg mx-auto leading-relaxed">
            Setiap langkah dilakukan dengan standar organik tertinggi untuk menghasilkan jamur tiram berkualitas premium.
          </p>
        </div>
      </div>
      <Budidaya />
    </>
  );
}
