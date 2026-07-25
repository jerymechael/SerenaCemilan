"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Flame, ShieldCheck, Heart, Sparkle } from 'lucide-react';

export default function BehindTheScenes() {
  const processSteps = [
    {
      title: '100% Handcrafted Daily',
      desc: 'Each cookie is shaped and decorated individually by our experienced bakers to maintain authentic textures.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Hygienic & Air-Tight Sealed',
      desc: 'Vacuum-sealed in food-grade eco-jars immediately after cooling to preserve crunchiness without preservatives.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Authentic Heritage Flavor',
      desc: 'No artificial flavorings or synthetic food colors—just genuine palm sugar, fresh pandan, and premium butter.',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFF8F0]/80 relative overflow-hidden">
      <div className="container-app">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D8A25E]/30 text-[#8B5E3C] text-xs font-semibold tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 text-[#D8A25E]" />
            BEHIND THE KITCHEN
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#6E4A2E] font-bold mt-3">
            The Secrets of Our Craft
          </h2>
          <p className="text-[#83746B] text-base mt-3">
            Every bite tells a story of patience, passion, and uncompromising quality standards.
          </p>
        </motion.div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white rounded-3xl border border-[#FFF8F0] card-shadow overflow-hidden group hover:card-shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FFF8F0]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#8B5E3C] flex items-center justify-center font-display font-bold text-xs card-shadow">
                  0{idx + 1}
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-3 flex-1">
                <h3 className="font-display font-bold text-xl text-[#6E4A2E] group-hover:text-[#8B5E3C] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#51443C] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="px-6 pb-6 pt-0 text-xs font-semibold text-[#8B5E3C] flex items-center gap-1.5">
                <Sparkle className="w-3.5 h-3.5 text-[#D8A25E]" />
                <span>Serena Quality Guaranteed</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
