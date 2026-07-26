"use client";

import { Home, Sprout, ShieldCheck } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/common/Reveal";

const features = [
  {
    index: "01",
    icon: Home,
    title: "Homemade Recipe",
    description:
      "Original family recipes preserved for decades to maintain the authentic taste you love.",
  },
  {
    index: "02",
    icon: Sprout,
    title: "Premium Ingredients",
    description:
      "We source only the finest natural ingredients, ensuring every bite is rich with quality and flavor.",
  },
  {
    index: "03",
    icon: ShieldCheck,
    title: "Hygienic Process",
    description:
      "Our production facility follows strict hygiene standards to deliver safe and clean products to your home.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-background pb-20 pt-8 lg:pb-24 lg:pt-12">
      {/* Soft decorative glow, echoes other sections for a cohesive feel */}
      <div className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-caramel/10 blur-3xl" />

      <div className="container-app relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Crafted with{" "}
            <span className="italic font-medium text-brown">Excellence</span>
          </h2>
          <p className="mt-3 text-foreground/60">
            Discover why Serena Cemilan has been the favorite choice for authentic
            Indonesian treats for over a decade.
          </p>
        </Reveal>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-brown/10 bg-white p-8 card-shadow transition-all duration-300 hover:-translate-y-1 hover:border-caramel/40 hover:card-shadow-lg">
                {/* Faint index numeral, editorial touch */}
                <span className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-semibold text-brown/[0.06] transition-colors duration-300 group-hover:text-caramel/10">
                  {feature.index}
                </span>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-brown transition-colors duration-300 group-hover:bg-brown group-hover:text-white">
                  <feature.icon size={22} />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <span className="relative mt-2 block h-px w-8 bg-caramel/50 transition-all duration-300 group-hover:w-12" />
                <p className="relative mt-3 text-sm leading-relaxed text-foreground/60">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}