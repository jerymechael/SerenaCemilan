"use client";

import Image from "next/image";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";

export function PromoBanner() {
  return (
    <section className="py-4 lg:py-6">
      <div className="container-app">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] card-shadow-lg">
            <Image
              src="https://picsum.photos/seed/family-hamper-promo/1600/700"
              alt="Serena Cemilan family gift hamper"
              width={1600}
              height={700}
              className="h-[360px] w-full object-cover sm:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <Badge variant="caramel" className="mb-4">
                Limited Time Offer
              </Badge>
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Special Family Package
              </h2>
              <p className="mt-3 max-w-md text-sm text-white/80 sm:text-base">
                Share cherished moments with your loved ones with our exclusive
                combination of favorite snacks — up to 15% off on all bulk orders.
              </p>
              <Button href="/products?category=Hampers" variant="white" size="lg" className="mt-7">
                Claim Discount Now
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
