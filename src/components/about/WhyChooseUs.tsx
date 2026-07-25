"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, PackageCheck, Truck, Tag, Smile } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Sparkles,
      title: 'Premium Ingredients',
      description: 'Carefully handpicked raw materials without artificial flavorings or synthetic food colorings.',
    },
    {
      icon: Flame,
      title: 'Homemade Daily',
      description: 'Baked fresh every single morning in small artisanal batches to maximize rich taste and crispness.',
    },
    {
      icon: PackageCheck,
      title: 'Freshly Packed',
      description: 'Sealed air-tight in premium food-grade packaging to keep every snack crisp for weeks.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Swift and protective shipping process ensures your snacks arrive whole, safe, and fresh.',
    },
    {
      icon: Tag,
      title: 'Affordable Price',
      description: 'Authentic gourmet heritage quality priced fairly so everyone can share the joy.',
    },
    {
      icon: Smile,
      title: 'Customer Satisfaction',
      description: 'Dedicated customer support with money-back freshness guarantee for ultimate peace of mind.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container-app">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8B5E3C] bg-[#FFF8F0] px-3.5 py-1 rounded-full border border-[#D8A25E]/30">
            THE SERENA DIFFERENCE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#6E4A2E] font-bold mt-3">
            Why Choose Serena
          </h2>
          <p className="text-[#83746B] text-base mt-3">
            We take pride in every detail—from raw selection to your dining table.
          </p>
        </motion.div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="p-7 rounded-3xl bg-white border border-[#FFF8F0] card-shadow hover:border-[#D8A25E] hover:card-shadow-lg transition-all duration-300 relative group"
              >
                <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-[#FFF8F0] text-[#8B5E3C] group-hover:bg-[#8B5E3C] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display text-xl font-bold text-[#6E4A2E] mb-2 group-hover:text-[#8B5E3C] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#51443C] leading-relaxed">
                  {item.description}
                </p>

                {/* Corner accent glow on hover */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#D8A25E]/10 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
