"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Heart, Award, Flame } from 'lucide-react';

export default function Hero() {
  const stats = [
    { icon: Flame, label: 'Fresh Daily Batches', value: '100% Artisanal' },
    { icon: Award, label: 'Heritage Recipes', value: '3 Generations' },
    { icon: Heart, label: 'Happy Customers', value: '15,000+ Shared' },
  ];

  return (
    <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-24 overflow-hidden bg-[#FAFAFA]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop"
          alt="Indonesian Traditional Bakery Kitchen"
          fill
          priority
          className="object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/95 via-[#FAFAFA]/90 to-[#FAFAFA]" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-[#D8A25E]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 rounded-full bg-[#8B5E3C]/20 blur-3xl pointer-events-none" />
      </div>

      <div className="container-app relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-5"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D8A25E]/40 text-[#8B5E3C] text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#D8A25E]" />
            OUR VISUAL GALLERY
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#6E4A2E] font-bold leading-tight">
            Crafting Heritage in Every Detail
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#51443C] font-medium leading-relaxed max-w-2xl mx-auto">
            Take a look behind our kitchen doors—from hand selecting natural palm sugar and fresh coconut to baking fresh daily batches and packing gift hampers for families across Indonesia.
          </p>
        </motion.div>

        {/* Stats Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#FFF8F0] card-shadow flex items-center justify-center gap-3.5 text-center sm:text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFF8F0] text-[#8B5E3C] border border-[#D8A25E]/30 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-base text-[#6E4A2E]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#83746B] font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
