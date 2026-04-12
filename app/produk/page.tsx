import Products from "@/components/Products";
import Nutrition from "@/components/Nutrition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk — MycoFarm",
  description: "Jamur Tiram Putih, Kuning, Pink, Baglog, Starter Kit, dan Produk Olahan dari MycoFarm Malang.",
};

export default function ProdukPage() {
  return (
    <>
      <div className="py-16 sm:py-20 text-center border-b border-base-300/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-base-content/40 mb-3">
            Katalog Lengkap
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-base-content"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Produk <span className="text-success">Pilihan</span>
          </h1>
          <p className="mt-4 text-base-content/60 text-base max-w-lg mx-auto leading-relaxed">
            Dari jamur segar hingga baglog siap panen — semua tersedia dengan kualitas premium organik.
          </p>
        </div>
      </div>
      <Products />
      <Nutrition />
    </>
  );
}
