import Hero           from "@/components/Hero";
import Stats          from "@/components/Stats";
import About          from "@/components/About";
import Nutrition      from "@/components/Nutrition";
import Products       from "@/components/Products";
import Budidaya       from "@/components/Budidaya";
import Gallery        from "@/components/Gallery";
import HealthBenefits from "@/components/HealthBenefits";
import Testimonials   from "@/components/Testimonials";
import Contact        from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Nutrition />
      <Products />
      <Budidaya />
      <Gallery />
      <HealthBenefits />
      <Testimonials />
      <Contact />
    </>
  );
}
