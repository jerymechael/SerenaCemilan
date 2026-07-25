"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/content";
import { Reveal } from "@/components/common/Reveal";

const galleryShots = [
  "https://picsum.photos/seed/gallery-shot-1/400/400",
  "https://picsum.photos/seed/gallery-shot-2/400/300",
  "https://picsum.photos/seed/gallery-shot-3/400/300",
  "https://picsum.photos/seed/gallery-shot-4/400/300",
  "https://picsum.photos/seed/gallery-shot-5/400/400",
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container-app grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            What Our Snack Lovers Say
          </h2>
          <p className="mt-3 max-w-md text-foreground/60">
            Join thousands of happy customers who have made Serena Cemilan their favorite
            snack tradition.
          </p>

          <div className="mt-8 rounded-3xl border border-brown/10 bg-white p-7 card-shadow">
            <div className="flex items-center gap-1 text-caramel">
              {Array.from({ length: active.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-caramel text-caramel" />
              ))}
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">
              &ldquo;{active.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={active.avatar}
                  alt={active.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{active.name}</p>
                  <p className="text-xs text-foreground/50">{active.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brown/15 text-brown transition-colors hover:bg-cream"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brown/15 text-brown transition-colors hover:bg-cream"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" className="grid grid-cols-2 gap-3">
          <div className="relative aspect-square overflow-hidden rounded-3xl card-shadow">
            <Image src={galleryShots[0]} alt="Serena Cemilan snacks" fill sizes="25vw" className="object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="relative overflow-hidden rounded-3xl card-shadow">
              <Image src={galleryShots[1]} alt="Serena Cemilan snacks" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-3xl card-shadow">
              <Image src={galleryShots[2]} alt="Serena Cemilan snacks" fill sizes="25vw" className="object-cover" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl card-shadow">
            <Image src={galleryShots[3]} alt="Serena Cemilan snacks" fill sizes="25vw" className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl card-shadow">
            <Image src={galleryShots[4]} alt="Serena Cemilan snacks" fill sizes="25vw" className="object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
