import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import VisionMission from "@/components/about/VisionMission";
import ProductionProcess from "@/components/about/ProductionProcess";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import OwnerProfile from "@/components/about/OwnerProfile";
import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Hero />
      <Story />
      <VisionMission />
      <ProductionProcess />
      <WhyChooseUs />
      <OwnerProfile />
      <CTA />
    </main>
  );
}
