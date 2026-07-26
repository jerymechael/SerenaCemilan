"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle, Award, Cookie, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/common/Button";
import heroImage from "@/lib/data/Home/bghome.jpeg";

const stats = [
  { icon: Award, value: "6 Yrs", label: "Experience" },
  { icon: Cookie, value: "10+", label: "Snack Variants" },
  { icon: Heart, value: "100+", label: "Happy Customers" },
  { icon: Sparkles, value: "100%", label: "Homemade" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="relative h-[660px] w-full sm:h-[600px] lg:h-[640px]">
        {/* Full-bleed background image */}
        <Image
          src={heroImage}
          alt="Assorted traditional Indonesian snacks in glass jars"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Gradient overlay: opaque cream on the left so the copy stays legible,
            fading to transparent on the right so the photo reads clearly */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/50 via-transparent to-transparent" />

        {/* Text content */}
        <div className="container-app relative flex h-full items-center">
          <div className="max-w-xl pb-36 sm:pb-32 lg:pb-36">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.2rem]"
            >
              Traditional Snacks
              <br />
              Made with Love for
              <br />
              Every Moment
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="mt-5 max-w-md text-sm leading-relaxed text-foreground/60 sm:max-w-sm sm:text-base"
            >
              Savor the authentic taste of Indonesian heritage with our
              handcrafted, premium snacks. Made with traditional recipes
              passed down through generations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <Button href="/products" size="lg">
                Explore Collections
              </Button>

              <Link
                href="/gallery"
                className="group flex items-center gap-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:text-brown"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brown/25 bg-white/70 text-brown backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                  <PlayCircle size={18} strokeWidth={1.8} />
                </span>
                Watch Our Story
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
          <div className="grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-2">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/85 px-3.5 py-3 card-shadow backdrop-blur-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cream text-brown">
                    <Icon size={15} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold leading-tight text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-[10px] leading-tight text-foreground/50">
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