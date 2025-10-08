import CTASection from "@/components/CTASection";
import DepoimentosCarousel from "@/components/DepoimentosCarousel";
import HeroHome from "@/components/HeroHome";
import ServicosHome from "@/components/ServicosHome";

export default function Home() {
  return (
    <div>
      <HeroHome />
      <ServicosHome />
      <DepoimentosCarousel />
      <CTASection />
    </div>
  );
}
