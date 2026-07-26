"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Cookie, Heart, Sparkles, ArrowRight, PhoneCall } from "lucide-react";

const stats = [
  { icon: Award, value: "6+ Years", label: "Experience" },
  { icon: Cookie, value: "10+", label: "Snack Variants" },
  { icon: Heart, value: "100+", label: "Happy Customers" },
  { icon: Sparkles, value: "100%", label: "Homemade" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">
      <div className="relative h-[660px] w-full sm:h-[600px] lg:h-[640px]">
        {/* Full-bleed background image */}
        <Image
          src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1400&auto=format&fit=crop"
          alt="Traditional Indonesian snacks handcrafted by Serena Cemilan"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Gradient overlay: opaque cream on the left so the copy stays legible,
            fading to transparent on the right so the photo reads clearly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8F0] via-[#FFF8F0]/85 to-[#FFF8F0]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F0]/55 via-transparent to-transparent" />

        {/* Text content */}
        <div className="container-app relative flex h-full items-center">
          <div className="max-w-xl pb-36 sm:pb-32 lg:pb-36">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-[#6E4A2E] sm:text-5xl lg:text-[3.1rem]"
            >
              Crafting Indonesian Snacks with{" "}
              <span className="font-normal italic text-[#8B5E3C]">
                Passion &amp; Heritage
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
              className="mt-5 max-w-md text-sm leading-relaxed text-[#51443C]/80 sm:max-w-sm sm:text-base"
            >
              A family-owned snack business dedicated to preserving authentic
              Indonesian flavors through handcrafted recipes passed down
              across generations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-[#8B5E3C] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#6E4A2E] hover:shadow-lg"
              >
                Explore Products
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-2.5 text-sm font-semibold text-[#51443C]/80 transition-colors hover:text-[#8B5E3C]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8B5E3C]/25 bg-white/70 text-[#8B5E3C] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                  <PhoneCall size={16} strokeWidth={1.8} />
                </span>
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating stat cards anchored to the bottom of the hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="container-app absolute inset-x-0 bottom-6 sm:bottom-8"
        >
          <div className="grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/85 px-3.5 py-3 card-shadow backdrop-blur-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#8B5E3C]">
                    <Icon size={15} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold leading-tight text-[#6E4A2E]">
                      {stat.value}
                    </p>
                    <p className="text-[10px] leading-tight text-[#83746B]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}