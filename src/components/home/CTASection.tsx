"use client";

import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/common/Button";

export function CTASection() {
  return (
    <section className="bg-background pb-20 lg:pb-24">
      <div className="container-app">
        <Reveal className="relative overflow-hidden rounded-[28px] bg-brown px-8 py-14 text-center sm:px-16 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-caramel/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <h2 className="relative font-display text-3xl font-semibold text-white sm:text-4xl">
            Ready to Taste Tradition?
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm text-white/75 sm:text-base">
            Order today and get your favorite Indonesian snacks delivered fresh to your
            doorstep, wherever you are.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/products" variant="white" size="lg">
              Shop Now
            </Button>
            <Button href="/contact" variant="ghost" size="lg" className="text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
