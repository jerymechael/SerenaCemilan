"use client";

import { Home, Sprout, ShieldCheck } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/common/Reveal";

const features = [
  {
    icon: Home,
    title: "Homemade Recipe",
    description:
      "Original family recipes preserved for decades to maintain the authentic taste you love.",
  },
  {
    icon: Sprout,
    title: "Premium Ingredients",
    description:
      "We source only the finest natural ingredients, ensuring every bite is rich with quality and flavor.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Process",
    description:
      "Our production facility follows strict hygiene standards to deliver safe and clean products to your home.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container-app">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Crafted with Excellence
          </h2>
          <p className="mt-3 text-foreground/60">
            Discover why Serena Cemilan has been the favorite choice for authentic
            Indonesian treats for over a decade.
          </p>
        </Reveal>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="h-full rounded-3xl border border-brown/10 bg-white p-8 card-shadow transition-shadow hover:card-shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-brown">
                  <feature.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
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
