"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight, MoveHorizontal } from "lucide-react";
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
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Browse Our{" "}
              <span className="italic font-medium text-brown">Collections</span>
            </h2>
            <p className="mt-3 text-foreground/60">
              A closer look at our snack variants — from traditional bites and
              buttery cookies to crisp crackers, chips, and gift-ready hampers,
              each one handcrafted with authentic recipes.
            </p>
          </Reveal>

          <Reveal
            direction="left"
            className="hidden items-center gap-2 text-xs font-medium uppercase tracking-wide text-foreground/40 sm:flex"
          >
            <MoveHorizontal size={15} />
            Drag or scroll to explore
          </Reveal>
        </div>
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
              href={`/products?category=${encodeURIComponent(category.name)}`}
              draggable={false}
              className="group relative block aspect-square w-[62vw] shrink-0 overflow-hidden rounded-3xl border border-white/40 card-shadow transition-shadow duration-300 hover:card-shadow-lg sm:w-56 lg:w-64"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                draggable={false}
                sizes="(max-width: 1024px) 62vw, 256px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/70" />

              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:bg-white group-hover:text-brown">
                <ArrowUpRight size={16} />
              </span>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-display text-base font-medium text-white sm:text-lg">
                  {category.name}
                </p>
                <span className="mt-1 block h-px w-8 bg-caramel/70 transition-all duration-300 group-hover:w-12" />
              </div>
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