"use client";

import { Wheat, BookOpen, ShieldCheck, Package, Truck } from "lucide-react";
import { journeySteps } from "@/lib/data/categories";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/common/Reveal";

const icons = { wheat: Wheat, book: BookOpen, shield: ShieldCheck, package: Package, truck: Truck };

export function JourneySteps() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="container-app">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            The Journey of Freshness
          </h2>
        </Reveal>

        <StaggerContainer className="relative mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-5">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-brown/15 sm:block" />
          {journeySteps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <StaggerItem key={step.title}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brown card-shadow">
                    <Icon size={20} />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-foreground/40">
                    Step {i + 1}
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-foreground">
                    {step.title}
                  </p>
                  <p className="mt-1 max-w-[140px] text-xs leading-relaxed text-foreground/55">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
