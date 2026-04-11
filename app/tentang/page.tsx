import About from "@/components/About";
import Stats from "@/components/Stats";
import HealthBenefits from "@/components/HealthBenefits";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami — MycoFarm",
  description: "Kenali lebih dekat MycoFarm, kebun jamur tiram premium organik dari Malang sejak 2019.",
};

export default function TentangPage() {
  return (
    <>
      <div className="py-16 text-center border-b border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold opacity-50 mb-3">
            Profil Perusahaan
          </div>
          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Tentang <span className="text-success">MycoFarm</span>
          </h1>
          <p className="mt-4 opacity-60 text-base max-w-lg mx-auto leading-relaxed">
            Budidaya jamur tiram premium dengan standar organik tertinggi, langsung dari dataran tinggi Malang.
          </p>
        </div>
      </div>
      <About />
      <Stats />
      <HealthBenefits />
      <Testimonials />
    </>
  );
}
