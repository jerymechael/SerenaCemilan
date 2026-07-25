"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, BookOpenCheck, HandHeart, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProductionProcess() {
  const steps = [
    {
      number: '01',
      icon: Wheat,
      title: 'Premium Ingredients',
      description: 'Only selected ingredients sourced from verified local suppliers to guarantee freshness.',
    },
    {
      number: '02',
      icon: BookOpenCheck,
      title: 'Traditional Recipes',
      description: 'Family recipes preserved over decades, keeping true to authentic heritage tastes.',
    },
    {
      number: '03',
      icon: HandHeart,
      title: 'Handcrafted Process',
      description: 'Made with care and patience, slow-baked to achieve perfect aroma and crispiness.',
    },
    {
      number: '04',
      icon: ShieldCheck,
      title: 'Quality Control',
      description: 'Every product inspected before delivery to ensure peak quality and hygienic packaging.',
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
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8B5E3C] bg-white px-3.5 py-1 rounded-full border border-[#D8A25E]/30">
            ARTISANAL CRAFTSMANSHIP
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#6E4A2E] font-bold mt-3">
            Our Production Process
          </h2>
          <p className="text-[#83746B] text-base mt-3">
            From raw ingredients to sealed packages, we uphold absolute care at every step of creation.
          </p>
        </motion.div>

        {/* Four Horizontal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#FFF8F0] card-shadow hover:card-shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF8F0] border border-[#D8A25E]/30 text-[#8B5E3C] group-hover:bg-[#8B5E3C] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-display text-2xl font-bold text-[#D8A25E]/60 group-hover:text-[#8B5E3C] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-xl font-bold text-[#6E4A2E] mb-2.5 group-hover:text-[#8B5E3C] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#51443C] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-6 pt-4 border-t border-[#FFF8F0] flex items-center justify-between text-xs font-semibold text-[#8B5E3C] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Step {step.number}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
