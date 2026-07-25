"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, CheckCircle2, Sparkles } from 'lucide-react';

export default function VisionMission() {
  const missionItems = [
    'Maintain authentic recipes',
    'Use premium ingredients',
    'Ensure hygiene',
    'Deliver excellent customer service',
    'Innovate without losing tradition',
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container-app">
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF8F0] border border-[#D8A25E]/30 text-[#8B5E3C] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A25E]" />
            OUR PURPOSE
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#6E4A2E] font-bold mt-3">
            Vision & Mission
          </h2>
          <p className="text-[#83746B] text-base mt-3">
            The core principles that guide our recipes, craftsmanship, and service to customers every single day.
          </p>
        </motion.div>

        {/* Two Beautiful Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#6E4A2E] to-[#8B5E3C] text-white card-shadow-lg relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Background Pattern Accent */}
            <div className="absolute top-0 right-0 -translate-y-8 translate-x-8 w-48 h-48 rounded-full bg-[#D8A25E]/20 blur-2xl pointer-events-none" />
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 text-[#D8A25E]">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D8A25E] block mb-2">
                OUR VISION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                Preserving Authentic Flavors for Generations
              </h3>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-light">
                Become Indonesia's trusted homemade snack brand that preserves authentic flavors for future generations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-2 text-xs text-white/70 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#D8A25E]" />
              Authentic • Artisanal • Beloved
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#FFF8F0] card-shadow-lg relative overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FFF8F0] border border-[#D8A25E]/30 flex items-center justify-center mb-6 text-[#8B5E3C]">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#8B5E3C] block mb-2">
                OUR MISSION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#6E4A2E] mb-6">
                Our Daily Commitments
              </h3>

              <ul className="space-y-3.5">
                {missionItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                    className="flex items-start gap-3 text-[#51443C] text-sm sm:text-base font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#FFF8F0] text-xs text-[#83746B] font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5E3C]" />
              Standardized Quality & Care
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
