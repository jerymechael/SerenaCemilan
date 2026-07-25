import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Categories } from "@/components/home/Categories";
import { BestSellers } from "@/components/home/BestSellers";
import { PromoBanner } from "@/components/home/PromoBanner";
import { JourneySteps } from "@/components/home/JourneySteps";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqPreview } from "@/components/home/FaqPreview";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Categories />
      <BestSellers />
      <PromoBanner />
      <JourneySteps />
      <Testimonials />
      <FaqPreview />
      <CTASection />
    </>
  );
}
