"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/common/Reveal";

import chips from "@/lib/data/categoryproduct/Chips.jpeg";
import cookies from "@/lib/data/categoryproduct/Cookies.jpeg";
import crackers from "@/lib/data/categoryproduct/Crackers.jpeg";
import hampers from "@/lib/data/categoryproduct/Hampers.jpeg";
import traditionalSnacks from "@/lib/data/categoryproduct/TraditionalSnacks.jpeg";

const categories = [
  { slug: "traditional-snacks", name: "Traditional Snacks", image: traditionalSnacks },
  { slug: "cookies", name: "Cookies", image: cookies },
  { slug: "crackers", name: "Crackers", image: crackers },
  { slug: "chips", name: "Chips", image: chips },
  { slug: "hampers", name: "Hampers", image: hampers },
];

const AUTO_SPEED = 0.6; // px per animation frame (~36px/s at 60fps)
const RESUME_DELAY = 1200; // ms of inactivity before auto-scroll resumes
const EDGE_BUFFER = 2; // px tolerance so the wrap check isn't thrown off by subpixel rounding

export function Categories() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const draggingRef = useRef(false);
  const isCorrectingRef = useRef(false);

  // Duplicate the list so the track has two identical halves. Whichever
  // direction the user scrolls, once they cross out of the first half we
  // silently jump by exactly half the track width — since both halves are
  // identical, the jump lands on a pixel-identical frame and is invisible.
  const loopCategories = [...categories, ...categories];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Start slightly off the left edge so the very first auto-scroll tick
    // doesn't immediately trigger the wrap-correction below.
    track.scrollLeft = 8;

    const handleScroll = () => {
      if (isCorrectingRef.current) {
        isCorrectingRef.current = false;
        return;
      }
      const halfWidth = track.scrollWidth / 2;
      if (track.scrollLeft <= EDGE_BUFFER) {
        isCorrectingRef.current = true;
        track.scrollLeft += halfWidth;
      } else if (track.scrollLeft >= halfWidth - EDGE_BUFFER) {
        isCorrectingRef.current = true;
        track.scrollLeft -= halfWidth;
      }
    };

    track.addEventListener("scroll", handleScroll, { passive: true });

    let rafId: number;
    const step = () => {
      if (!pausedRef.current) {
        track.scrollLeft += AUTO_SPEED;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const pauseThenResume = () => {
    pausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  };

  // Regular vertical mouse wheels report delta on the Y axis — translate
  // that into horizontal movement so wheel scrolling works over this row.
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta === 0) return;
    e.preventDefault();
    track.scrollLeft += delta;
    pauseThenResume();
  };

  // Click-and-drag scrolling for desktop mouse users. Uses movementX (delta
  // since last frame) rather than an absolute start position, so it keeps
  // working correctly even if a wrap-jump happens mid-drag.
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const track = trackRef.current;
    if (!track) return;
    draggingRef.current = true;
    track.setPointerCapture(e.pointerId);
    pauseThenResume();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !draggingRef.current) return;
    track.scrollLeft -= e.movementX;
  };

  const endDrag = () => {
    draggingRef.current = false;
    pauseThenResume();
  };

  return (
    <section className="overflow-hidden bg-cream py-20 lg:py-24">
      <div className="container-app">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Browse Our Collections
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-12 w-full">
        {/* Edge fade so cards don't cut off abruptly at the viewport edge */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-28" />

        <div
          ref={trackRef}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onTouchStart={pauseThenResume}
          className="no-scrollbar flex w-full cursor-grab gap-4 overflow-x-auto active:cursor-grabbing lg:gap-6"
        >
          {loopCategories.map((category, i) => (
            <Link
              key={`${category.slug}-${i}`}
              href={`/products?category=${encodeURIComponent(category.slug)}`}
              draggable={false}
              className="group relative block aspect-square w-[62vw] shrink-0 overflow-hidden rounded-3xl card-shadow sm:w-56 lg:w-64"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                draggable={false}
                sizes="(max-width: 1024px) 62vw, 256px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-base font-medium text-white sm:text-lg">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}